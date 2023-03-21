import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TerminalModule } from './components/terminal/terminal.module';
import { TitleBarModule } from './components/title-bar/title-bar.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, TerminalModule, TitleBarModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
