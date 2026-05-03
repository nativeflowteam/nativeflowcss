import type { Flex } from '../types/flexbox';

const flex = {
  // Function to handle dynamic flex values
  f_: (num: number | string = 1): Flex => ({
    flex: Number(num),
  }),

  f_1: { flex: 1 },
  f_2: { flex: 2 },
  f_3: { flex: 3 },
  f_4: { flex: 4 },
  f_5: { flex: 5 },
  f_6: { flex: 6 },
  f_7: { flex: 7 },
  f_8: { flex: 8 },
  f_9: { flex: 9 },

  // Function to handle dynamic gap values
  gap_: (num: number | string = 0): Flex => ({
    gap: Number(num),
  }),

  // Gap properties
  gap_0: {
    gap: 0,
  },
  gap_1: {
    gap: 4,
  },
  gap_2: {
    gap: 8,
  },
  gap_3: {
    gap: 12,
  },
  gap_4: {
    gap: 16,
  },
  gap_5: {
    gap: 20,
  },
  gap_6: {
    gap: 24,
  },
  gap_7: {
    gap: 28,
  },
  gap_8: {
    gap: 32,
  },
  gap_9: {
    gap: 36,
  },
  gap_10: {
    gap: 40,
  },
  gap_11: {
    gap: 44,
  },
  gap_12: {
    gap: 48,
  },
  gap_14: {
    gap: 56,
  },
  gap_16: {
    gap: 64,
  },
  gap_20: {
    gap: 80,
  },
  gap_24: {
    gap: 96,
  },
  gap_28: {
    gap: 112,
  },
  gap_32: {
    gap: 128,
  },
  gap_36: {
    gap: 144,
  },
  gap_40: {
    gap: 160,
  },
  gap_44: {
    gap: 176,
  },
  gap_48: {
    gap: 192,
  },
  gap_52: {
    gap: 208,
  },
  gap_56: {
    gap: 224,
  },
  gap_60: {
    gap: 240,
  },
  gap_64: {
    gap: 256,
  },
  gap_72: {
    gap: 288,
  },
  gap_80: {
    gap: 320,
  },
  gap_96: {
    gap: 384,
  },

  // Function to handle dynamic row gap values
  gap_x_: (num: number | string = 0): Flex => ({
    rowGap: Number(num),
  }),

  // Row gap properties
  gap_x_0: {
    rowGap: 0,
  },
  gap_x_1: {
    rowGap: 4,
  },
  gap_x_2: {
    rowGap: 8,
  },
  gap_x_3: {
    rowGap: 12,
  },
  gap_x_4: {
    rowGap: 16,
  },
  gap_x_5: {
    rowGap: 20,
  },
  gap_x_6: {
    rowGap: 24,
  },
  gap_x_7: {
    rowGap: 28,
  },
  gap_x_8: {
    rowGap: 32,
  },
  gap_x_9: {
    rowGap: 36,
  },
  gap_x_10: {
    rowGap: 40,
  },
  gap_x_11: {
    rowGap: 44,
  },
  gap_x_12: {
    rowGap: 48,
  },
  gap_x_14: {
    rowGap: 56,
  },
  gap_x_16: {
    rowGap: 64,
  },
  gap_x_20: {
    rowGap: 80,
  },
  gap_x_24: {
    rowGap: 96,
  },
  gap_x_28: {
    rowGap: 112,
  },
  gap_x_32: {
    rowGap: 128,
  },
  gap_x_36: {
    rowGap: 144,
  },
  gap_x_40: {
    rowGap: 160,
  },
  gap_x_44: {
    rowGap: 176,
  },
  gap_x_48: {
    rowGap: 192,
  },
  gap_x_52: {
    rowGap: 208,
  },
  gap_x_56: {
    rowGap: 224,
  },
  gap_x_60: {
    rowGap: 240,
  },
  gap_x_64: {
    rowGap: 256,
  },
  gap_x_72: {
    rowGap: 288,
  },
  gap_x_80: {
    rowGap: 320,
  },
  gap_x_96: {
    rowGap: 384,
  },

  // Function to handle dynamic column gap values
  gap_y_: (num: number | string = 0): Flex => ({
    columnGap: Number(num),
  }),

  // Column gap properties
  gap_y_0: {
    columnGap: 0,
  },
  gap_y_1: {
    columnGap: 4,
  },
  gap_y_2: {
    columnGap: 8,
  },
  gap_y_3: {
    columnGap: 12,
  },
  gap_y_4: {
    columnGap: 16,
  },
  gap_y_5: {
    columnGap: 20,
  },
  gap_y_6: {
    columnGap: 24,
  },
  gap_y_7: {
    columnGap: 28,
  },
  gap_y_8: {
    columnGap: 32,
  },
  gap_y_9: {
    columnGap: 36,
  },
  gap_y_10: {
    columnGap: 40,
  },
  gap_y_11: {
    columnGap: 44,
  },
  gap_y_12: {
    columnGap: 48,
  },
  gap_y_14: {
    columnGap: 56,
  },
  gap_y_16: {
    columnGap: 64,
  },
  gap_y_20: {
    columnGap: 80,
  },
  gap_y_24: {
    columnGap: 96,
  },
  gap_y_28: {
    columnGap: 112,
  },
  gap_y_32: {
    columnGap: 128,
  },
  gap_y_36: {
    columnGap: 144,
  },
  gap_y_40: {
    columnGap: 160,
  },
  gap_y_44: {
    columnGap: 176,
  },
  gap_y_48: {
    columnGap: 192,
  },
  gap_y_52: {
    columnGap: 208,
  },
  gap_y_56: {
    columnGap: 224,
  },
  gap_y_60: {
    columnGap: 240,
  },
  gap_y_64: {
    columnGap: 256,
  },
  gap_y_72: {
    columnGap: 288,
  },
  gap_y_80: {
    columnGap: 320,
  },
  gap_y_96: {
    columnGap: 384,
  },

  // Flex direction properties
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

  // Flex grow properties
  grow: {
    flexGrow: 1,
  },
  grow_0: {
    flexGrow: 0,
  },

  // Flex shrink properties
  shrink: {
    flexShrink: 1,
  },
  shrink_0: {
    flexShrink: 0,
  },

  // Flex wrap properties
  wrap: {
    flexWrap: 'wrap',
  },
  wrap_reverse: {
    flexWrap: 'wrap-reverse',
  },
  nowrap: {
    flexWrap: 'nowrap',
  },

  // Function to handle dynamic flex basis values
  basis_: (value: string | number = 'auto'): Flex => ({
    flexBasis: value === 'auto' ? value : Number(value),
  }),

  // Flex basis properties
  basis_0: {
    flexBasis: 0,
  },
  basis_1: {
    flexBasis: 4,
  },
  basis_2: {
    flexBasis: 8,
  },
  basis_3: {
    flexBasis: 12,
  },
  basis_4: {
    flexBasis: 16,
  },
  basis_5: {
    flexBasis: 20,
  },
  basis_6: {
    flexBasis: 24,
  },
  basis_7: {
    flexBasis: 28,
  },
  basis_8: {
    flexBasis: 32,
  },
  basis_9: {
    flexBasis: 36,
  },
  basis_10: {
    flexBasis: 40,
  },
  basis_11: {
    flexBasis: 44,
  },
  basis_12: {
    flexBasis: 48,
  },
  basis_14: {
    flexBasis: 56,
  },
  basis_16: {
    flexBasis: 64,
  },
  basis_20: {
    flexBasis: 80,
  },
  basis_24: {
    flexBasis: 96,
  },
  basis_28: {
    flexBasis: 112,
  },
  basis_32: {
    flexBasis: 128,
  },
  basis_36: {
    flexBasis: 144,
  },
  basis_40: {
    flexBasis: 160,
  },
  basis_44: {
    flexBasis: 176,
  },
  basis_48: {
    flexBasis: 192,
  },
  basis_52: {
    flexBasis: 208,
  },
  basis_56: {
    flexBasis: 224,
  },
  basis_60: {
    flexBasis: 240,
  },
  basis_64: {
    flexBasis: 256,
  },
  basis_72: {
    flexBasis: 288,
  },
  basis_80: {
    flexBasis: 320,
  },
  basis_96: {
    flexBasis: 384,
  },
  basis_auto: {
    flexBasis: 'auto',
  },
  basis_px: {
    flexBasis: 1,
  },
};

export default flex;
