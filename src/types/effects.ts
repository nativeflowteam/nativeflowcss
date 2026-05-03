import type { ViewStyle, ImageStyle } from 'react-native';
import type { VariadicStyleFn } from './internal';

export type BgStyleFn = VariadicStyleFn<ViewStyle | ImageStyle>;
export type ShadowStyleFn = VariadicStyleFn<ViewStyle>;

export interface BgStyleCallables {
  bg_color_: (value: string) => ViewStyle;
  tint_: (value: string) => ImageStyle;
  opacity_: (value: number | string) => ViewStyle;
  overlay_: (value: string) => ImageStyle;
  elevation_: (value: number | string) => ViewStyle;
}

export type BgStyles = BgStyleCallables & {
  [K in string]: K extends keyof BgStyleCallables ? BgStyleCallables[K] : ViewStyle | ImageStyle;
};

export interface ShadowStyleCallables {
  color_: (value: string) => ViewStyle;
  offset_: (width: number | string, height: number | string) => ViewStyle;
  opacity_: (value: number | string) => ViewStyle;
  rounded_: (value: number | string) => ViewStyle;
}

export type ShadowStyles = ShadowStyleCallables & {
  [K in string]: K extends keyof ShadowStyleCallables ? ShadowStyleCallables[K] : ViewStyle;
};
