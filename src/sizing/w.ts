const w = {
  // Width properties
  w_0: { width: 0 },
  w_px: { width: 1 },
  w_1: { width: 4 },
  w_2: { width: 8 },
  w_3: { width: 12 },
  w_4: { width: 16 },
  w_5: { width: 20 },
  w_6: { width: 24 },
  w_7: { width: 28 },
  w_8: { width: 32 },
  w_9: { width: 36 },
  w_10: { width: 40 },
  w_11: { width: 44 },
  w_12: { width: 48 },
  w_14: { width: 56 },
  w_16: { width: 64 },
  w_20: { width: 80 },
  w_24: { width: 96 },
  w_28: { width: 112 },
  w_32: { width: 128 },
  w_36: { width: 144 },
  w_40: { width: 160 },
  w_44: { width: 176 },
  w_48: { width: 192 },
  w_52: { width: 208 },
  w_56: { width: 224 },
  w_60: { width: 240 },
  w_64: { width: 256 },
  w_72: { width: 288 },
  w_80: { width: 320 },
  w_96: { width: 384 },

  // Max-width properties
  max_0: { maxWidth: 0 },
  max_px: { maxWidth: 1 },
  max_1: { maxWidth: 4 },
  max_2: { maxWidth: 8 },
  max_3: { maxWidth: 12 },
  max_4: { maxWidth: 16 },
  max_5: { maxWidth: 20 },
  max_6: { maxWidth: 24 },
  max_7: { maxWidth: 28 },
  max_8: { maxWidth: 32 },
  max_9: { maxWidth: 36 },
  max_10: { maxWidth: 40 },
  max_11: { maxWidth: 44 },
  max_12: { maxWidth: 48 },
  max_14: { maxWidth: 56 },
  max_16: { maxWidth: 64 },
  max_20: { maxWidth: 80 },
  max_24: { maxWidth: 96 },
  max_28: { maxWidth: 112 },
  max_32: { maxWidth: 128 },
  max_36: { maxWidth: 144 },
  max_40: { maxWidth: 160 },
  max_44: { maxWidth: 176 },
  max_48: { maxWidth: 192 },
  max_52: { maxWidth: 208 },
  max_56: { maxWidth: 224 },
  max_60: { maxWidth: 240 },
  max_64: { maxWidth: 256 },
  max_72: { maxWidth: 288 },
  max_80: { maxWidth: 320 },
  max_96: { maxWidth: 384 },

  // Min-width properties
  min_0: { minWidth: 0 },
  min_px: { minWidth: 1 },
  min_1: { minWidth: 4 },
  min_2: { minWidth: 8 },
  min_3: { minWidth: 12 },
  min_4: { minWidth: 16 },
  min_5: { minWidth: 20 },
  min_6: { minWidth: 24 },
  min_7: { minWidth: 28 },
  min_8: { minWidth: 32 },
  min_9: { minWidth: 36 },
  min_10: { minWidth: 40 },
  min_11: { minWidth: 44 },
  min_12: { minWidth: 48 },
  min_14: { minWidth: 56 },
  min_16: { minWidth: 64 },
  min_20: { minWidth: 80 },
  min_24: { minWidth: 96 },
  min_28: { minWidth: 112 },
  min_32: { minWidth: 128 },
  min_36: { minWidth: 144 },
  min_40: { minWidth: 160 },
  min_44: { minWidth: 176 },
  min_48: { minWidth: 192 },
  min_52: { minWidth: 208 },
  min_56: { minWidth: 224 },
  min_60: { minWidth: 240 },
  min_64: { minWidth: 256 },
  min_72: { minWidth: 288 },
  min_80: { minWidth: 320 },
  min_96: { minWidth: 384 },

  // Dynamic width function
  w_: (value: number | string) => ({
    width: typeof value === 'string' ? value : value,
  }),

  // Dynamic max-width function
  max_: (value: number | string) => ({
    maxWidth: typeof value === 'string' ? value : value,
  }),

  // Dynamic min-width function
  min_: (value: number | string) => ({
    minWidth: typeof value === 'string' ? value : value,
  }),
};

export default w;
