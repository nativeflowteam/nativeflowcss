import type { Direction } from '../types/layout';

const directionValues: { [key: string]: Direction } = {
  inherit: 'inherit',
  ltr: 'ltr',
  rtl: 'rtl',
};

const getDirectionValue = (key: string): Direction => {
  const value = directionValues[key];
  if (value === undefined) throw new Error(`Invalid direction key: ${key}`);
  return value;
};

const direction: any = {};

Object.keys(directionValues).forEach((key) => {
  direction[key] = getDirectionValue(key);
});

// Example usage
// const inheritDirection = direction.inherit; // 'inherit'
// const ltrDirection = direction.ltr; // 'ltr'
// const rtlDirection = direction.rtl; // 'rtl'

export { direction };
