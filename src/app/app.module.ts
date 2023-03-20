import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelpModule } from './commands/help/help.module';
import { WelcomeModule } from './commands/welcome/welcome.module';
import { TerminalModule } from './components/terminal/terminal.module';
import { TitleBarModule } from './components/title-bar/title-bar.module';
import { RunCommandModule } from './components/run-command/run-command.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, TerminalModule, TitleBarModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
