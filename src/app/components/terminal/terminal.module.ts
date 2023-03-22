import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TerminalComponent } from './terminal.component';
import { WelcomeModule } from 'src/app/commands/welcome/welcome.module';
import { HelpModule } from 'src/app/commands/help/help.module';
import { NotFoundModule } from 'src/app/commands/not-found/not-found.module';
import { AboutModule } from '../../commands/about/about.module';
import { CertificatesModule } from '../../commands/certificates/certificates.module';
import { EducationModule } from '../../commands/education/education.module';
import { InterestsModule } from '../../commands/interests/interests.module';
import { FormsModule } from '@angular/forms';
import { ProjectsModule } from '../../commands/projects/projects.module';
import { SkillsModule } from '../../commands/skills/skills.module';
import { WorkModule } from '../../commands/work/work.module';
import { ThemesModule } from '../../commands/themes/themes.module';

@NgModule({
  declarations: [TerminalComponent],
  imports: [
    CommonModule,
    FormsModule,
    WelcomeModule,
    HelpModule,
    NotFoundModule,
    AboutModule,
    CertificatesModule,
    EducationModule,
    InterestsModule,
    ProjectsModule,
    SkillsModule,
    WorkModule,
    ThemesModule
  ],
  exports: [TerminalComponent]
})
export class TerminalModule {}
