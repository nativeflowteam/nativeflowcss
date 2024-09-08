import type { Flex } from '../types/flexbox';

const flex = {
  // Function to handle dynamic flex values
  f_: (num: number | string = 1): Flex => ({
    flex: Number(num),
  }),

  f_1: { flex: 1 } as Flex,
  f_2: { flex: 2 } as Flex,
  f_3: { flex: 3 } as Flex,
  f_4: { flex: 4 } as Flex,
  f_5: { flex: 5 } as Flex,
  f_6: { flex: 6 } as Flex,
  f_7: { flex: 7 } as Flex,
  f_8: { flex: 8 } as Flex,
  f_9: { flex: 9 } as Flex,

  // Function to handle dynamic gap values
  gap_: (num: number | string = 0): Flex => ({
    gap: Number(num),
  }),

  // Gap properties
  gap_0: {
    gap: 0,
  } as Flex,
  gap_1: {
    gap: 4,
  } as Flex,
  gap_2: {
    gap: 8,
  } as Flex,
  gap_3: {
    gap: 12,
  } as Flex,
  gap_4: {
    gap: 16,
  } as Flex,
  gap_5: {
    gap: 20,
  } as Flex,
  gap_6: {
    gap: 24,
  } as Flex,
  gap_7: {
    gap: 28,
  } as Flex,
  gap_8: {
    gap: 32,
  } as Flex,
  gap_9: {
    gap: 36,
  } as Flex,
  gap_10: {
    gap: 40,
  } as Flex,
  gap_11: {
    gap: 44,
  } as Flex,
  gap_12: {
    gap: 48,
  } as Flex,
  gap_14: {
    gap: 56,
  } as Flex,
  gap_16: {
    gap: 64,
  } as Flex,
  gap_20: {
    gap: 80,
  } as Flex,
  gap_24: {
    gap: 96,
  } as Flex,
  gap_28: {
    gap: 112,
  } as Flex,
  gap_32: {
    gap: 128,
  } as Flex,
  gap_36: {
    gap: 144,
  } as Flex,
  gap_40: {
    gap: 160,
  } as Flex,
  gap_44: {
    gap: 176,
  } as Flex,
  gap_48: {
    gap: 192,
  } as Flex,
  gap_52: {
    gap: 208,
  } as Flex,
  gap_56: {
    gap: 224,
  } as Flex,
  gap_60: {
    gap: 240,
  } as Flex,
  gap_64: {
    gap: 256,
  } as Flex,
  gap_72: {
    gap: 288,
  } as Flex,
  gap_80: {
    gap: 320,
  } as Flex,
  gap_96: {
    gap: 384,
  } as Flex,

  // Function to handle dynamic row gap values
  gap_x_: (num: number | string = 0): Flex => ({
    rowGap: Number(num),
  }),

  // Row gap properties
  gap_x_0: {
    rowGap: 0,
  } as Flex,
  gap_x_1: {
    rowGap: 4,
  } as Flex,
  gap_x_2: {
    rowGap: 8,
  } as Flex,
  gap_x_3: {
    rowGap: 12,
  } as Flex,
  gap_x_4: {
    rowGap: 16,
  } as Flex,
  gap_x_5: {
    rowGap: 20,
  } as Flex,
  gap_x_6: {
    rowGap: 24,
  } as Flex,
  gap_x_7: {
    rowGap: 28,
  } as Flex,
  gap_x_8: {
    rowGap: 32,
  } as Flex,
  gap_x_9: {
    rowGap: 36,
  } as Flex,
  gap_x_10: {
    rowGap: 40,
  } as Flex,
  gap_x_11: {
    rowGap: 44,
  } as Flex,
  gap_x_12: {
    rowGap: 48,
  } as Flex,
  gap_x_14: {
    rowGap: 56,
  } as Flex,
  gap_x_16: {
    rowGap: 64,
  } as Flex,
  gap_x_20: {
    rowGap: 80,
  } as Flex,
  gap_x_24: {
    rowGap: 96,
  } as Flex,
  gap_x_28: {
    rowGap: 112,
  } as Flex,
  gap_x_32: {
    rowGap: 128,
  } as Flex,
  gap_x_36: {
    rowGap: 144,
  } as Flex,
  gap_x_40: {
    rowGap: 160,
  } as Flex,
  gap_x_44: {
    rowGap: 176,
  } as Flex,
  gap_x_48: {
    rowGap: 192,
  } as Flex,
  gap_x_52: {
    rowGap: 208,
  } as Flex,
  gap_x_56: {
    rowGap: 224,
  } as Flex,
  gap_x_60: {
    rowGap: 240,
  } as Flex,
  gap_x_64: {
    rowGap: 256,
  } as Flex,
  gap_x_72: {
    rowGap: 288,
  } as Flex,
  gap_x_80: {
    rowGap: 320,
  } as Flex,
  gap_x_96: {
    rowGap: 384,
  } as Flex,

  // Function to handle dynamic column gap values
  gap_y_: (num: number | string = 0): Flex => ({
    columnGap: Number(num),
  }),

  // Column gap properties
  gap_y_0: {
    columnGap: 0,
  } as Flex,
  gap_y_1: {
    columnGap: 4,
  } as Flex,
  gap_y_2: {
    columnGap: 8,
  } as Flex,
  gap_y_3: {
    columnGap: 12,
  } as Flex,
  gap_y_4: {
    columnGap: 16,
  } as Flex,
  gap_y_5: {
    columnGap: 20,
  } as Flex,
  gap_y_6: {
    columnGap: 24,
  } as Flex,
  gap_y_7: {
    columnGap: 28,
  } as Flex,
  gap_y_8: {
    columnGap: 32,
  } as Flex,
  gap_y_9: {
    columnGap: 36,
  } as Flex,
  gap_y_10: {
    columnGap: 40,
  } as Flex,
  gap_y_11: {
    columnGap: 44,
  } as Flex,
  gap_y_12: {
    columnGap: 48,
  } as Flex,
  gap_y_14: {
    columnGap: 56,
  } as Flex,
  gap_y_16: {
    columnGap: 64,
  } as Flex,
  gap_y_20: {
    columnGap: 80,
  } as Flex,
  gap_y_24: {
    columnGap: 96,
  } as Flex,
  gap_y_28: {
    columnGap: 112,
  } as Flex,
  gap_y_32: {
    columnGap: 128,
  } as Flex,
  gap_y_36: {
    columnGap: 144,
  } as Flex,
  gap_y_40: {
    columnGap: 160,
  } as Flex,
  gap_y_44: {
    columnGap: 176,
  } as Flex,
  gap_y_48: {
    columnGap: 192,
  } as Flex,
  gap_y_52: {
    columnGap: 208,
  } as Flex,
  gap_y_56: {
    columnGap: 224,
  } as Flex,
  gap_y_60: {
    columnGap: 240,
  } as Flex,
  gap_y_64: {
    columnGap: 256,
  } as Flex,
  gap_y_72: {
    columnGap: 288,
  } as Flex,
  gap_y_80: {
    columnGap: 320,
  } as Flex,
  gap_y_96: {
    columnGap: 384,
  } as Flex,

  // Flex direction properties
  row: {
    flexDirection: 'row',
  } as Flex,
  row_reverse: {
    flexDirection: 'row-reverse',
  } as Flex,
  col: {
    flexDirection: 'column',
  } as Flex,
  column_reverse: {
    flexDirection: 'column-reverse',
  } as Flex,

  // Flex grow properties
  grow: {
    flexGrow: 1,
  } as Flex,
  grow_0: {
    flexGrow: 0,
  } as Flex,

  // Flex shrink properties
  shrink: {
    flexShrink: 1,
  } as Flex,
  shrink_0: {
    flexShrink: 0,
  } as Flex,

  // Flex wrap properties
  wrap: {
    flexWrap: 'wrap',
  } as Flex,
  wrap_reverse: {
    flexWrap: 'wrap-reverse',
  } as Flex,
  nowrap: {
    flexWrap: 'nowrap',
  } as Flex,

  // Function to handle dynamic flex basis values
  basis_: (value: string | number = 'auto'): Flex => ({
    flexBasis: value === 'auto' ? value : Number(value),
  }),

  // Flex basis properties
  basis_0: {
    flexBasis: 0,
  } as Flex,
  basis_1: {
    flexBasis: 4,
  } as Flex,
  basis_2: {
    flexBasis: 8,
  } as Flex,
  basis_3: {
    flexBasis: 12,
  } as Flex,
  basis_4: {
    flexBasis: 16,
  } as Flex,
  basis_5: {
    flexBasis: 20,
  } as Flex,
  basis_6: {
    flexBasis: 24,
  } as Flex,
  basis_7: {
    flexBasis: 28,
  } as Flex,
  basis_8: {
    flexBasis: 32,
  } as Flex,
  basis_9: {
    flexBasis: 36,
  } as Flex,
  basis_10: {
    flexBasis: 40,
  } as Flex,
  basis_11: {
    flexBasis: 44,
  } as Flex,
  basis_12: {
    flexBasis: 48,
  } as Flex,
  basis_14: {
    flexBasis: 56,
  } as Flex,
  basis_16: {
    flexBasis: 64,
  } as Flex,
  basis_20: {
    flexBasis: 80,
  } as Flex,
  basis_24: {
    flexBasis: 96,
  } as Flex,
  basis_28: {
    flexBasis: 112,
  } as Flex,
  basis_32: {
    flexBasis: 128,
  } as Flex,
  basis_36: {
    flexBasis: 144,
  } as Flex,
  basis_40: {
    flexBasis: 160,
  } as Flex,
  basis_44: {
    flexBasis: 176,
  } as Flex,
  basis_48: {
    flexBasis: 192,
  } as Flex,
  basis_52: {
    flexBasis: 208,
  } as Flex,
  basis_56: {
    flexBasis: 224,
  } as Flex,
  basis_60: {
    flexBasis: 240,
  } as Flex,
  basis_64: {
    flexBasis: 256,
  } as Flex,
  basis_72: {
    flexBasis: 288,
  } as Flex,
  basis_80: {
    flexBasis: 320,
  } as Flex,
  basis_96: {
    flexBasis: 384,
  } as Flex,
  basis_auto: {
    flexBasis: 'auto',
  } as Flex,
  basis_px: {
    flexBasis: 1,
  } as Flex,
};

export default flex;
