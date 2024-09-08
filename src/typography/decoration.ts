import type { TextStyle } from 'react-native';
import colorList from '../utils/colorList';

const decoration: {
  [key: string]: TextStyle | ((color: string) => TextStyle);
} = {
  // Text decoration line
  underline: {
    textDecorationLine: 'underline' as TextStyle['textDecorationLine'],
  },
  line_through: {
    textDecorationLine: 'line-through' as TextStyle['textDecorationLine'],
  },
  underline_line_through: {
    textDecorationLine:
      'underline line-through' as TextStyle['textDecorationLine'],
  },
  none: { textDecorationLine: 'none' as TextStyle['textDecorationLine'] },

  // Text decoration style
  solid: {
    /*ios*/ textDecorationStyle: 'solid' as TextStyle['textDecorationStyle'],
  },
  double: {
    /*ios*/ textDecorationStyle: 'double' as TextStyle['textDecorationStyle'],
  },
  dotted: {
    /*ios*/ textDecorationStyle: 'dotted' as TextStyle['textDecorationStyle'],
  },
  dashed: {
    /*ios*/ textDecorationStyle: 'dashed' as TextStyle['textDecorationStyle'],
  },

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
