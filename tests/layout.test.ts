import { aspect, object_fit, display, direction, pos, z, overflow } from '../src/index';
import { spacingScale } from '../src/constants/spacingScale';

describe('aspect', () => {
  const custom = aspect.custom_ as (key: string | number) => { aspectRatio: number | string };

  it('preset square uses numeric ratio 1', () => {
    expect(aspect.square).toEqual({ aspectRatio: 1 });
  });

  it('preset video uses 16/9', () => {
    expect(aspect.video).toEqual({ aspectRatio: 16 / 9 });
  });

  it('custom_ resolves fractional string', () => {
    expect(custom('4/3')).toEqual({ aspectRatio: 4 / 3 });
  });

  it('custom_(number) passes ratio through', () => {
    expect(custom(3)).toEqual({ aspectRatio: 3 });
  });

  it('custom_(numeric string) coerces to number', () => {
    expect(custom('5')).toEqual({ aspectRatio: 5 });
  });
});

describe('object_fit', () => {
  it('cover uses resizeMode', () => {
    expect(object_fit.cover).toEqual({ resizeMode: 'cover' });
  });

  it('fill uses objectFit', () => {
    expect(object_fit.fill).toEqual({ objectFit: 'fill' });
  });

  it('scale_down uses objectFit', () => {
    expect(object_fit.scale_down).toEqual({ objectFit: 'scale_down' });
  });
});

describe('display', () => {
  it('flex sets display flex', () => {
    expect(display.flex).toEqual({ display: 'flex' });
  });
});

describe('direction', () => {
  it('ltr sets direction', () => {
    expect(direction.ltr).toEqual({ direction: 'ltr' });
  });
});

describe('overflow', () => {
  it('hidden sets overflow hidden', () => {
    expect(overflow.hidden).toEqual({ overflow: 'hidden' });
  });
});

describe('pos', () => {
  it('absolute preset sets position', () => {
    expect(pos.absolute).toEqual({ position: 'absolute' });
  });

  it('t_4 uses spacing scale for top', () => {
    expect((pos as Record<string, { top?: number }>).t_4).toEqual({
      top: spacingScale['4'],
    });
  });

  it('t_(value) function form uses numeric top', () => {
    expect(pos.t_(20)).toEqual({ top: 20 });
  });
});

describe('z', () => {
  it('index_10 preset', () => {
    expect(z.index_10).toEqual({ zIndex: 10 });
  });

  it('index_auto preset', () => {
    expect(z.index_auto).toEqual({ zIndex: 'auto' });
  });

  it('index_(number)', () => {
    expect(z.index_(10)).toEqual({ zIndex: 10 });
  });

  it("index_('auto')", () => {
    expect(z.index_('auto')).toEqual({ zIndex: 'auto' });
  });
});
