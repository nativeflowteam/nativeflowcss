import type { TextStyle } from 'react-native';
import colorList from '../utils/colorList';

// Define the type for bdr object
interface BorderStyles {
  [key: string]: TextStyle | ((...args: any[]) => TextStyle);
}

const bdr: BorderStyles = {
  // Border color
  color_: (value: string): TextStyle => ({
    borderColor: value,
  }),

  // Border width
  w_: (value: number | string): TextStyle => ({
    borderWidth: Number(value),
  }),

  // Border style
  solid: { borderStyle: 'solid' as TextStyle['borderStyle'] },
  dotted: { borderStyle: 'dotted' as TextStyle['borderStyle'] },
  dashed: { borderStyle: 'dashed' as TextStyle['borderStyle'] },

  // Border radius
  rounded_: (value: number | string): TextStyle => ({
    borderRadius: Number(value),
  }),
  rounded_none: { borderRadius: 0 },
  rounded_sm: { borderRadius: 2 },
  rounded: { borderRadius: 4 },
  rounded_md: { borderRadius: 6 },
  rounded_lg: { borderRadius: 8 },
  rounded_xl: { borderRadius: 12 },
  rounded_2xl: { borderRadius: 16 },
  rounded_3xl: { borderRadius: 24 },
  rounded_full: { borderRadius: 9999 },

  // Start radius
  rounded_s_: (value: number | string): TextStyle => ({
    borderStartStartRadius: Number(value),
    borderEndStartRadius: Number(value),
  }),
  rounded_s_none: { borderStartStartRadius: 0, borderEndStartRadius: 0 },
  rounded_s_sm: { borderStartStartRadius: 2, borderEndStartRadius: 2 },
  rounded_s: { borderStartStartRadius: 4, borderEndStartRadius: 4 },
  rounded_s_md: { borderStartStartRadius: 6, borderEndStartRadius: 6 },
  rounded_s_lg: { borderStartStartRadius: 8, borderEndStartRadius: 8 },
  rounded_s_xl: { borderStartStartRadius: 12, borderEndStartRadius: 12 },
  rounded_s_2xl: { borderStartStartRadius: 16, borderEndStartRadius: 16 },
  rounded_s_3xl: { borderStartStartRadius: 24, borderEndStartRadius: 24 },
  rounded_s_full: { borderStartStartRadius: 9999, borderEndStartRadius: 9999 },

  // End radius
  rounded_e_: (value: number | string): TextStyle => ({
    borderStartEndRadius: Number(value),
    borderEndEndRadius: Number(value),
  }),
  rounded_e_none: { borderStartEndRadius: 0, borderEndEndRadius: 0 },
  rounded_e_sm: { borderStartEndRadius: 2, borderEndEndRadius: 2 },
  rounded_e: { borderStartEndRadius: 4, borderEndEndRadius: 4 },
  rounded_e_md: { borderStartEndRadius: 6, borderEndEndRadius: 6 },
  rounded_e_lg: { borderStartEndRadius: 8, borderEndEndRadius: 8 },
  rounded_e_xl: { borderStartEndRadius: 12, borderEndEndRadius: 12 },
  rounded_e_2xl: { borderStartEndRadius: 16, borderEndEndRadius: 16 },
  rounded_e_3xl: { borderStartEndRadius: 24, borderEndEndRadius: 24 },
  rounded_e_full: { borderStartEndRadius: 9999, borderEndEndRadius: 9999 },

  // Top radius
  rounded_t_: (value: number | string): TextStyle => ({
    borderTopLeftRadius: Number(value),
    borderTopRightRadius: Number(value),
  }),
  rounded_t_none: { borderTopLeftRadius: 0, borderTopRightRadius: 0 },
  rounded_t_sm: { borderTopLeftRadius: 2, borderTopRightRadius: 2 },
  rounded_t: { borderTopLeftRadius: 4, borderTopRightRadius: 4 },
  rounded_t_md: { borderTopLeftRadius: 6, borderTopRightRadius: 6 },
  rounded_t_lg: { borderTopLeftRadius: 8, borderTopRightRadius: 8 },
  rounded_t_xl: { borderTopLeftRadius: 12, borderTopRightRadius: 12 },
  rounded_t_2xl: { borderTopLeftRadius: 16, borderTopRightRadius: 16 },
  rounded_t_3xl: { borderTopLeftRadius: 24, borderTopRightRadius: 24 },
  rounded_t_full: { borderTopLeftRadius: 9999, borderTopRightRadius: 9999 },

  // Right radius
  rounded_r_: (value: number | string): TextStyle => ({
    borderTopRightRadius: Number(value),
    borderBottomRightRadius: Number(value),
  }),
  rounded_r_none: { borderTopRightRadius: 0, borderBottomRightRadius: 0 },
  rounded_r_sm: { borderTopRightRadius: 2, borderBottomRightRadius: 2 },
  rounded_r: { borderTopRightRadius: 4, borderBottomRightRadius: 4 },
  rounded_r_md: { borderTopRightRadius: 6, borderBottomRightRadius: 6 },
  rounded_r_lg: { borderTopRightRadius: 8, borderBottomRightRadius: 8 },
  rounded_r_xl: { borderTopRightRadius: 12, borderBottomRightRadius: 12 },
  rounded_r_2xl: { borderTopRightRadius: 16, borderBottomRightRadius: 16 },
  rounded_r_3xl: { borderTopRightRadius: 24, borderBottomRightRadius: 24 },
  rounded_r_full: { borderTopRightRadius: 9999, borderBottomRightRadius: 9999 },

  // Bottom radius
  rounded_b_: (value: number | string): TextStyle => ({
    borderBottomRightRadius: Number(value),
    borderBottomLeftRadius: Number(value),
  }),
  rounded_b_none: { borderBottomRightRadius: 0, borderBottomLeftRadius: 0 },
  rounded_b_sm: { borderBottomRightRadius: 2, borderBottomLeftRadius: 2 },
  rounded_b: { borderBottomRightRadius: 4, borderBottomLeftRadius: 4 },
  rounded_b_md: { borderBottomRightRadius: 6, borderBottomLeftRadius: 6 },
  rounded_b_lg: { borderBottomRightRadius: 8, borderBottomLeftRadius: 8 },
  rounded_b_xl: { borderBottomRightRadius: 12, borderBottomLeftRadius: 12 },
  rounded_b_2xl: { borderBottomRightRadius: 16, borderBottomLeftRadius: 16 },
  rounded_b_3xl: { borderBottomRightRadius: 24, borderBottomLeftRadius: 24 },
  rounded_b_full: {
    borderBottomRightRadius: 9999,
    borderBottomLeftRadius: 9999,
  },

  // Left radius
  rounded_l_: (value: number | string): TextStyle => ({
    borderTopLeftRadius: Number(value),
    borderBottomLeftRadius: Number(value),
  }),
  rounded_l_none: { borderTopLeftRadius: 0, borderBottomLeftRadius: 0 },
  rounded_l_sm: { borderTopLeftRadius: 2, borderBottomLeftRadius: 2 },
  rounded_l: { borderTopLeftRadius: 4, borderBottomLeftRadius: 4 },
  rounded_l_md: { borderTopLeftRadius: 6, borderBottomLeftRadius: 6 },
  rounded_l_lg: { borderTopLeftRadius: 8, borderBottomLeftRadius: 8 },
  rounded_l_xl: { borderTopLeftRadius: 12, borderBottomLeftRadius: 12 },
  rounded_l_2xl: { borderTopLeftRadius: 16, borderBottomLeftRadius: 16 },
  rounded_l_3xl: { borderTopLeftRadius: 24, borderBottomLeftRadius: 24 },
  rounded_l_full: { borderTopLeftRadius: 9999, borderBottomLeftRadius: 9999 },

  // Start-Start radius
  rounded_ss_: (value: number | string): TextStyle => ({
    borderStartStartRadius: Number(value),
  }),
  rounded_ss_none: { borderStartStartRadius: 0 },
  rounded_ss_sm: { borderStartStartRadius: 2 },
  rounded_ss: { borderStartStartRadius: 4 },
  rounded_ss_md: { borderStartStartRadius: 6 },
  rounded_ss_lg: { borderStartStartRadius: 8 },
  rounded_ss_xl: { borderStartStartRadius: 12 },
  rounded_ss_2xl: { borderStartStartRadius: 16 },
  rounded_ss_3xl: { borderStartStartRadius: 24 },
  rounded_ss_full: { borderStartStartRadius: 9999 },

  // Start-End radius
  rounded_se_: (value: number | string): TextStyle => ({
    borderStartEndRadius: Number(value),
  }),
  rounded_se_none: { borderStartEndRadius: 0 },
  rounded_se_sm: { borderStartEndRadius: 2 },
  rounded_se: { borderStartEndRadius: 4 },
  rounded_se_md: { borderStartEndRadius: 6 },
  rounded_se_lg: { borderStartEndRadius: 8 },
  rounded_se_xl: { borderStartEndRadius: 12 },
  rounded_se_2xl: { borderStartEndRadius: 16 },
  rounded_se_3xl: { borderStartEndRadius: 24 },
  rounded_se_full: { borderStartEndRadius: 9999 },

  // End-End radius
  rounded_ee_: (value: number | string): TextStyle => ({
    borderEndEndRadius: Number(value),
  }),
  rounded_ee_none: { borderEndEndRadius: 0 },
  rounded_ee_sm: { borderEndEndRadius: 2 },
  rounded_ee: { borderEndEndRadius: 4 },
  rounded_ee_md: { borderEndEndRadius: 6 },
  rounded_ee_lg: { borderEndEndRadius: 8 },
  rounded_ee_xl: { borderEndEndRadius: 12 },
  rounded_ee_2xl: { borderEndEndRadius: 16 },
  rounded_ee_3xl: { borderEndEndRadius: 24 },
  rounded_ee_full: { borderEndEndRadius: 9999 },

  // End-Start radius
  rounded_es_: (value: number | string): TextStyle => ({
    borderEndStartRadius: Number(value),
  }),
  rounded_es_none: { borderEndStartRadius: 0 },
  rounded_es_sm: { borderEndStartRadius: 2 },
  rounded_es: { borderEndStartRadius: 4 },
  rounded_es_md: { borderEndStartRadius: 6 },
  rounded_es_lg: { borderEndStartRadius: 8 },
  rounded_es_xl: { borderEndStartRadius: 12 },
  rounded_es_2xl: { borderEndStartRadius: 16 },
  rounded_es_3xl: { borderEndStartRadius: 24 },
  rounded_es_full: { borderEndStartRadius: 9999 },

  // Top-Left radius
  rounded_tl_: (value: number | string): TextStyle => ({
    borderTopLeftRadius: Number(value),
  }),
  rounded_tl_none: { borderTopLeftRadius: 0 },
  rounded_tl_sm: { borderTopLeftRadius: 2 },
  rounded_tl: { borderTopLeftRadius: 4 },
  rounded_tl_md: { borderTopLeftRadius: 6 },
  rounded_tl_lg: { borderTopLeftRadius: 8 },
  rounded_tl_xl: { borderTopLeftRadius: 12 },
  rounded_tl_2xl: { borderTopLeftRadius: 16 },
  rounded_tl_3xl: { borderTopLeftRadius: 24 },
  rounded_tl_full: { borderTopLeftRadius: 9999 },

  // Top-Right radius
  rounded_tr_: (value: number | string): TextStyle => ({
    borderTopRightRadius: Number(value),
  }),
  rounded_tr_none: { borderTopRightRadius: 0 },
  rounded_tr_sm: { borderTopRightRadius: 2 },
  rounded_tr: { borderTopRightRadius: 4 },
  rounded_tr_md: { borderTopRightRadius: 6 },
  rounded_tr_lg: { borderTopRightRadius: 8 },
  rounded_tr_xl: { borderTopRightRadius: 12 },
  rounded_tr_2xl: { borderTopRightRadius: 16 },
  rounded_tr_3xl: { borderTopRightRadius: 24 },
  rounded_tr_full: { borderTopRightRadius: 9999 },

  // Bottom-Right radius
  rounded_br_: (value: number | string): TextStyle => ({
    borderBottomRightRadius: Number(value),
  }),
  rounded_br_none: { borderBottomRightRadius: 0 },
  rounded_br_sm: { borderBottomRightRadius: 2 },
  rounded_br: { borderBottomRightRadius: 4 },
  rounded_br_md: { borderBottomRightRadius: 6 },
  rounded_br_lg: { borderBottomRightRadius: 8 },
  rounded_br_xl: { borderBottomRightRadius: 12 },
  rounded_br_2xl: { borderBottomRightRadius: 16 },
  rounded_br_3xl: { borderBottomRightRadius: 24 },
  rounded_br_full: { borderBottomRightRadius: 9999 },

  // Bottom-left radius
  rounded_bl_: (value: number | string): TextStyle => ({
    borderBottomLeftRadius: Number(value),
  }),
  rounded_bl_none: { borderBottomLeftRadius: 0 },
  rounded_bl_sm: { borderBottomLeftRadius: 2 },
  rounded_bl: { borderBottomLeftRadius: 4 },
  rounded_bl_md: { borderBottomLeftRadius: 6 },
  rounded_bl_lg: { borderBottomLeftRadius: 8 },
  rounded_bl_xl: { borderBottomLeftRadius: 12 },
  rounded_bl_2xl: { borderBottomLeftRadius: 16 },
  rounded_bl_3xl: { borderBottomLeftRadius: 24 },
  rounded_bl_full: { borderBottomLeftRadius: 9999 },

  // Border bottom properties
  b_color_: (value: string): TextStyle => ({
    borderBottomColor: value,
  }),
  b_w_: (value: number | string): TextStyle => ({
    borderBottomWidth: Number(value),
  }),
  b_w: { borderBottomWidth: 1 },

  // Border left properties
  l_color_: (value: string): TextStyle => ({
    borderLeftColor: value,
  }),
  l_w_: (value: number | string): TextStyle => ({
    borderLeftWidth: Number(value),
  }),
  l_w: { borderLeftWidth: 1 },

  // Border right properties
  r_color_: (value: string): TextStyle => ({
    borderRightColor: value,
  }),
  r_w_: (value: number | string): TextStyle => ({
    borderRightWidth: Number(value),
  }),
  r_w: { borderRightWidth: 1 },

  // Border top properties
  t_color_: (value: string): TextStyle => ({
    borderTopColor: value,
  }),
  t_w_: (value: number | string): TextStyle => ({
    borderTopWidth: Number(value),
  }),
  t_w: { borderTopWidth: 1 },

  // Border start properties
  s_color_: (value: string): TextStyle => ({
    borderStartColor: value,
  }),
  s_w_: (value: number | string): TextStyle => ({
    borderStartWidth: Number(value),
  }),
  s_w: { borderStartWidth: 1 },

  // Border end properties
  e_color_: (value: string): TextStyle => ({
    borderEndColor: value,
  }),
  e_w_: (value: number | string): TextStyle => ({
    borderEndWidth: Number(value),
  }),
  e_w: { borderEndWidth: 1 },
};

