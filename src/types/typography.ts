import type { TextStyle } from 'react-native';

type TextStyleFn = {
  bivarianceHack(...args: Array<string | number>): TextStyle;
}['bivarianceHack'];

export interface ColuredTextStyle {
  [key: string]: TextStyle | TextStyleFn;
}
