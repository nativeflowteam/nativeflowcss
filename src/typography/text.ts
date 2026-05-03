import type { TextStyle } from 'react-native';
import type { ColoredTextStyle } from '../types/typography';
import colorList from '../constants/colorList';
import { textSnippet } from '../utils/styleSnippets';

const text: ColoredTextStyle = {
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
  italic: textSnippet({ fontStyle: 'italic' }),
  non_italic: textSnippet({ fontStyle: 'normal' }),

  // Font weights
  fw_thin: textSnippet({ fontWeight: '100' }),
  fw_extralight: textSnippet({ fontWeight: '200' }),
  fw_light: textSnippet({ fontWeight: '300' }),
  fw_normal: textSnippet({ fontWeight: '400' }),
  fw_medium: textSnippet({ fontWeight: '500' }),
  fw_semibold: textSnippet({ fontWeight: '600' }),
  fw_bold: textSnippet({ fontWeight: '700' }),
  fw_extrabold: textSnippet({ fontWeight: '800' }),
  fw_black: textSnippet({ fontWeight: '900' }),

  // Font variants
  smallcaps: textSnippet({
    /*ios*/ fontVariant: ['small-caps'],
  }),
  oldstyle: textSnippet({
    /*ios*/ fontVariant: ['oldstyle-nums'],
  }),
  lining: textSnippet({
    /*ios*/ fontVariant: ['lining-nums'],
  }),
  tabular: textSnippet({
    /*ios*/ fontVariant: ['tabular-nums'],
  }),
  proportional: textSnippet({
    /*ios*/ fontVariant: ['proportional-nums'],
  }),

  // Text transforms
  none: textSnippet({ textTransform: 'none' }),
  uppercase: textSnippet({ textTransform: 'uppercase' }),
  lowercase: textSnippet({ textTransform: 'lowercase' }),
  capitalize: textSnippet({ textTransform: 'capitalize' }),

  // Letter spacing
  tracking_tighter: { /*ios*/ letterSpacing: -2 },
  tracking_tight: { /*ios*/ letterSpacing: -1 },
  tracking_normal: { /*ios*/ letterSpacing: 0 },
  tracking_wide: { /*ios*/ letterSpacing: 1 },
  tracking_wider: { /*ios*/ letterSpacing: 2 },
  tracking_widest: { /*ios*/ letterSpacing: 3 },

  // Text alignment
  auto: textSnippet({ textAlign: 'auto' }),
  left: textSnippet({ textAlign: 'left' }),
  right: textSnippet({ textAlign: 'right' }),
  center: textSnippet({ textAlign: 'center' }),
  justify: textSnippet({ textAlign: 'justify' }),

  // Text shadow
  shadow_color_: (color: string): TextStyle => ({
    textShadowColor: color,
  }),

  shadow_offset_: (widthVal: number | string, heightVal: number | string): TextStyle => ({
    textShadowOffset: { width: Number(widthVal), height: Number(heightVal) },
  }),

  shadow_radius_: (radius: number | string): TextStyle => ({
    textShadowRadius: Number(radius),
  }),

  // User select
  select_auto: textSnippet({ userSelect: 'auto' }),
  select_text: textSnippet({ userSelect: 'text' }),
  select_none: textSnippet({ userSelect: 'none' }),
  select_contain: textSnippet({ userSelect: 'contain' }),
  select_all: textSnippet({ userSelect: 'all' }),
};

Object.keys(colorList).forEach((colorKey) => {
  const hex = colorList[colorKey];
  text[`color_${colorKey}`] = { color: hex };
  text[`shadow_color_${colorKey}`] = { textShadowColor: hex };
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
