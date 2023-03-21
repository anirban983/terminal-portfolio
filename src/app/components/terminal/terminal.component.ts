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
      disableInput: true,
      command: ECommandType.WELCOME,
      exists: true
    },
    {
      id: 1,
      disableInput: false,
      command: ECommandType.EMPTY,
      exists: true
    }
  ];
  autoFocusSubscription!: Subscription;

  ngAfterViewInit(): void {
    this.commandInputs.changes.subscribe(() => {
      if (this.commandInputs.length) this.commandInputs.last.nativeElement.focus();
    });
  }

  executeCommand(commandItem: ICommandItem, event: KeyboardEvent): void {
    const value = (event.target as HTMLInputElement).value as ECommandType;

    if (value === ECommandType.CLEAR) {
      this.commandItems = [
        {
          id: 0,
          disableInput: false,
          command: ECommandType.EMPTY,
          exists: true
        }
      ];
    } else {
      commandItem.disableInput = true;
      commandItem.command = value;
      commandItem.exists = this.checkIfCommandExists(commandItem.command);

      this.commandItems.push({
        id: this.commandItems.length,
        disableInput: false,
        command: ECommandType.EMPTY,
        exists: true
      });
    }
  }

  checkIfCommandExists(command: ECommandType): boolean {
    return Object.values(ECommandType).includes(command);
  }

  ngOnDestroy(): void {
    this.autoFocusSubscription?.unsubscribe();
  }
}
