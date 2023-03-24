import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TerminalModule } from './components/terminal/terminal.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, TerminalModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
