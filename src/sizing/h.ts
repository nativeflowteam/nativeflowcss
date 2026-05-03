import { spacingScale } from '../constants/spacingScale';
import { getCachedStyle } from '../internal/boundedStyleCache';

const h = {
  h_full: { height: '100%' },
  h_half: { height: '50%' },
  h_auto: { height: 'auto' },

  w_: (value: number | string) => getCachedStyle(`h|${value}`, () => ({ height: value })),
  max_: (value: number | string) => getCachedStyle(`hmax|${value}`, () => ({ maxHeight: value })),
  min_: (value: number | string) => getCachedStyle(`hmin|${value}`, () => ({ minHeight: value })),
} as Record<string, unknown>;

for (const key of Object.keys(spacingScale)) {
  const n = spacingScale[key as keyof typeof spacingScale];
  h[`h_${key}`] = { height: n };
  h[`max_${key}`] = { maxHeight: n };
  h[`min_${key}`] = { minHeight: n };
}

export default h;
