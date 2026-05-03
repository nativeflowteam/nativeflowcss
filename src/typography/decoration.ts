import type { TextStyle } from 'react-native';
import colorList from '../constants/colorList';
import type { VariadicStyleFn } from '../types/internal';
import { textSnippet } from '../utils/styleSnippets';

type DecorationFn = VariadicStyleFn<TextStyle>;

const decoration: Record<string, TextStyle | DecorationFn> & {
  color_: DecorationFn;
} = {
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
};

// Dynamically add color properties
Object.keys(colorList).forEach((colorKey) => {
  decoration[`color_${colorKey}`] = {
    /*ios*/ textDecorationColor: colorList[colorKey],
  };
});

export default decoration;
