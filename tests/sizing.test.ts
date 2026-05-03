import { h, w, size } from '../src/index';
import { spacingScale } from '../src/constants/spacingScale';

describe('h (height)', () => {
  const height = h as Record<string, unknown>;

  it('h_4 maps scale to height', () => {
    expect(height.h_4).toEqual({ height: spacingScale['4'] });
  });

  it('h_full preset', () => {
    expect(height.h_full).toEqual({ height: '100%' });
  });

  it('h_auto preset', () => {
    expect(height.h_auto).toEqual({ height: 'auto' });
  });

  it('w_(value) sets arbitrary height (named w_ on h object)', () => {
    expect((h as { w_: (v: string | number) => unknown }).w_('33%')).toEqual({
      height: '33%',
    });
  });

  it('max_(n) sets maxHeight', () => {
    expect((h as { max_: (v: string | number) => unknown }).max_(200)).toEqual({
      maxHeight: 200,
    });
  });
});

describe('w (width)', () => {
  const widthMap = w as Record<string, unknown>;

  it('w_4 maps scale to width', () => {
    expect(widthMap.w_4).toEqual({ width: spacingScale['4'] });
  });

  it('w_auto preset', () => {
    expect(widthMap.w_auto).toEqual({ width: 'auto' });
  });

  it('w_(value) sets arbitrary width', () => {
    expect((widthMap.w_ as (v: number | string) => unknown)(180)).toEqual({ width: 180 });
  });

  it('max_(n) sets maxWidth', () => {
    expect((widthMap.max_ as (v: number | string) => unknown)(320)).toEqual({
      maxWidth: 320,
    });
  });
});

describe('size', () => {
  const sizeMap = size as Record<string, unknown>;

  it('s_4 maps scale to width and height', () => {
    expect(sizeMap.s_4).toEqual({
      width: spacingScale['4'],
      height: spacingScale['4'],
    });
  });

  it('s_(value) sets matching width and height', () => {
    expect((sizeMap.s_ as (v: number | string) => unknown)('50%')).toEqual({
      width: '50%',
      height: '50%',
    });
  });
});