// Dynamically add width properties for 1-5 properties
for (let i = 1; i <= 5; i++) {
  bdr[`w_${i}`] = { borderWidth: i } as TextStyle;
  bdr[`b_w_${i}`] = { borderBottomWidth: i } as TextStyle;
  bdr[`l_w_${i}`] = { borderLeftWidth: i } as TextStyle;
  bdr[`r_w_${i}`] = { borderRightWidth: i } as TextStyle;
  bdr[`t_w_${i}`] = { borderTopWidth: i } as TextStyle;
  bdr[`s_w_${i}`] = { borderStartWidth: i } as TextStyle;
  bdr[`e_w_${i}`] = { borderEndWidth: i } as TextStyle;
}

// Dynamically add color properties
Object.keys(colorList).forEach((colorKey) => {
  bdr[`color_${colorKey}`] = {
    borderColor: colorList[colorKey],
  } as TextStyle;

  bdr[`b_color_${colorKey}`] = {
    borderBottomColor: colorList[colorKey],
  } as TextStyle;

  bdr[`l_color_${colorKey}`] = {
    borderLeftColor: colorList[colorKey],
  } as TextStyle;

  bdr[`r_color_${colorKey}`] = {
    borderRightColor: colorList[colorKey],
  } as TextStyle;

  bdr[`t_color_${colorKey}`] = {
    borderTopColor: colorList[colorKey],
  } as TextStyle;

  bdr[`s_color_${colorKey}`] = {
    borderStartColor: colorList[colorKey],
  } as TextStyle;

  bdr[`e_color_${colorKey}`] = {
    borderEndColor: colorList[colorKey],
  } as TextStyle;
});

export default bdr;
