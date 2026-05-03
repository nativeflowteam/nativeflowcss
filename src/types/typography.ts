import type { TextStyle } from 'react-native';
import type { VariadicStyleFn } from './internal';

export type TextStyleFn = VariadicStyleFn<TextStyle>;

export interface ColoredTextStyle {
  [key: string]: TextStyle | TextStyleFn;
}
