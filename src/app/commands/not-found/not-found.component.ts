import { Input, ChangeDetectionStrategy, Component } from '@angular/core';
import { ECommandType } from 'src/app/shared/models/commands.model';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotFoundComponent {
  @Input() command!: ECommandType;
}
