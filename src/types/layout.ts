import type { ImageStyle, ViewStyle } from 'react-native';

export type AspectRatio = Pick<ViewStyle, 'aspectRatio'>;

export type Direction = Pick<ViewStyle, 'direction'>;

export type Display = Pick<ViewStyle, 'display'>;

export type SizeMode = NonNullable<ImageStyle['resizeMode']> | 'fill' | 'scale_down';

export type PositionValue = Partial<Pick<ViewStyle, 'top' | 'right' | 'bottom' | 'left'>>;

export type PositionPreset = {
  position: NonNullable<ViewStyle['position']> | 'fixed' | 'sticky';
};
