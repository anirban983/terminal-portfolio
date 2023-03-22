import { ChangeDetectionStrategy, Component } from '@angular/core';
import { workEx } from 'src/app/shared/data/utils.data';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorkComponent {
  workExperience = workEx;
}
