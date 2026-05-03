import { text, decoration } from '../src/index';
import colorList from '../src/constants/colorList';

describe('text', () => {
  const textMap = text as Record<string, unknown>;

  it('color_(hex) sets color', () => {
    expect((textMap.color_ as (c: string) => unknown)('#00ff00')).toEqual({
      color: '#00ff00',
    });
  });

  it('palette color_red_500', () => {
    expect(textMap.color_red_500).toEqual({ color: colorList.red_500 });
  });

  it('italic snippet sets fontStyle', () => {
    expect(textMap.italic).toEqual({ fontStyle: 'italic' });
  });

  it('fs_base preset sets fontSize and lineHeight', () => {
    expect(textMap.fs_base).toEqual({ fontSize: 16, lineHeight: 24 });
  });

  it('shadow_color_(hex)', () => {
    expect((textMap.shadow_color_ as (c: string) => unknown)('#010203')).toEqual({
      textShadowColor: '#010203',
    });
  });

  it('shadow_offset_(w,h)', () => {
    expect((textMap.shadow_offset_ as (w: number | string, h: number | string) => unknown)(4, 8)).toEqual({
      textShadowOffset: { width: 4, height: 8 },
    });
  });

  it('shadow_radius_(n)', () => {
    expect((textMap.shadow_radius_ as (n: number | string) => unknown)(6)).toEqual({
      textShadowRadius: 6,
    });
  });

  it('palette shadow_color_red_500', () => {
    expect(textMap.shadow_color_red_500).toEqual({
      textShadowColor: colorList.red_500,
    });
  });

  it('shadow_radius_3 preset', () => {
    expect(textMap.shadow_radius_3).toEqual({ textShadowRadius: 3 });
  });
});

describe('decoration', () => {
  const deco = decoration as Record<string, unknown>;

  it('underline preset sets textDecorationLine', () => {
    expect(deco.underline).toEqual({
      textDecorationLine: 'underline',
    });
  });

  it('color_(hex) sets textDecorationColor', () => {
    expect((deco.color_ as (c: string) => unknown)('#445566')).toEqual({
      textDecorationColor: '#445566',
    });
  });

  it('palette color_red_500', () => {
    expect(deco.color_red_500).toEqual({
      textDecorationColor: colorList.red_500,
    });
  });
});
