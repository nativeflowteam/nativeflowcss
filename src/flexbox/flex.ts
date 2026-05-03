import { spacingScale } from '../constants/spacingScale';
import { getCachedStyle } from '../internal/boundedStyleCache';
import type { Flex } from '../types/flexbox';

const flex = {
  f_: (num: number | string = 1): Flex =>
    getCachedStyle(`f|${num}`, () => ({
      flex: Number(num),
    })),

  f_1: { flex: 1 },
  f_2: { flex: 2 },
  f_3: { flex: 3 },
  f_4: { flex: 4 },
  f_5: { flex: 5 },
  f_6: { flex: 6 },
  f_7: { flex: 7 },
  f_8: { flex: 8 },
  f_9: { flex: 9 },

  gap_: (num: number | string = 0): Flex =>
    getCachedStyle(`gap|${num}`, () => ({
      gap: Number(num),
    })),

  gap_x_: (num: number | string = 0): Flex =>
    getCachedStyle(`gapx|${num}`, () => ({
      rowGap: Number(num),
    })),

  gap_y_: (num: number | string = 0): Flex =>
    getCachedStyle(`gapy|${num}`, () => ({
      columnGap: Number(num),
    })),

  basis_: (value: string | number = 'auto'): Flex =>
    getCachedStyle(`basis|${value}`, () => ({
      flexBasis: value === 'auto' ? value : Number(value),
    })),

  row: {
    flexDirection: 'row',
  },
  row_reverse: {
    flexDirection: 'row-reverse',
  },
  col: {
    flexDirection: 'column',
  },
  column_reverse: {
    flexDirection: 'column-reverse',
  },

  grow: {
    flexGrow: 1,
  },
  grow_0: {
    flexGrow: 0,
  },

  shrink: {
    flexShrink: 1,
  },
  shrink_0: {
    flexShrink: 0,
  },

  wrap: {
    flexWrap: 'wrap',
  },
  wrap_reverse: {
    flexWrap: 'wrap-reverse',
  },
  nowrap: {
    flexWrap: 'nowrap',
  },

  basis_auto: {
    flexBasis: 'auto',
  },
} as Flex & Record<string, Flex | Record<string, unknown>>;

for (const key of Object.keys(spacingScale)) {
  const n = spacingScale[key as keyof typeof spacingScale];
  flex[`gap_${key}`] = { gap: n };
  flex[`gap_x_${key}`] = { rowGap: n };
  flex[`gap_y_${key}`] = { columnGap: n };
  flex[`basis_${key}`] = { flexBasis: n };
}

export default flex as Flex;
