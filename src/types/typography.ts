import type { TextStyle } from 'react-native';
import type { VariadicStyleFn } from './internal';

export type TextStyleFn = VariadicStyleFn<TextStyle>;

export interface ColoredTextStyleCallables {
  color_: (value: string) => TextStyle;
  font_family: (path: string) => TextStyle;
  shadow_color_: (color: string) => TextStyle;
  shadow_offset_: (widthVal: number | string, heightVal: number | string) => TextStyle;
  shadow_radius_: (radius: number | string) => TextStyle;
}

export type ColoredTextStyle = ColoredTextStyleCallables & {
  [K in string]: K extends keyof ColoredTextStyleCallables ? ColoredTextStyleCallables[K] : TextStyle;
};

export interface DecorationStyleCallables {
  color_: (color: string) => TextStyle;
}

export type DecorationStyles = DecorationStyleCallables & {
  [K in string]: K extends keyof DecorationStyleCallables ? DecorationStyleCallables[K] : TextStyle;
};
