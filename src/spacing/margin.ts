import { getCachedStyle } from '../internal/boundedStyleCache';
import { resolveSpacingValue, wrapLazySpacingProxy } from '../internal/spacingAxisMap';
import type { DynamicArg, DynamicStyleMap } from '../types/maps';
import type { Margin } from '../types/spacing';

const M_NAMES = ['m', 'mx', 'my', 'mt', 'mr', 'mb', 'ml', 'ms', 'me'] as const;
const M_PREFIXES: readonly string[] = ['mx', 'my', 'mt', 'mr', 'mb', 'ml', 'ms', 'me', 'm'];

function buildMargin(type: string, key: string | number): Margin {
  const value = resolveSpacingValue(key, 'margin');
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
}

function createMarginMap(): DynamicStyleMap<Margin> {
  const base: Record<string, unknown> = {};

  base.m_ = (...keys: Array<DynamicArg>): Margin => {
    if (keys.length === 1) {
      return getCachedStyle(`m|1|${keys[0]}`, () => buildMargin('m', keys[0]));
    }
    if (keys.length === 2) {
      return getCachedStyle(`m|2|${keys[0]}|${keys[1]}`, () => ({
        marginVertical: resolveSpacingValue(keys[0], 'margin'),
        marginHorizontal: resolveSpacingValue(keys[1], 'margin'),
      }));
    }
    if (keys.length === 4) {
      return getCachedStyle(`m|4|${keys.join('|')}`, () => ({
        marginTop: resolveSpacingValue(keys[0], 'margin'),
        marginRight: resolveSpacingValue(keys[1], 'margin'),
        marginBottom: resolveSpacingValue(keys[2], 'margin'),
        marginLeft: resolveSpacingValue(keys[3], 'margin'),
      }));
    }
    throw new Error('m_ expects 1, 2, or 4 values');
  };

  for (const t of M_NAMES) {
    if (t === 'm') continue;
    base[`${t}_`] = (key: DynamicArg): Margin => getCachedStyle(`${t}|${key}`, () => buildMargin(t, key));
  }

  return wrapLazySpacingProxy<Margin>(base, M_PREFIXES, buildMargin, 'margin');
}

const m = createMarginMap();

export default m;
