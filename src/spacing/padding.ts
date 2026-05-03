import { getCachedStyle } from '../internal/boundedStyleCache';
import { resolveSpacingValue, wrapLazySpacingProxy } from '../internal/spacingAxisMap';
import type { DynamicArg, DynamicStyleMap } from '../types/maps';
import type { Padding } from '../types/spacing';

const P_NAMES = ['p', 'px', 'py', 'pt', 'pr', 'pb', 'pl', 'ps', 'pe'] as const;
const P_PREFIXES: readonly string[] = ['px', 'py', 'pt', 'pr', 'pb', 'pl', 'ps', 'pe', 'p'];

function buildPadding(type: string, key: string | number): Padding {
  const value = resolveSpacingValue(key, 'padding');
  switch (type) {
    case 'p':
      return { padding: value };
    case 'px':
      return { paddingHorizontal: value };
    case 'py':
      return { paddingVertical: value };
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
}

function createPaddingMap(): DynamicStyleMap<Padding> {
  const base: Record<string, unknown> = {};

  base.p_ = (...keys: Array<DynamicArg>): Padding => {
    if (keys.length === 1) {
      return getCachedStyle(`p|1|${keys[0]}`, () => buildPadding('p', keys[0]));
    }
    if (keys.length === 2) {
      return getCachedStyle(`p|2|${keys[0]}|${keys[1]}`, () => ({
        paddingVertical: resolveSpacingValue(keys[0], 'padding'),
        paddingHorizontal: resolveSpacingValue(keys[1], 'padding'),
      }));
    }
    if (keys.length === 4) {
      return getCachedStyle(`p|4|${keys.join('|')}`, () => ({
        paddingTop: resolveSpacingValue(keys[0], 'padding'),
        paddingRight: resolveSpacingValue(keys[1], 'padding'),
        paddingBottom: resolveSpacingValue(keys[2], 'padding'),
        paddingLeft: resolveSpacingValue(keys[3], 'padding'),
      }));
    }
    throw new Error('p_ expects 1, 2, or 4 values');
  };

  for (const t of P_NAMES) {
    if (t === 'p') continue;
    base[`${t}_`] = (key: DynamicArg): Padding => getCachedStyle(`${t}|${key}`, () => buildPadding(t, key));
  }

  return wrapLazySpacingProxy<Padding>(base, P_PREFIXES, buildPadding, 'padding');
}

const p = createPaddingMap();

export default p;
