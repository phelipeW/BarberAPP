import '@react-navigation/native';

import theme from './theme';

declare module '@react-navigation/native' {
  type ThemeType = typeof theme;

  export interface Theme extends ThemeType {}
}
