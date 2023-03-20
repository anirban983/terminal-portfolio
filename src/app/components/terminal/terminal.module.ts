import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TerminalComponent } from './terminal.component';
import { RunCommandModule } from '../run-command/run-command.module';
import { WelcomeModule } from 'src/app/commands/welcome/welcome.module';
import { HelpModule } from 'src/app/commands/help/help.module';
import { NotFoundModule } from 'src/app/commands/not-found/not-found.module';

@NgModule({
  declarations: [TerminalComponent],
  imports: [CommonModule, RunCommandModule, WelcomeModule, HelpModule, NotFoundModule],
  exports: [TerminalComponent]
})
export class TerminalModule {}
