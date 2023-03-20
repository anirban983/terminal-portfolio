export interface ICommandItem {
  id: number;
  disableInput: boolean;
  command: ECommandType;
  exists: boolean;
}

export enum ECommandType {
  EMPTY = '',
  WELCOME = 'welcome',
  HELP = 'help'
}
