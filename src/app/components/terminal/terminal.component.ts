import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  OnDestroy,
  QueryList,
  ViewChildren
} from '@angular/core';
import { Subscription } from 'rxjs';
import { availableCommands } from 'src/app/shared/data/commands.data';
import { cvURL, email, linkedInProfileURL } from 'src/app/shared/data/utils.data';
import { ECommandType, ICommandItem } from 'src/app/shared/models/commands.model';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TerminalComponent implements AfterViewInit, OnDestroy {
  @ViewChildren('commandInputs') commandInputs!: QueryList<ElementRef>;
  commandItems: ICommandItem[] = [
    {
      id: 0,
      disabled: true,
      command: ECommandType.WELCOME,
      exists: true,
      entered: true
    },
    {
      id: 1,
      disabled: false,
      command: ECommandType.EMPTY,
      exists: true,
      entered: false
    }
  ];
  currentCommandId = 1;
  hints: ECommandType[] = [];
  currentHintIndex = 0;
  autoFocusSubscription!: Subscription;

  @HostListener('document:keydown.arrowdown', ['$event'])
  onArrowDown(event: KeyboardEvent) {
    event.preventDefault();
    this.focusOnInputField();
    this.goToNextStep();
  }

  @HostListener('document:keydown.arrowup', ['$event'])
  onArrowUp(event: KeyboardEvent) {
    event.preventDefault();
    this.focusOnInputField();
    this.goToPreviousStep();
  }

  @HostListener('document:keydown.control.l', ['$event'])
  onControlL(event: KeyboardEvent) {
    event.preventDefault();
    this.focusOnInputField();
    this.clearTerminal();
  }

  ngAfterViewInit(): void {
    this.autoFocusSubscription = this.commandInputs.changes.subscribe(() => {
      if (this.commandInputs.length) this.commandInputs.last.nativeElement.focus();
    });
  }

  getHints(id: number) {
    this.currentHintIndex = 0;
    const commandItem = this.findCommandItemById(id);
    if (!commandItem) {
      return;
    }

    if (commandItem.command === '') {
      this.hints = [];
      return;
    }

    this.hints = availableCommands
      .filter((command) => command.name.startsWith(commandItem.command))
      .map((command) => command.name as ECommandType);
  }

  autoComplete(id: number) {
    if (this.currentHintIndex >= this.hints.length) {
      return;
    }

    const commandItem = this.findCommandItemById(id);
    if (!commandItem) {
      return;
    }

    commandItem.command = this.hints[this.currentHintIndex];
    this.currentHintIndex += 1;
  }

  executeCommand(id: number): void {
    const commandItem = this.findCommandItemById(id);
    if (!commandItem) {
      return;
    }

    if (commandItem.command === ECommandType.CLEAR) {
      this.clearTerminal();
      return;
    } else if (commandItem.command === ECommandType.CV) {
      this.downloadCV();
    } else if (commandItem.command === ECommandType.EMAIL) {
      this.mailMe();
    } else if (commandItem.command === ECommandType.LINKEDIN) {
      this.goToLinkedin();
    }

    commandItem.disabled = true;
    commandItem.entered = true;
    commandItem.exists = this.checkIfCommandExists(commandItem.command);
    this.currentCommandId = this.commandItems.length;

    this.commandItems.push({
      id: this.currentCommandId,
      disabled: false,
      command: ECommandType.EMPTY,
      exists: true,
      entered: false
    });
  }

  findCommandItemById(id: number): ICommandItem | undefined {
    return this.commandItems.find((item) => item.id === id);
  }

  checkIfCommandExists(command: ECommandType): boolean {
    return Object.values(ECommandType).includes(command);
  }

  goToPreviousStep() {
    if (this.currentCommandId > 0) {
      this.currentCommandId -= 1;
      this.getLastCommand().command = this.commandItems[this.currentCommandId].command;
    }
  }

  goToNextStep() {
    if (this.currentCommandId < this.commandItems.length - 1) {
      this.currentCommandId += 1;
      this.getLastCommand().command =
        this.currentCommandId == this.commandItems.length - 1
          ? ECommandType.EMPTY
          : this.commandItems[this.currentCommandId].command;
    }
  }

  getLastCommand() {
    return this.commandItems[this.commandItems.length - 1];
  }

  focusOnInputField() {
    this.commandInputs.last.nativeElement.focus();
  }

  clearTerminal() {
    this.commandItems = [
      {
        id: 0,
        disabled: false,
        command: ECommandType.EMPTY,
        exists: true,
        entered: false
      }
    ];
  }

  downloadCV() {
    window.open(cvURL, '_blank');
  }

  mailMe() {
    const mailText = `mailto:${email}`;
    window.location.href = mailText;
  }

  goToLinkedin() {
    window.open(linkedInProfileURL, '_blank');
  }

  ngOnDestroy(): void {
    this.autoFocusSubscription?.unsubscribe();
  }
}
