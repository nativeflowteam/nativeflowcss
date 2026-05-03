import type { ViewStyle } from 'react-native';

const overflow = {
  visible: { overflow: 'visible' },
  hidden: { overflow: 'hidden' },
} satisfies Record<string, ViewStyle>;

// Example usage
// console.log(overflow.visible); // { overflow: 'visible' }
// console.log(overflow.hidden); // { overflow: 'hidden' }

export default overflow;
