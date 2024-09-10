import colorList from '../utils/colorList';
import type { ViewStyle, ImageStyle } from 'react-native';
import type { BgStyles } from '../types/effects';

const bg: BgStyles = {
  // Custom background color
  color_: (value: string): ViewStyle => ({
    backgroundColor: value,
  }),

  // Custom tint color
  tint_: (value: string): ImageStyle => ({
    tintColor: value,
  }),

  // Custom opacity
  opacity_: (value: number): ViewStyle => {
    if (value < 0 || value > 1) {
      throw new Error('Opacity value must be between 0.0 and 1.0');
    }
    return {
      opacity: value,
    };
  },

  // Custom overlay color
  overlay_: (value: string): ImageStyle => ({
    overlayColor: value,
  }),

  // Custom elevation
  elevation_: (value: number): ViewStyle => {
    if (value < 1 || value > 10) {
      throw new Error('Elevation value must be between 1 and 10');
    }
    return {
      elevation: value,
    };
  },

  box_auto: { pointerEvents: 'auto' },
  box_none: { pointerEvents: 'none' },
  // box_only: { pointerEvents: 'auto' },
  // box_auto: { pointerEvents: 'auto' },

  // Predefined backface visibility properties
  backface: { backfaceVisibility: 'visible' },
  backface_none: { backfaceVisibility: 'hidden' },
};

// Predefined opacity properties (0-10)
Array.from({ length: 11 }, (_, i) => i / 10).forEach((value) => {
  bg[`opacity_${value * 10}`] = { opacity: value };
});

// Predefined elevation properties (1-10)
Array.from({ length: 10 }, (_, i) => i + 1).forEach((value) => {
  bg[`elevation_${value}`] = { elevation: value };
});

// Dynamically add background color properties from colorList
Object.keys(colorList).forEach((colorKey) => {
  bg[`color_${colorKey}`] = {
    backgroundColor: colorList[colorKey],
  } as ViewStyle;
});

// Dynamically add tint color properties from colorList
Object.keys(colorList).forEach((colorKey) => {
  bg[`tint_${colorKey}`] = {
    tintColor: colorList[colorKey],
  } as ImageStyle;
});

// Dynamically add overlay color properties from colorList
Object.keys(colorList).forEach((colorKey) => {
  bg[`overlay_${colorKey}`] = {
    overlayColor: colorList[colorKey],
  } as ViewStyle;
});

export default bg;
