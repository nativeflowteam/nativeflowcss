const size = {
  // Predefined size properties
  s_1: { width: 4, height: 4 },
  s_2: { width: 8, height: 8 },
  s_3: { width: 12, height: 12 },
  s_4: { width: 16, height: 16 },
  s_5: { width: 20, height: 20 },
  s_6: { width: 24, height: 24 },
  s_7: { width: 28, height: 28 },
  s_8: { width: 32, height: 32 },
  s_9: { width: 36, height: 36 },
  s_10: { width: 40, height: 40 },
  s_11: { width: 44, height: 44 },
  s_12: { width: 48, height: 48 },
  s_14: { width: 56, height: 56 },
  s_16: { width: 64, height: 64 },
  s_20: { width: 80, height: 80 },
  s_24: { width: 96, height: 96 },
  s_28: { width: 112, height: 112 },
  s_32: { width: 128, height: 128 },
  s_36: { width: 144, height: 144 },
  s_40: { width: 160, height: 160 },
  s_44: { width: 176, height: 176 },
  s_48: { width: 192, height: 192 },
  s_52: { width: 208, height: 208 },
  s_56: { width: 224, height: 224 },
  s_60: { width: 240, height: 240 },
  s_64: { width: 256, height: 256 },
  s_72: { width: 288, height: 288 },
  s_80: { width: 320, height: 320 },
  s_96: { width: 384, height: 384 },

  // Dynamic size function
  s_: (value: number | string) => ({
    width: Number(value),
    height: Number(value),
  }),
};

export default size;
