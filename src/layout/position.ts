import type { PositionValue } from '../types/layout';

const positions: { [key: string]: number } = {
  '0': 0,
  'px': 1,
  '1': 4,
  '2': 8,
  '3': 12,
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
};

// Now explicitly include the custom methods and the index signature for dynamically generated properties
const pos: {
  relative: { position: string };
  absolute: { position: string };
  fixed: { position: string };
  sticky: { position: string };
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

  r_(value: number | string): PositionValue {
    return { right: Number(value) };
  },
  t_(value: number): PositionValue {
    return { top: Number(value) };
  },
  l_(value: number): PositionValue {
    return { left: Number(value) };
  },
  b_(value: number): PositionValue {
    return { bottom: Number(value) };
  },
};

Object.keys(positions).forEach((posKey) => {
  pos[`t_${posKey}`] = {
    top: positions[posKey],
  } as PositionValue;

  pos[`r_${posKey}`] = {
    right: positions[posKey],
  } as PositionValue;

  pos[`b_${posKey}`] = {
    bottom: positions[posKey],
  } as PositionValue;

  pos[`l_${posKey}`] = {
    left: positions[posKey],
  } as PositionValue;
});

// Example usage
// console.log(pos.relative); // { position: 'relative' }
// console.log(pos.right_1); // { right: 4 }
// console.log(pos.top_2); // { top: 8 }
// console.log(pos.left_1); // { left: '50%' }
// console.log(pos.b_(20)); // { bottom: 20 }

export default pos;
