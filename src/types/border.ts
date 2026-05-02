import type { TextStyle } from 'react-native';

type BorderStyleFn = {
  bivarianceHack(...args: Array<string | number>): TextStyle;
}['bivarianceHack'];

export interface BorderStyles {
  [key: string]: TextStyle | BorderStyleFn;
}
