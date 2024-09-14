import colorList from '../utils/colorList';
import type { ViewStyle, ImageStyle } from 'react-native';
import type { BgStyles } from '../types/effects';

const fx: BgStyles = {
  // Custom background color
  bg_color_: (value: string): ViewStyle => ({
    backgroundColor: value,
  }),

  // Custom tint color
  tint_: (value: string): ImageStyle => ({
    tintColor: value,
  }),

  // Custom opacity
  opacity_: (value: number | string): ViewStyle => {
    if (Number(value) < 0 || Number(value) > 1) {
      throw new Error('Opacity value must be between 0.0 and 1.0');
    }
    return {
      opacity: Number(value),
    };
  },

  // Custom overlay color
  overlay_: (value: string): ImageStyle => ({
    overlayColor: value,
  }),

  // Custom elevation
  elevation_: (value: number | string): ViewStyle => {
    if (Number(value) < 1 || Number(value) > 10) {
      throw new Error('Elevation value must be between 1 and 10');
    }
    return {
      elevation: Number(value),
    };
  },

  box_auto: { pointerEvents: 'auto' },
  box_none: { pointerEvents: 'none' },

  // Predefined backface visibility properties
  backface: { backfaceVisibility: 'visible' },
  backface_none: { backfaceVisibility: 'hidden' },
};

// Predefined opacity properties (0-10)
Array.from({ length: 11 }, (_, i) => i / 10).forEach((value) => {
  fx[`opacity_${value * 10}`] = { opacity: value };
});

// Predefined elevation properties (1-10)
Array.from({ length: 10 }, (_, i) => i + 1).forEach((value) => {
  fx[`elevation_${value}`] = { elevation: value };
});

// Dynamically add background color properties from colorList
Object.keys(colorList).forEach((colorKey) => {
  fx[`bg_color_${colorKey}`] = {
    backgroundColor: colorList[colorKey],
  } as ViewStyle;
});

// Dynamically add tint color properties from colorList
Object.keys(colorList).forEach((colorKey) => {
  fx[`tint_${colorKey}`] = {
    tintColor: colorList[colorKey],
  } as ImageStyle;
});

// Dynamically add overlay color properties from colorList
Object.keys(colorList).forEach((colorKey) => {
  fx[`overlay_${colorKey}`] = {
    overlayColor: colorList[colorKey],
  } as ViewStyle;
});

export default fx;
