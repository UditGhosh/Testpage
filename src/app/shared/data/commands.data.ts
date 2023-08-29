import { ECommandType } from '../models/commands.model';

export const availableCommands = [
  { name: ECommandType.ABOUT, description: 'about Udit', parent: null },
  { name: ECommandType.CERTIFICATES, description: 'My certifications', parent: null },
  { name: ECommandType.CLEAR, description: 'Clears terminal', parent: null },
  { name: ECommandType.CV, description: 'Get my resume', parent: null },
  { name: ECommandType.EDUCATION, description: 'My Academic Background', parent: null },
  { name: ECommandType.EMAIL, description: 'Email Me :)', parent: null },
  { name: ECommandType.HELP, description: 'Check available commands', parent: null },
  { name: ECommandType.INTERESTS, description: 'my interests and hobbies', parent: null },
  { name: ECommandType.LINKEDIN, description: 'Give my LinkedIn profile a view :)', parent: null },
  { name: ECommandType.PROJECTS, description: 'Personal Projects', parent: null },
  { name: ECommandType.SKILLS, description: 'Technical Skills', parent: null },
  { name: ECommandType.THEMES, description: 'check available themes', parent: null },
  { name: ECommandType.WELCOME, description: 'Display Welcome Section', parent: null },
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
