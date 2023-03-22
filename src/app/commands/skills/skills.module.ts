import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsComponent } from './skills.component';
import { ChipModule } from 'src/app/components/chip/chip.module';

@NgModule({
  declarations: [SkillsComponent],
  imports: [CommonModule, ChipModule],
  exports: [SkillsComponent]
})
export class SkillsModule {}
