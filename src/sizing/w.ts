import { spacingScale } from '../constants/spacingScale';
import { getCachedStyle } from '../internal/boundedStyleCache';
import type { WidthStyles } from '../types/sizing';

const w = {
  w_full: { width: '100%' },
  w_half: { width: '50%' },
  w_auto: { width: 'auto' },

  w_: (value: number | string) => getCachedStyle(`w|${value}`, () => ({ width: value })),
  max_: (value: number | string) => getCachedStyle(`wmax|${value}`, () => ({ maxWidth: value })),
  min_: (value: number | string) => getCachedStyle(`wmin|${value}`, () => ({ minWidth: value })),
} as WidthStyles;

for (const key of Object.keys(spacingScale) as Array<keyof typeof spacingScale>) {
  const n = spacingScale[key];
  w[`w_${key}`] = { width: n };
  w[`max_${key}`] = { maxWidth: n };
  w[`min_${key}`] = { minWidth: n };
}

export default w;
