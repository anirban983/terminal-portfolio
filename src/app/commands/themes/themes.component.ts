import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { availableCommands } from 'src/app/shared/data/commands.data';
import { availableThemes } from 'src/app/shared/data/utils.data';
import { ECommandType } from 'src/app/shared/models/commands.model';
import { ThemeService } from 'src/app/shared/services/theme.service';

@Component({
  selector: 'app-themes',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThemesComponent implements OnInit {
  @Input() command!: ECommandType;
  themes = availableThemes;
  childCommands = availableCommands
    .filter((command) => command.parent === ECommandType.THEMES)
    .map((command) => command.name);

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.switchTheme();
  }

  get showThemes(): boolean {
    return this.command.trimEnd() === ECommandType.THEMES;
  }

  get showOnlyUsage() {
    return (
      this.command.startsWith(ECommandType.THEMES) &&
      this.command.length > 7 &&
      !this.childCommands.includes(this.command)
    );
  }

  switchTheme() {
    if (!this.childCommands.includes(this.command)) {
      return;
    }
    const theme = this.command.split(' ').at(-1);
    this.themeService.switchTheme(theme);
  }
}
