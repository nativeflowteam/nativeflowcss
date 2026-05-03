import type { TextStyle } from 'react-native';
import colorList from '../constants/colorList';
import type { DecorationStyles } from '../types/typography';
import { textSnippet } from '../utils/styleSnippets';

const decoration = {
  // Text decoration line
  underline: textSnippet({
    textDecorationLine: 'underline',
  }),
  line_through: textSnippet({
    textDecorationLine: 'line-through',
  }),
  underline_line_through: textSnippet({
    textDecorationLine: 'underline line-through',
  }),
  none: textSnippet({ textDecorationLine: 'none' }),

  // Text decoration style
  solid: textSnippet({
    /*ios*/ textDecorationStyle: 'solid',
  }),
  double: textSnippet({
    /*ios*/ textDecorationStyle: 'double',
  }),
  dotted: textSnippet({
    /*ios*/ textDecorationStyle: 'dotted',
  }),
  dashed: textSnippet({
    /*ios*/ textDecorationStyle: 'dashed',
  }),

  // Text decoration color (iOS)
  color_: (color: string): TextStyle => ({
    textDecorationColor: color,
  }),
} as DecorationStyles;

// Dynamically add color properties
Object.keys(colorList).forEach((colorKey) => {
  decoration[`color_${colorKey}`] = {
    /*ios*/ textDecorationColor: colorList[colorKey],
  };
});

export default decoration;
