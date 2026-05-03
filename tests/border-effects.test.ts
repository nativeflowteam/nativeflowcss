import { bdr, fx, shadow } from '../src/index';
import colorList from '../src/constants/colorList';

describe('bdr', () => {
  const border = bdr as Record<string, unknown>;

  it('color_(hex) sets borderColor', () => {
    expect((border.color_ as (c: string) => unknown)('#ff00aa')).toEqual({
      borderColor: '#ff00aa',
    });
  });

  it('w_(n) sets borderWidth', () => {
    expect((border.w_ as (n: number | string) => unknown)(3)).toEqual({
      borderWidth: 3,
    });
  });

  it('rounded_(n) sets borderRadius', () => {
    expect((border.rounded_ as (n: number | string) => unknown)(10)).toEqual({
      borderRadius: 10,
    });
  });

  it('rounded_md preset', () => {
    expect(border.rounded_md).toEqual({ borderRadius: 6 });
  });

  it('palette color_red_500 matches colorList', () => {
    expect(border.color_red_500).toEqual({
      borderColor: colorList.red_500,
    });
  });

  it('t_w_(n) sets borderTopWidth', () => {
    expect((border.t_w_ as (n: number | string) => unknown)(4)).toEqual({
      borderTopWidth: 4,
    });
  });
});

describe('fx', () => {
  const effects = fx as Record<string, unknown>;

  it('bg_color_(hex) sets backgroundColor', () => {
    expect((effects.bg_color_ as (c: string) => unknown)('#112233')).toEqual({
      backgroundColor: '#112233',
    });
  });

  it('palette bg_color_red_500', () => {
    expect(effects.bg_color_red_500).toEqual({
      backgroundColor: colorList.red_500,
    });
  });

  it('opacity_(valid) sets opacity', () => {
    expect((effects.opacity_ as (n: number | string) => unknown)(0.5)).toEqual({
      opacity: 0.5,
    });
  });

  it('opacity_(out of range) throws', () => {
    const opacity = effects.opacity_ as (n: number | string) => unknown;
    expect(() => opacity(-0.1)).toThrow(/between 0\.0 and 1\.0/);
    expect(() => opacity(1.1)).toThrow(/between 0\.0 and 1\.0/);
  });

  it('opacity_5 preset maps to 0.5', () => {
    expect(effects.opacity_5).toEqual({ opacity: 0.5 });
  });

  it('elevation_3 preset', () => {
    expect(effects.elevation_3).toEqual({ elevation: 3 });
  });

  it('elevation_(n) dynamic', () => {
    expect((effects.elevation_ as (n: number | string) => unknown)(5)).toEqual({
      elevation: 5,
    });
  });

  it('elevation_(out of range) throws', () => {
    const elevation = effects.elevation_ as (n: number | string) => unknown;
    expect(() => elevation(0)).toThrow(/between 1 and 10/);
    expect(() => elevation(11)).toThrow(/between 1 and 10/);
  });
});

describe('shadow', () => {
  const shadowMap = shadow as Record<string, unknown>;

  it('color_(hex) sets shadowColor', () => {
    expect((shadowMap.color_ as (c: string) => unknown)('#abcdef')).toEqual({
      shadowColor: '#abcdef',
    });
  });

  it('offset_(w,h) sets shadowOffset', () => {
    expect((shadowMap.offset_ as (w: number | string, h: number | string) => unknown)(3, 7)).toEqual({
      shadowOffset: { width: 3, height: 7 },
    });
  });

  it('opacity_(n) dynamic sets shadowOpacity', () => {
    expect((shadowMap.opacity_ as (n: number | string) => unknown)(0.25)).toEqual({
      shadowOpacity: 0.25,
    });
  });

  it('rounded_(n) sets shadowRadius', () => {
    expect((shadowMap.rounded_ as (n: number | string) => unknown)(9)).toEqual({
      shadowRadius: 9,
    });
  });

  it('rounded_md preset', () => {
    expect(shadowMap.rounded_md).toEqual({ shadowRadius: 3 });
  });

  it('palette color_red_500', () => {
    expect(shadowMap.color_red_500).toEqual({
      shadowColor: colorList.red_500,
    });
  });

  it('offset_2 preset', () => {
    expect(shadowMap.offset_2).toEqual({
      shadowOffset: { width: 2, height: 2 },
    });
  });
});
