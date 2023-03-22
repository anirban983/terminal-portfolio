import { ChangeDetectionStrategy, Component } from '@angular/core';
import { projects } from 'src/app/shared/data/utils.data';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectsComponent {
  projects = projects;
}
