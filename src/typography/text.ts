import type { TextStyle } from 'react-native';
import type { ColuredTextStyle } from '../types/typography';
import colorList from '../utils/colorList';

const text: ColuredTextStyle = {
  // color
  color_: (value: string): TextStyle => ({
    color: value,
  }),

  // Font family
  font_family: (path: string): TextStyle => ({
    fontFamily: path,
  }),

  // Font sizes and line heights
  fs_xs: { fontSize: 12, lineHeight: 16 },
  fs_sm: { fontSize: 14, lineHeight: 20 },
  fs_base: { fontSize: 16, lineHeight: 24 },
  fs_lg: { fontSize: 18, lineHeight: 28 },
  fs_xl: { fontSize: 20, lineHeight: 28 },
  fs_2xl: { fontSize: 24, lineHeight: 32 },
  fs_3xl: { fontSize: 30, lineHeight: 36 },
  fs_4xl: { fontSize: 36, lineHeight: 40 },
  fs_5xl: { fontSize: 48, lineHeight: 48 },
  fs_6xl: { fontSize: 60, lineHeight: 60 },
  fs_7xl: { fontSize: 72, lineHeight: 72 },
  fs_8xl: { fontSize: 96, lineHeight: 96 },
  fs_9xl: { fontSize: 128, lineHeight: 128 },

  // Font styles
  italic: { fontStyle: 'italic' as TextStyle['fontStyle'] },
  non_italic: { fontStyle: 'normal' as TextStyle['fontStyle'] },

  // Font weights
  fw_thin: { fontWeight: '100' as TextStyle['fontWeight'] },
  fw_extralight: { fontWeight: '200' as TextStyle['fontWeight'] },
  fw_light: { fontWeight: '300' as TextStyle['fontWeight'] },
  fw_normal: { fontWeight: '400' as TextStyle['fontWeight'] },
  fw_medium: { fontWeight: '500' as TextStyle['fontWeight'] },
  fw_semibold: { fontWeight: '600' as TextStyle['fontWeight'] },
  fw_bold: { fontWeight: '700' as TextStyle['fontWeight'] },
  fw_extrabold: { fontWeight: '800' as TextStyle['fontWeight'] },
  fw_black: { fontWeight: '900' as TextStyle['fontWeight'] },

  // Font variants
  smallcaps: {
    /*ios*/ fontVariant: ['small-caps'] as TextStyle['fontVariant'],
  },
  oldstyle: {
    /*ios*/ fontVariant: ['oldstyle-nums'] as TextStyle['fontVariant'],
  },
  lining: { /*ios*/ fontVariant: ['lining-nums'] as TextStyle['fontVariant'] },
  tabular: {
    /*ios*/ fontVariant: ['tabular-nums'] as TextStyle['fontVariant'],
  },
  proportional: {
    /*ios*/ fontVariant: ['proportional-nums'] as TextStyle['fontVariant'],
  },

  // Text transforms
  none: { textTransform: 'none' as TextStyle['textTransform'] },
  uppercase: { textTransform: 'uppercase' as TextStyle['textTransform'] },
  lowercase: { textTransform: 'lowercase' as TextStyle['textTransform'] },
  capitalize: { textTransform: 'capitalize' as TextStyle['textTransform'] },

  // Letter spacing
  tracking_tighter: { /*ios*/ letterSpacing: -2 },
  tracking_tight: { /*ios*/ letterSpacing: -1 },
  tracking_normal: { /*ios*/ letterSpacing: 0 },
  tracking_wide: { /*ios*/ letterSpacing: 1 },
  tracking_wider: { /*ios*/ letterSpacing: 2 },
  tracking_widest: { /*ios*/ letterSpacing: 3 },

  // Text alignment
  auto: { textAlign: 'auto' as TextStyle['textAlign'] },
  left: { textAlign: 'left' as TextStyle['textAlign'] },
  right: { textAlign: 'right' as TextStyle['textAlign'] },
  center: { textAlign: 'center' as TextStyle['textAlign'] },
  justify: { textAlign: 'justify' as TextStyle['textAlign'] },

  // Text shadow
  shadow_color_: (color: string): TextStyle => ({
    textShadowColor: color,
  }),

  shadow_offset_: (
    widthVal: number | string,
    heightVal: number | string
  ): TextStyle => ({
    textShadowOffset: { width: Number(widthVal), height: Number(heightVal) },
  }),

  shadow_radius_: (radius: number | string): TextStyle => ({
    textShadowRadius: Number(radius),
  }),

  // User select
  select_auto: { userSelect: 'auto' as TextStyle['userSelect'] },
  select_text: { userSelect: 'text' as TextStyle['userSelect'] },
  select_none: { userSelect: 'none' as TextStyle['userSelect'] },
  select_contain: { userSelect: 'contain' as TextStyle['userSelect'] },
  select_all: { userSelect: 'all' as TextStyle['userSelect'] },
};

// Dynamically add color properties
Object.keys(colorList).forEach((colorKey) => {
  text[`color_${colorKey}`] = {
    color: colorList[colorKey],
  };
});

// Dynamically add shadow color properties
Object.keys(colorList).forEach((colorKey) => {
  text[`shadow_color_${colorKey}`] = {
    textShadowColor: colorList[colorKey],
  };
});

// Dynamically add shadow radius properties
for (let i = 1; i <= 24; i++) {
  text[`shadow_radius_${i}`] = { textShadowRadius: i };
}

// Dynamically add shadow offset properties
for (let i = 1; i <= 24; i++) {
  text[`shadow_offset_${i}`] = { textShadowOffset: { width: i, height: i } };
}

export default text;
