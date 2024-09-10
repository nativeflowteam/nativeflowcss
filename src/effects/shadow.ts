import type { ViewStyle } from 'react-native';
import colorList from '../utils/colorList';

// Define the type for shadow object
interface ShadowStyles {
  [key: string]: ViewStyle | ((...args: any[]) => ViewStyle);
}

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
  radius_: (value: number | string): ViewStyle => ({
    shadowRadius: Number(value),
  }),
  radius_sm: { shadowRadius: 2 },
  radius_base: { shadowRadius: 4 },
  radius_lg: { shadowRadius: 8 },
  radius_full: { shadowRadius: 9999 },

  // Custom elevation
  elevation_: (value: number | string): ViewStyle => ({
    elevation: Number(value),
  }),
};

// Dynamically add offset properties for 1-5 levels
for (let i = 1; i <= 5; i++) {
  shadow[`offset_${i}`] = {
    shadowOffset: { width: i, height: i },
  } as ViewStyle;
}

// Dynamically add opacity properties for 1-10 levels
for (let i = 1; i <= 10; i++) {
  shadow[`opacity_${i}`] = { shadowOpacity: i / 10 } as ViewStyle;
}

// Dynamically add elevation properties for 1-10 levels
for (let i = 1; i <= 10; i++) {
  shadow[`elevation_${i}`] = { elevation: i } as ViewStyle;
}

// Dynamically add color properties
Object.keys(colorList).forEach((colorKey) => {
  shadow[`color_${colorKey}`] = {
    shadowColor: colorList[colorKey],
  } as ViewStyle;
});

export default shadow;
