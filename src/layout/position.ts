import { spacingScale } from '../constants/spacingScale';
import type { PositionPreset, PositionValue } from '../types/layout';

const positionSpacing: Record<string, number> = spacingScale;

function presetTop(value: number): PositionValue {
  return { top: value };
}
function presetRight(value: number): PositionValue {
  return { right: value };
}
function presetBottom(value: number): PositionValue {
  return { bottom: value };
}
function presetLeft(value: number): PositionValue {
  return { left: value };
}

type PositionFn = (value: number | string) => PositionValue;
type PositionToken = PositionValue | PositionPreset | PositionFn;

const pos: Record<string, PositionToken> & {
  relative: PositionPreset;
  absolute: PositionPreset;
  fixed: PositionPreset;
  sticky: PositionPreset;
  r_: PositionFn;
  t_: PositionFn;
  l_: PositionFn;
  b_: PositionFn;
} = {
  // Position properties
  relative: { position: 'relative' },
  absolute: { position: 'absolute' },
  fixed: { position: 'fixed' },
  sticky: { position: 'sticky' },

  r_(value: number | string): PositionValue {
    return { right: Number(value) };
  },
  t_(value: number | string): PositionValue {
    return { top: Number(value) };
  },
  l_(value: number | string): PositionValue {
    return { left: Number(value) };
  },
  b_(value: number | string): PositionValue {
    return { bottom: Number(value) };
  },
};

Object.keys(positionSpacing).forEach((posKey) => {
  const n = positionSpacing[posKey];
  pos[`t_${posKey}`] = presetTop(n);
  pos[`r_${posKey}`] = presetRight(n);
  pos[`b_${posKey}`] = presetBottom(n);
  pos[`l_${posKey}`] = presetLeft(n);
});

// Example usage
// console.log(pos.relative); // { position: 'relative' }
// console.log(pos.right_1); // { right: 4 }
// console.log(pos.top_2); // { top: 8 }
// console.log(pos.left_1); // { left: '50%' }
// console.log(pos.b_(20)); // { bottom: 20 }

export default pos;
