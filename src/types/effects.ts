import type { ViewStyle, ImageStyle } from 'react-native';

export interface BgStyles {
  [key: string]:
    | ViewStyle
    | ImageStyle
    | ((...args: any[]) => ViewStyle | ImageStyle);
}

export interface ShadowStyles {
  [key: string]: ViewStyle | ((...args: any[]) => ViewStyle);
}
