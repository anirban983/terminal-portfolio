import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TerminalModule } from './components/terminal/terminal.module';
import { TitleBarModule } from './components/title-bar/title-bar.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, TerminalModule, TitleBarModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
