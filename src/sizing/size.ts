import { spacingScale } from '../constants/spacingScale';
import { getCachedStyle } from '../internal/boundedStyleCache';

const size = {
  s_: (value: number | string) =>
    getCachedStyle(`size|${value}`, () => ({
      width: value,
      height: value,
    })),
} as Record<string, unknown>;

for (const key of Object.keys(spacingScale)) {
  const n = spacingScale[key as keyof typeof spacingScale];
  size[`s_${key}`] = { width: n, height: n };
}

export default size;
