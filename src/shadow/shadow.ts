import type { ViewStyle } from 'react-native';
import colorList from '../utils/colorList';
import type { ShadowStyles } from '../types/effects';

const shadow: ShadowStyles = {
  // Shadow color
  color_: (value: string): ViewStyle => ({
    shadowColor: value,
  }),

  // Shadow offset
  offset_: (width: number | string, height: number | string): ViewStyle => ({
    shadowOffset: { width: Number(width), height: Number(height) },
  }),

  // Shadow opacity
  opacity_: (value: number | string): ViewStyle => ({
    shadowOpacity: Number(value),
  }),

  // Shadow radius
  rounded_: (value: number | string): ViewStyle => ({
    shadowRadius: Number(value),
  }),

  // Default values for shadow radius
  rounded_none: { shadowRadius: 0 },
  rounded_xs: { shadowRadius: 1 },
  rounded_sm: { shadowRadius: 2 },
  rounded_md: { shadowRadius: 3 },
  rounded_base: { shadowRadius: 4 },
  rounded_lg: { shadowRadius: 8 },
  rounded_xl: { shadowRadius: 12 },
  rounded_2xl: { shadowRadius: 16 },
  rounded_3xl: { shadowRadius: 24 },
  rounded_full: { shadowRadius: 9999 },
};

// Dynamically add offset properties for 1-5 levels
for (let i = 1; i <= 5; i++) {
  shadow[`offset_${i}`] = {
    shadowOffset: { width: i, height: i },
  } as ViewStyle;
}

// Dynamically add opacity properties for 1-24 levels
for (let i = 1; i <= 24; i++) {
  shadow[`opacity_${i}`] = { shadowOpacity: i } as ViewStyle;
}

// Dynamically add color properties
Object.keys(colorList).forEach((colorKey) => {
  shadow[`color_${colorKey}`] = {
    shadowColor: colorList[colorKey],
  } as ViewStyle;
});

export default shadow;
