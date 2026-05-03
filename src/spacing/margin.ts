import { spacingScale } from '../constants/spacingScale';
import type { Margin } from '../types/spacing';
import type { DynamicArg, DynamicStyleMap } from '../types/maps';

const marginLookup: Record<string, number> = spacingScale;

const getMarginValue = (key: string | number): number | 'auto' => {
  if (typeof key === 'number') return key;
  if (key === 'auto') return 'auto';
  const value = marginLookup[key] ?? parseInt(key, 10);
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
const m: DynamicStyleMap<Margin> = {};

const allMarginKeys = [...Object.keys(marginLookup), 'auto'];

allMarginKeys.forEach((key) => {
  ['m', 'mx', 'my', 'mt', 'mr', 'mb', 'ml', 'ms', 'me'].forEach((type) => {
    m[`${type}_${key}`] = generateMargin(type, key);
  });
});

['m', 'mx', 'my', 'mt', 'mr', 'mb', 'ml', 'ms', 'me'].forEach((type) => {
  if (type === 'm') {
    m[`${type}_`] = (...keys: Array<DynamicArg>): Margin => {
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

  m[`${type}_`] = (key: DynamicArg): Margin => generateMargin(type, key);
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
