import type { ViewStyle } from 'react-native';
import type { SpacingScaleKey } from './flexbox';

/** Scale-backed height tokens (`h_4`, `max_14`, …). */
export type HeightSpacingToken = `h_${SpacingScaleKey}` | `max_${SpacingScaleKey}` | `min_${SpacingScaleKey}`;
/** Scale-backed width tokens (`w_4`, `max_14`, …). */
export type WidthSpacingToken = `w_${SpacingScaleKey}` | `max_${SpacingScaleKey}` | `min_${SpacingScaleKey}`;

export interface HeightStylesCore {
  h_full: ViewStyle;
  h_half: ViewStyle;
  h_auto: ViewStyle;
  w_: (value: number | string) => ViewStyle;
  max_: (value: number | string) => ViewStyle;
  min_: (value: number | string) => ViewStyle;
}

/** Default export of [`h`](../sizing/h.ts): core helpers plus any string key resolving to height-related `ViewStyle`. */
export type HeightStyles = HeightStylesCore & Record<string, ViewStyle>;

export interface WidthStylesCore {
  w_full: ViewStyle;
  w_half: ViewStyle;
  w_auto: ViewStyle;
  w_: (value: number | string) => ViewStyle;
  max_: (value: number | string) => ViewStyle;
  min_: (value: number | string) => ViewStyle;
}

/** Default export of [`w`](../sizing/w.ts). */
export type WidthStyles = WidthStylesCore & Record<string, ViewStyle>;
