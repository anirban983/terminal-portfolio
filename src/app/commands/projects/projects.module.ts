import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';
import { ChipModule } from 'src/app/components/chip/chip.module';

@NgModule({
  declarations: [ProjectsComponent],
  imports: [CommonModule, ChipModule],
  exports: [ProjectsComponent]
})
export class ProjectsModule {}
