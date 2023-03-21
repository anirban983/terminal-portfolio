export interface ICommandItem {
  id: number;
  disableInput: boolean;
  command: ECommandType;
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
  HISTORY = 'history',
  INTERESTS = 'interests',
  PROJECTS = 'projects',
  SOCIALS = 'socials',
  SKILLS = 'skills',
  THEMES = 'themes',
  WELCOME = 'welcome',
  WORK = 'wrok'
}
