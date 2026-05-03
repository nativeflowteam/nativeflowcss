import { flex, align, justify, place } from '../src/index';
import { spacingScale } from '../src/constants/spacingScale';

describe('flex', () => {
  const flexMap = flex as Record<string, unknown>;

  it('f_3 preset sets flex grow integer', () => {
    expect(flexMap.f_3).toEqual({ flex: 3 });
  });

  it('f_(n) dynamic sets flex', () => {
    expect((flexMap.f_ as (n: number | string) => unknown)(7)).toEqual({ flex: 7 });
  });

  it('gap_4 uses spacing scale for gap', () => {
    expect(flexMap.gap_4).toEqual({
      gap: spacingScale['4'],
    });
  });

  it('gap_(n) dynamic sets gap', () => {
    expect((flexMap.gap_ as (n: number | string) => unknown)(12)).toEqual({ gap: 12 });
  });

  it('gap_x_ sets rowGap from scale', () => {
    expect(flexMap.gap_x_2).toEqual({
      rowGap: spacingScale['2'],
    });
  });

  it('gap_y_ sets columnGap from scale', () => {
    expect(flexMap.gap_y_2).toEqual({
      columnGap: spacingScale['2'],
    });
  });

  it('basis_4 uses spacing scale for flexBasis', () => {
    expect(flexMap.basis_4).toEqual({
      flexBasis: spacingScale['4'],
    });
  });

  it('basis_auto preset', () => {
    expect(flexMap.basis_auto).toEqual({ flexBasis: 'auto' });
  });

  it("basis_('auto') returns string auto", () => {
    expect((flexMap.basis_ as (v: string | number) => unknown)('auto')).toEqual({
      flexBasis: 'auto',
    });
  });

  it('basis_(n) coerces to number', () => {
    expect((flexMap.basis_ as (v: string | number) => unknown)(33)).toEqual({
      flexBasis: 33,
    });
  });
});

describe('align', () => {
  it('items_* maps alignItems', () => {
    expect(align.items_center).toEqual({ alignItems: 'center' });
  });

  it('content_* maps alignContent', () => {
    expect(align.content_between).toEqual({ alignContent: 'space-between' });
  });

  it('self_* maps alignSelf', () => {
    expect(align.self_stretch).toEqual({ alignSelf: 'stretch' });
  });
});

describe('justify', () => {
  it('maps justifyContent', () => {
    expect(justify.evenly).toEqual({ justifyContent: 'space-evenly' });
  });
});

describe('place', () => {
  it('compound items_center aligns and justifies center', () => {
    expect(place.items_center).toEqual({
      alignItems: 'center',
      justifyContent: 'center',
    });
  });
});
