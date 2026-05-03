import type { ViewStyle, ImageStyle } from 'react-native';
import type { VariadicStyleFn } from './internal';

export type BgStyleFn = VariadicStyleFn<ViewStyle | ImageStyle>;
export type ShadowStyleFn = VariadicStyleFn<ViewStyle>;

export interface BgStyles {
  [key: string]: ViewStyle | ImageStyle | BgStyleFn;
}

export interface ShadowStyles {
  [key: string]: ViewStyle | ShadowStyleFn;
}
