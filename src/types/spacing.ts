import type { ViewStyle } from 'react-native';

export type Padding = Pick<ViewStyle, 'padding' | 'paddingTop' | 'paddingBottom' | 'paddingLeft' | 'paddingRight' | 'paddingHorizontal' | 'paddingVertical' | 'paddingStart' | 'paddingEnd'>;

export type Margin = Pick<ViewStyle, 'margin' | 'marginTop' | 'marginBottom' | 'marginLeft' | 'marginRight' | 'marginHorizontal' | 'marginVertical' | 'marginStart' | 'marginEnd'>;
