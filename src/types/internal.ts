/**
 * Function type assignable from `(a: X) => R` implementations used in dynamic style maps.
 * Uses TS bivariance trick so concrete handlers with narrower parameters still type-check.
 */
export type VariadicStyleFn<TResult> = {
  bivarianceHack(...args: Array<string | number>): TResult;
}['bivarianceHack'];

export type StyleMap<TResult> = Record<string, TResult | VariadicStyleFn<TResult>>;
