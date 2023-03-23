import { ChangeDetectionStrategy, Component } from '@angular/core';
import { availableCommands, availableControls } from 'src/app/shared/data/commands.data';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HelpComponent {
  availableCommands = availableCommands.filter((command) => !command.parent);
  availableControls = availableControls;
}
