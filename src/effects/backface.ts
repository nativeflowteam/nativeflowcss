import type { ViewStyle } from 'react-native';

// Define the type for backface object
interface BackfaceStyles {
  [key: string]: ViewStyle;
}

const backface: BackfaceStyles = {
  // Predefined backface visibility properties
  visible: { backfaceVisibility: 'visible' },
  hidden: { backfaceVisibility: 'hidden' },
};

export default backface;
