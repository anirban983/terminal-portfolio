import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { ECommandType, ICommandItem } from 'src/app/shared/models/commands.model';

@Component({
  selector: 'app-run-command',
  templateUrl: './run-command.component.html',
  styleUrls: ['./run-command.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RunCommandComponent implements OnChanges {
  @Input() commandItem!: ICommandItem;
  @Output() executeCommand = new EventEmitter<ICommandItem>();

  ngOnChanges(): void {
    console.log(this.commandItem);
  }

  onInput(event: KeyboardEvent) {
    const value = (event.target as HTMLInputElement).value as ECommandType;
    this.commandItem.command = value;
    this.executeCommand.emit(this.commandItem);
  }
}
