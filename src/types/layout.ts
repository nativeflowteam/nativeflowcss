export type AspectRatio = {
  aspectRatio: number | string;
};

export type Direction = {
  direction: 'inherit' | 'ltr' | 'rtl';
};

export type Display = {
  display: 'none' | 'flex';
};

export type SizeMode =
  | 'cover'
  | 'contain'
  | 'stretch'
  | 'repeat'
  | 'center'
  | 'fill'
  | 'scale_down';

export type PositionValue = { [key: string]: number | string };
