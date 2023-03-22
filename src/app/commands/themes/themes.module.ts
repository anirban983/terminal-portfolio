import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemesComponent } from './themes.component';

@NgModule({
  declarations: [ThemesComponent],
  imports: [CommonModule],
  exports: [ThemesComponent]
})
export class ThemesModule {}
