import type { Margin } from '../types/spacing';

const marginValues: { [key: string]: number } = {
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

const getMarginValue = (key: string | number): number | 'auto' => {
  if (typeof key === 'number') return key;
  if (key === 'auto') return 'auto';
  const value = marginValues[key] ?? parseInt(key, 10);
  if (isNaN(value)) throw new Error(`Invalid margin key: ${key}`);
  return value;
};

const generateMargin = (type: string, key: string | number): Margin => {
  const value = getMarginValue(key);
  switch (type) {
    case 'm':
      return { margin: value };
    case 'mx':
      return { marginHorizontal: value };
    case 'my':
      return { marginVertical: value };
    case 'mt':
      return { marginTop: value };
    case 'mb':
      return { marginBottom: value };
    case 'mr':
      return { marginRight: value };
    case 'ml':
      return { marginLeft: value };
    case 'ms':
      return { marginStart: value };
    case 'me':
      return { marginEnd: value };
    default:
      return {};
  }
};

// prettier-ignore
const m: Record<string, Margin | ((...keys: Array<string | number>) => Margin)> = {};

const allMarginKeys = [...Object.keys(marginValues), 'auto'];

allMarginKeys.forEach((key) => {
  ['m', 'mx', 'my', 'mt', 'mr', 'mb', 'ml', 'ms', 'me'].forEach((type) => {
    m[`${type}_${key}`] = generateMargin(type, key);
  });
});

['m', 'mx', 'my', 'mt', 'mr', 'mb', 'ml', 'ms', 'me'].forEach((type) => {
  if (type === 'm') {
    m[`${type}_`] = (...keys: Array<string | number>): Margin => {
      if (keys.length === 1) return generateMargin(type, keys[0]);
      if (keys.length === 2) {
        const vertical = getMarginValue(keys[0]);
        const horizontal = getMarginValue(keys[1]);
        return { marginVertical: vertical, marginHorizontal: horizontal };
      }
      if (keys.length === 4) {
        const top = getMarginValue(keys[0]);
        const right = getMarginValue(keys[1]);
        const bottom = getMarginValue(keys[2]);
        const left = getMarginValue(keys[3]);
        return {
          marginTop: top,
          marginRight: right,
          marginBottom: bottom,
          marginLeft: left,
        };
      }
      throw new Error('m_ expects 1, 2, or 4 values');
    };
    return;
  }

  m[`${type}_`] = (key: string | number): Margin => generateMargin(type, key);
});

// Example usage
// const marginStyle = m.m_1; // { margin: 4 }
// const marginHorizontalStyle = m.mx_1; // {  marginHorizontal: 4 }
// const marginVerticalStyle = m.my_1; // { marginVertical: 4 }
// const marginTopStyle = m.mt_1; // { marginTop: 4 }
// const marginBottomStyle = m.mb_1; // { marginBottom: 4 }
// const marginRightStyle = m.mr_1; // { marginRight: 4 }
// const marginLeftStyle = m.ml_1; // { marginLeft: 4 }
// const customMarginStyle = m.m_(1000); // { margin: 1000 }
// const customVerticalStyle = m.m_(8, 16); // { marginTop: 8, marginBottom: 16 }
// const customAllSidesStyle = m.m_(4, 8, 12, 16); // { marginTop: 4, marginRight: 8, marginBottom: 12, marginLeft: 16 }
// const autoMarginStyle = m.m_auto; // { margin: 'auto' }
// const autoHorizontalStyle = m.mx_auto; // { marginHorizontal: 'auto' }
// const autoVerticalStyle = m.my_auto; // { marginVertical: 'auto' }

export default m;
