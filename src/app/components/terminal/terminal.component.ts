import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ECommandType, ICommandItem } from 'src/app/shared/models/commands.model';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TerminalComponent {
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

  executeCommand(commandItem: ICommandItem): void {
    const found = this.commandItems.find((item) => item.id === commandItem.id);
    if (found) {
      found.disableInput = true;
      found.exists = this.checkIfCommandExists(found.command);
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
}
