import type { TextStyle, ViewStyle } from 'react-native';
import type { VariadicStyleFn } from './internal';

export type BorderStyleFn = VariadicStyleFn<ViewStyle | TextStyle>;

export interface BorderStyles {
  [key: string]: ViewStyle | TextStyle | BorderStyleFn;
}
