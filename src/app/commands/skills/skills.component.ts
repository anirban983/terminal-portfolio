import { ChangeDetectionStrategy, Component } from '@angular/core';
import { skills } from 'src/app/shared/data/utils.data';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkillsComponent {
  techincalSkills = skills;
}
