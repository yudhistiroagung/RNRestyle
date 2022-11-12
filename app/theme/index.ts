import light, { Theme } from './light';
import dark from './dark';

export type ThemeNames = 'light' | 'dark';

export const themes = { light, dark } as const;

export type { Theme };
