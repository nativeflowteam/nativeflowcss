import { m, p } from '../src/index';
import { spacingScale } from '../src/constants/spacingScale';
import type { Margin, Padding } from '../src/types/spacing';
import type { DynamicArg } from '../src/types/maps';

describe('m (margin)', () => {
  const margin = m as Record<string, unknown>;
  const mFn = m.m_ as (...keys: DynamicArg[]) => Margin;

  it('maps scale token mt_4 to spacingScale value', () => {
    expect(margin.mt_4).toEqual({ marginTop: spacingScale['4'] });
  });

  it('maps special scale key px on ml_px', () => {
    expect(margin.ml_px).toEqual({ marginLeft: spacingScale.px });
  });

  it('variadic m_(numeric) passes number through without scale lookup', () => {
    expect(mFn(42)).toEqual({ margin: 42 });
  });

  it('axis fn mt_(numeric) passes number through', () => {
    expect((m.mt_ as (k: DynamicArg) => Margin)(42)).toEqual({ marginTop: 42 });
  });

  it('parses string integer not on scale', () => {
    expect((m.mt_ as (k: DynamicArg) => Margin)('37')).toEqual({ marginTop: 37 });
  });

  it('supports auto via mx_auto', () => {
    expect(margin.mx_auto).toEqual({
      marginHorizontal: 'auto',
    });
  });

  it('variadic m_ with two keys sets vertical and horizontal', () => {
    expect(mFn(4, 8)).toEqual({
      marginVertical: 4,
      marginHorizontal: 8,
    });
  });

  it('variadic m_ with four keys sets all sides', () => {
    expect(mFn(1, 2, 3, 4)).toEqual({
      marginTop: 1,
      marginRight: 2,
      marginBottom: 3,
      marginLeft: 4,
    });
  });

  it('ms_ resolves marginStart from scale', () => {
    expect(margin.ms_2).toEqual({ marginStart: spacingScale['2'] });
  });

  it('me_ resolves marginEnd from scale', () => {
    expect(margin.me_2).toEqual({ marginEnd: spacingScale['2'] });
  });

  it('returns undefined for invalid static scale key', () => {
    expect(margin.mt_not_a_number).toBeUndefined();
  });
});

describe('p (padding)', () => {
  const padding = p as Record<string, unknown>;
  const pFn = p.p_ as (...keys: DynamicArg[]) => Padding;

  it('maps scale token pt_4 to spacingScale value', () => {
    expect(padding.pt_4).toEqual({ paddingTop: spacingScale['4'] });
  });

  it('variadic p_(numeric) passes number through', () => {
    expect(pFn(42)).toEqual({ padding: 42 });
  });

  it('supports auto literal via scaling resolver', () => {
    expect(padding.p_auto).toEqual({ padding: 'auto' });
  });

  it('variadic p_ with two keys sets vertical and horizontal', () => {
    expect(pFn(4, 8)).toEqual({
      paddingVertical: 4,
      paddingHorizontal: 8,
    });
  });

  it('variadic p_ with four keys sets all sides', () => {
    expect(pFn(1, 2, 3, 4)).toEqual({
      paddingTop: 1,
      paddingRight: 2,
      paddingBottom: 3,
      paddingLeft: 4,
    });
  });

  it('ps_ resolves paddingStart from scale', () => {
    expect(padding.ps_2).toEqual({ paddingStart: spacingScale['2'] });
  });
});
