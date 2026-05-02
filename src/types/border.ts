import type { TextStyle, ViewStyle } from 'react-native';

type BorderStyleFn = {
  bivarianceHack(...args: Array<string | number>): ViewStyle | TextStyle;
}['bivarianceHack'];

export interface BorderStyles {
  [key: string]: ViewStyle | TextStyle | BorderStyleFn;
}
