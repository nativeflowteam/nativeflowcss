import type { ViewStyle, ImageStyle } from 'react-native';

type BgStyleFn = {
  bivarianceHack(...args: Array<string | number>): ViewStyle | ImageStyle;
}['bivarianceHack'];

type ShadowStyleFn = {
  bivarianceHack(...args: Array<string | number>): ViewStyle;
}['bivarianceHack'];

export interface BgStyles {
  [key: string]: ViewStyle | ImageStyle | BgStyleFn;
}

export interface ShadowStyles {
  [key: string]: ViewStyle | ShadowStyleFn;
}
