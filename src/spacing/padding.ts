import type { Padding } from '../types/spacing';

const paddingValues: { [key: string]: number } = {
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

const getPaddingValue = (key: string | number): number => {
  if (typeof key === 'number') return key;
  const value = paddingValues[key] ?? parseInt(key, 10);
  if (isNaN(value)) throw new Error(`Invalid padding key: ${key}`);
  return value;
};

const generatePadding = (type: string, key: string | number): Padding => {
  const value = getPaddingValue(key);
  switch (type) {
    case 'p':
      return { padding: value };
    case 'px':
      return { paddingLeft: value, paddingRight: value };
    case 'py':
      return { paddingTop: value, paddingBottom: value };
    case 'pt':
      return { paddingTop: value };
    case 'pb':
      return { paddingBottom: value };
    case 'pr':
      return { paddingRight: value };
    case 'pl':
      return { paddingLeft: value };
    case 'ps':
      return { paddingStart: value };
    case 'pe':
      return { paddingEnd: value };
    default:
      return {};
  }
};

const p: any = {};

Object.keys(paddingValues).forEach((key) => {
  ['p', 'px', 'py', 'pt', 'pr', 'pb', 'pl', 'ps', 'pe'].forEach((type) => {
    p[`${type}_${key}`] = generatePadding(type, key);
  });
});

['p', 'px', 'py', 'pt', 'pr', 'pb', 'pl', 'ps', 'pe'].forEach((type) => {
  p[`${type}_`] = (key: string | number): Padding => generatePadding(type, key);
});

// Example usage
// const paddingStyle = p.p_1; // { padding: 4 }
// const paddingHorizontalStyle = p.px_1; // { paddingLeft: 4, paddingRight: 4 }
// const paddingVerticalStyle = p.py_1; // { paddingTop: 4, paddingBottom: 4 }
// const paddingTopStyle = p.pt_1; // { paddingTop: 4 }
// const paddingBottomStyle = p.pb_1; // { paddingBottom: 4 }
// const paddingRightStyle = p.pr_1; // { paddingRight: 4 }
// const paddingLeftStyle = p.pl_1; // { paddingLeft: 4 }
// const customPaddingStyle = p.p_(1000); // { padding: 1000 }

export default p;
