export interface ICommandItem {
  id: number;
  disabled: boolean;
  command: ECommandType;
  entered: boolean;
  exists: boolean;
}

export enum ECommandType {
  ABOUT = 'about',
  EMPTY = '',
  CLEAR = 'clear',
  CERTIFICATES = 'certificates',
  CV = 'cv',
  EDUCATION = 'education',
  EMAIL = 'email',
  GUI = 'gui',
  HELP = 'help',
  INTERESTS = 'interests',
  LINKEDIN = 'linkedin',
  PROJECTS = 'projects',
  SKILLS = 'skills',
  THEMES = 'themes',
  WELCOME = 'welcome',
  WORK = 'work'
}
