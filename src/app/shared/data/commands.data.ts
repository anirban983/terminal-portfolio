import { ECommandType } from '../models/commands.model';

export const availableCommands = [
  { name: ECommandType.ABOUT, description: 'about Anirban kar', parent: null },
  { name: ECommandType.CERTIFICATES, description: 'my certifications', parent: null },
  { name: ECommandType.CLEAR, description: 'clear terminal', parent: null },
  { name: ECommandType.CV, description: 'download my curriculum vitae', parent: null },
  { name: ECommandType.EDUCATION, description: 'my education background', parent: null },
  { name: ECommandType.EMAIL, description: 'send an email to me', parent: null },
  { name: ECommandType.GUI, description: 'go to my portfolio in GUI', parent: null },
  { name: ECommandType.HELP, description: 'check available commands', parent: null },
  { name: ECommandType.INTERESTS, description: 'my interests and hobbies', parent: null },
  { name: ECommandType.LINKEDIN, description: 'go to my linkedin profile', parent: null },
  { name: ECommandType.PROJECTS, description: 'my personal projects', parent: null },
  { name: ECommandType.SKILLS, description: 'my technical skills', parent: null },
  { name: ECommandType.THEMES, description: 'check available themes', parent: null },
  { name: ECommandType.WELCOME, description: 'display welcome section', parent: null },
  { name: ECommandType.WORK, description: 'my work experience', parent: null },
  { name: ECommandType.THEMES_SET_DARK, description: 'set dark theme', parent: ECommandType.THEMES },
  { name: ECommandType.THEMES_SET_ESPRESSO, description: 'set espresso theme', parent: ECommandType.THEMES },
  { name: ECommandType.THEMES_SET_LIGHT, description: 'set light theme', parent: ECommandType.THEMES },
  { name: ECommandType.THEMES_SET_PARADISE, description: 'set paradise theme', parent: ECommandType.THEMES },
  { name: ECommandType.THEMES_SET_UBUNTU, description: 'set ubuntu theme', parent: ECommandType.THEMES }
];

export const availableControls = [
  { name: 'Tab or Ctrl + i', description: 'autocomplete the command' },
  { name: 'Up Arrow', description: 'go back to previous command' },
  { name: 'Ctrl + l', description: 'clear the terminal' }
];

export const parentCommands = [ECommandType.THEMES];
