import type { Direction } from '../types/layout';

const directionValues: { [key: string]: Direction } = {
  inherit: 'inherit',
  ltr: 'ltr',
  rtl: 'rtl',
};

const getDirectionValue = (key: string): { direction: Direction } => {
  const value = directionValues[key];
  if (value === undefined) throw new Error(`Invalid direction key: ${key}`);
  return { direction: value };
};

const direction: { [key: string]: { direction: Direction } } = {};

Object.keys(directionValues).forEach((key) => {
  direction[key] = getDirectionValue(key);
});

// Example usage
// const inheritDirection = direction.inherit; // { direction: 'inherit' }
// const ltrDirection = direction.ltr; // { direction: 'ltr' }
// const rtlDirection = direction.rtl; // { direction: 'rtl' }

export { direction };
