import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnDestroy,
  QueryList,
  ViewChildren
} from '@angular/core';
import { Subscription } from 'rxjs';
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
  autoFocusSubscription!: Subscription;

  ngAfterViewInit(): void {
    this.commandInputs.changes.subscribe(() => {
      if (this.commandInputs.length) this.commandInputs.last.nativeElement.focus();
    });
  }

  executeCommand(commandItem: ICommandItem, event: KeyboardEvent): void {
    const value = (event.target as HTMLInputElement).value as ECommandType;

    if (value === ECommandType.CLEAR) {
      this.clearTerminal();
    } else {
      commandItem.disabled = true;
      commandItem.entered = true;
      commandItem.command = value;
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

  ngOnDestroy(): void {
    this.autoFocusSubscription?.unsubscribe();
  }
}
