import type { TextStyle } from 'react-native';

export interface BorderStyles {
  [key: string]: TextStyle | ((...args: any[]) => TextStyle);
}
