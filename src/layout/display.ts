import type { Display } from '../types/layout';

const displayValues: { [key: string]: Display } = {
  hidden: 'none',
  flex: 'flex',
};

const getDisplayValue = (key: string): { display: Display } => {
  const value = displayValues[key];
  if (value === undefined) throw new Error(`Invalid display key: ${key}`);
  return { display: value };
};

const display: { [key: string]: { display: Display } } = {};

Object.keys(displayValues).forEach((key) => {
  display[key] = getDisplayValue(key);
});

// Example usage
// const hiddenDisplay = display.hidden; // { display: 'none' }
// const flexDisplay = display.flex; // { display: 'flex' }

export { display };
