import type { ViewStyle } from 'react-native';

/** Single flex-related style fragment returned by utilities and preset keys. */
export type Flex = Partial<Pick<ViewStyle, 'flex' | 'gap' | 'flexWrap' | 'alignContent' | 'alignSelf' | 'flexDirection' | 'flexGrow' | 'flexShrink' | 'flexBasis' | 'rowGap' | 'columnGap'>>;

export type SpacingScaleKey = keyof typeof import('../constants/spacingScale').spacingScale;

export type FlexSpacingToken = `gap_${SpacingScaleKey}` | `gap_x_${SpacingScaleKey}` | `gap_y_${SpacingScaleKey}` | `basis_${SpacingScaleKey}`;

/** Default export of [`flex`](../flexbox/flex.ts): presets, callables, and spacing-scale tokens. */
export interface FlexUtilitiesCore {
  f_: (num?: number | string) => Flex;
  f_1: Flex;
  f_2: Flex;
  f_3: Flex;
  f_4: Flex;
  f_5: Flex;
  f_6: Flex;
  f_7: Flex;
  f_8: Flex;
  f_9: Flex;
  gap_: (num?: number | string) => Flex;
  gap_x_: (num?: number | string) => Flex;
  gap_y_: (num?: number | string) => Flex;
  basis_: (value?: string | number) => Flex;
  row: Flex;
  row_reverse: Flex;
  col: Flex;
  column_reverse: Flex;
  grow: Flex;
  grow_0: Flex;
  shrink: Flex;
  shrink_0: Flex;
  wrap: Flex;
  wrap_reverse: Flex;
  nowrap: Flex;
  basis_auto: Flex;
}

export type FlexUtilities = FlexUtilitiesCore & Record<FlexSpacingToken, Flex> & Record<string, Flex | Record<string, unknown>>;
