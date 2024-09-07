import type { PositionValue } from '../types/layout';

const positions = {
  '0': 0,
  'px': 1,
  '0.5': 2,
  '1': 4,
  '1.5': 6,
  '2': 8,
  '2.5': 10,
  '3': 12,
  '3.5': 14,
  '4': 16,
  '5': 20,
  '6': 24,
  '7': 28,
  '8': 32,
  '9': 36,
  '10': 40,
  '11': 44,
  '12': 48,
  '14': 56,
  '16': 64,
  '20': 80,
  '24': 96,
  '28': 112,
  '32': 128,
  '36': 144,
  '40': 160,
  '44': 176,
  '48': 192,
  '52': 208,
  '56': 224,
  '60': 240,
  '64': 256,
  '72': 288,
  '80': 320,
  '96': 384,
  'auto': 'auto',
  '1/2': '50%',
  '1/3': '33.333333%',
  '2/3': '66.666667%',
  '1/4': '25%',
  '2/4': '50%',
  '3/4': '75%',
  'full': '100%',
};

// Magik
const generatePositionProperties = (
  key: string
): { [key: string]: PositionValue } => {
  const values: { [key: string]: PositionValue } = {};
  for (const [posKey, posValue] of Object.entries(positions)) {
    values[`${key}_${posKey.replace('/', '_')}`] = { [key]: posValue };
  }
  return values;
};

// Now explicitly include the custom methods and the index signature for dynamically generated properties
const pos: {
  relative: { position: string };
  absolute: { position: string };
  fixed: { position: string };
  sticky: { position: string };
  r_custom: (value: number) => PositionValue;
  t_custom: (value: number) => PositionValue;
  l_custom: (value: number) => PositionValue;
  b_custom: (value: number) => PositionValue;
  [key: string]:
    | PositionValue
    | { position: string }
    | ((value: number) => PositionValue);
} = {
  // Position properties
  relative: { position: 'relative' },
  absolute: { position: 'absolute' },
  fixed: { position: 'fixed' },
  sticky: { position: 'sticky' },

  ...generatePositionProperties('right'),
  ...generatePositionProperties('top'),
  ...generatePositionProperties('left'),
  ...generatePositionProperties('bottom'),

  r_custom(value: number): PositionValue {
    return { right: value };
  },
  t_custom(value: number): PositionValue {
    return { top: value };
  },
  l_custom(value: number): PositionValue {
    return { left: value };
  },
  b_custom(value: number): PositionValue {
    return { bottom: value };
  },
};

// Example usage
// console.log(pos.relative); // { position: 'relative' }
// console.log(pos.right_1); // { right: 4 }
// console.log(pos.top_2); // { top: 8 }
// console.log(pos.left_1_2); // { left: '50%' }
// console.log(pos.b_custom(20)); // { bottom: 20 }

export default pos;
