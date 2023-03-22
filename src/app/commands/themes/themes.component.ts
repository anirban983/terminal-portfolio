import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-themes',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThemesComponent {}
