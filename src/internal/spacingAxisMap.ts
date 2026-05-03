import { spacingScale } from '../constants/spacingScale';
import type { DynamicStyleMap } from '../types/maps';
import type { Margin, Padding } from '../types/spacing';

const lookup: Record<string, number> = spacingScale;

export function resolveSpacingValue(key: string | number, kind: 'padding' | 'margin'): number | 'auto' {
  if (typeof key === 'number') return key;
  if (key === 'auto') return 'auto';
  const value = lookup[key] ?? parseInt(key, 10);
  if (isNaN(value)) throw new Error(`Invalid ${kind} key: ${key}`);
  return value;
}

/** Longest token first so `px_1` matches `px` not `p`. */
export function parseStaticKey(prop: string, prefixes: readonly string[]): { type: string; scaleKey: string } | null {
  for (const prefix of prefixes) {
    const head = `${prefix}_`;
    if (prop.startsWith(head) && prop.length > head.length) {
      return { type: prefix, scaleKey: prop.slice(head.length) };
    }
  }
  return null;
}

/**
 * Static tokens (e.g. `p_4`) are created on first access via Proxy get — lowers startup heap
 * until tokens are touched. `Object.keys(map)` only lists keys that already exist on the target;
 * use `in` / property reads for unknown static tokens.
 */
export function wrapLazySpacingProxy<T extends Padding | Margin>(base: Record<string, unknown>, prefixes: readonly string[], build: (type: string, scaleKey: string | number) => T, kind: 'padding' | 'margin'): DynamicStyleMap<T> {
  return new Proxy(base, {
    get(target, prop, receiver) {
      if (typeof prop === 'symbol') return Reflect.get(target, prop, receiver);
      const direct = Reflect.get(target, prop, receiver);
      if (direct !== undefined || Object.prototype.hasOwnProperty.call(target, prop)) {
        return direct;
      }
      const parsed = parseStaticKey(prop, prefixes);
      if (!parsed) return undefined;
      try {
        const style = build(parsed.type, parsed.scaleKey);
        Object.defineProperty(target, prop, {
          value: style,
          enumerable: true,
          writable: true,
          configurable: true,
        });
        return style;
      } catch {
        return undefined;
      }
    },
    has(target, prop) {
      if (typeof prop === 'symbol') return Reflect.has(target, prop);
      if (prop in target) return true;
      const parsed = parseStaticKey(prop, prefixes);
      if (!parsed) return false;
      try {
        resolveSpacingValue(parsed.scaleKey, kind);
        return true;
      } catch {
        return false;
      }
    },
  }) as DynamicStyleMap<T>;
}
