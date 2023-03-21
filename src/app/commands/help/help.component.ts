import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HelpComponent {
  availableCommands = [
    { name: 'about', description: 'about Anirban kar' },
    { name: 'clear', description: 'clear terminal' },
    { name: 'certificates', description: 'my certifications' },
    { name: 'cv', description: 'download my curriculum vitae' },
    { name: 'education', description: 'my eudcation background' },
    { name: 'email', description: 'send an email to me' },
    { name: 'gui', description: 'go to my portfolio in GUI' },
    { name: 'help', description: 'check available commands' },
    { name: 'interests', description: 'my interests and hobbies' },
    { name: 'projects', description: 'my personal projects' },
    { name: 'socials', description: 'check out my social accounts' },
    { name: 'skills', description: 'my technical skills' },
    { name: 'themes', description: 'check available themes' },
    { name: 'welcome', description: 'display welcome section' },
    { name: 'work', description: 'my work experience' }
  ];
}
