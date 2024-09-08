// Spacing
import p from './spacing/padding';
import m from './spacing/margin';

// Layout
import aspect_ratio from './layout/aspect-ratio';
import object_fit from './layout/object-fit';
import display from './layout/display';
import direction from './layout/direction';
import pos from './layout/position';
import z from './layout/z-index';
import overflow from './layout/overflow';

// Flexbox
import flex from './flexbox/flex';
import align from './flexbox/align';
import justify from './flexbox/justify';

type Border = {
  borderWidth?: number;
  borderColor?: string;
  borderTopWidth?: number;
  borderBottomWidth?: number;
  borderLeftWidth?: number;
  borderRightWidth?: number;
};

const border = {
  width: (num: number = 1): Border => ({
    borderWidth: num,
  }),
  color: (string: string): Border => ({
    borderColor: string,
  }),
  t: (num: number = 1): Border => ({
    borderTopWidth: num,
  }),
  b: (num: number = 1): Border => ({
    borderBottomWidth: num,
  }),
  l: (num: number = 1): Border => ({
    borderLeftWidth: num,
  }),
  r: (num: number = 1): Border => ({
    borderRightWidth: num,
  }),
};

export {
  object_fit,
  display,
  direction,
  aspect_ratio,
  z,
  pos,
  overflow,
  p,
  m,
  flex,
  align,
  justify,
  border,
};
