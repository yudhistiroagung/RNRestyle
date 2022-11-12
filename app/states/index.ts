import { atom } from 'jotai';
import { ThemeNames } from '@/theme';

export const activeTheme = atom<ThemeNames>('light');
