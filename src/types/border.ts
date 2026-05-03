import type { TextStyle, ViewStyle } from 'react-native';
import type { VariadicStyleFn } from './internal';

export type BorderStyleFn = VariadicStyleFn<ViewStyle | TextStyle>;

/** Explicit call signatures so dynamic index signature does not erase callability. */
export interface BorderStyleCallables {
  color_: (value: string) => ViewStyle;
  w_: (value: number | string) => ViewStyle;
  rounded_: (value: number | string) => ViewStyle;
  rounded_s_: (value: number | string) => ViewStyle;
  rounded_e_: (value: number | string) => ViewStyle;
  rounded_t_: (value: number | string) => ViewStyle;
  rounded_r_: (value: number | string) => ViewStyle;
  rounded_b_: (value: number | string) => ViewStyle;
  rounded_l_: (value: number | string) => ViewStyle;
  rounded_ss_: (value: number | string) => ViewStyle;
  rounded_se_: (value: number | string) => ViewStyle;
  rounded_ee_: (value: number | string) => ViewStyle;
  rounded_es_: (value: number | string) => ViewStyle;
  rounded_tl_: (value: number | string) => ViewStyle;
  rounded_tr_: (value: number | string) => ViewStyle;
  rounded_br_: (value: number | string) => ViewStyle;
  rounded_bl_: (value: number | string) => ViewStyle;
  b_color_: (value: string) => ViewStyle;
  b_w_: (value: number | string) => ViewStyle;
  l_color_: (value: string) => ViewStyle;
  l_w_: (value: number | string) => ViewStyle;
  r_color_: (value: string) => ViewStyle;
  r_w_: (value: number | string) => ViewStyle;
  t_color_: (value: string) => ViewStyle;
  t_w_: (value: number | string) => ViewStyle;
  s_color_: (value: string) => ViewStyle;
  s_w_: (value: number | string) => ViewStyle;
  e_color_: (value: string) => ViewStyle;
  e_w_: (value: number | string) => ViewStyle;
}

/** Known callables stay callable; every other key is a border-related style object (see [`BorderStyleCallables`](BorderStyleCallables)). */
export type BorderStyles = BorderStyleCallables & {
  [K in string]: K extends keyof BorderStyleCallables ? BorderStyleCallables[K] : ViewStyle | TextStyle;
};
