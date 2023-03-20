import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleBarComponent } from './title-bar.component';

@NgModule({
  declarations: [TitleBarComponent],
  imports: [CommonModule],
  exports: [TitleBarComponent]
})
export class TitleBarModule {}
