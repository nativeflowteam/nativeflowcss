import type { TextStyle } from 'react-native';

export interface ColuredTextStyle {
  [key: string]: TextStyle | ((...args: any[]) => TextStyle);
}
