import type { ViewStyle } from 'react-native';
import type { SpacingScaleKey } from './flexbox';
import type { DynamicSingleFn, DynamicSpacingFn } from './maps';

export type Padding = Pick<ViewStyle, 'padding' | 'paddingTop' | 'paddingBottom' | 'paddingLeft' | 'paddingRight' | 'paddingHorizontal' | 'paddingVertical' | 'paddingStart' | 'paddingEnd'>;

export type Margin = Pick<ViewStyle, 'margin' | 'marginTop' | 'marginBottom' | 'marginLeft' | 'marginRight' | 'marginHorizontal' | 'marginVertical' | 'marginStart' | 'marginEnd'>;

export type SpacingScaleOrAuto = SpacingScaleKey | 'auto';

type PaddingPrefix = 'px' | 'py' | 'pt' | 'pr' | 'pb' | 'pl' | 'ps' | 'pe' | 'p';
export type PaddingStaticToken = {
  [P in PaddingPrefix]: `${P}_${SpacingScaleOrAuto}`;
}[PaddingPrefix];

type MarginPrefix = 'mx' | 'my' | 'mt' | 'mr' | 'mb' | 'ml' | 'ms' | 'me' | 'm';
export type MarginStaticToken = {
  [P in MarginPrefix]: `${P}_${SpacingScaleOrAuto}`;
}[MarginPrefix];

export interface PaddingHelpers {
  p_: DynamicSpacingFn<Padding>;
  px_: DynamicSingleFn<Padding>;
  py_: DynamicSingleFn<Padding>;
  pt_: DynamicSingleFn<Padding>;
  pr_: DynamicSingleFn<Padding>;
  pb_: DynamicSingleFn<Padding>;
  pl_: DynamicSingleFn<Padding>;
  ps_: DynamicSingleFn<Padding>;
  pe_: DynamicSingleFn<Padding>;
}

export type PaddingStyles = PaddingHelpers & Record<PaddingStaticToken, Padding> & Record<string, Padding | DynamicSingleFn<Padding> | DynamicSpacingFn<Padding>>;

export interface MarginHelpers {
  m_: DynamicSpacingFn<Margin>;
  mx_: DynamicSingleFn<Margin>;
  my_: DynamicSingleFn<Margin>;
  mt_: DynamicSingleFn<Margin>;
  mr_: DynamicSingleFn<Margin>;
  mb_: DynamicSingleFn<Margin>;
  ml_: DynamicSingleFn<Margin>;
  ms_: DynamicSingleFn<Margin>;
  me_: DynamicSingleFn<Margin>;
}

export type MarginStyles = MarginHelpers & Record<MarginStaticToken, Margin> & Record<string, Margin | DynamicSingleFn<Margin> | DynamicSpacingFn<Margin>>;
