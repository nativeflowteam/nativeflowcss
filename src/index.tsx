// Spacing
import p from './spacing/padding';
import m from './spacing/margin';

// Layout
import aspect_ratio from './layout/aspect-ratio';
import object_fit from './layout/object-fit';
import display from './layout/display';
import direction from './layout/direction';

type Flex = {
  flex?: number;
  gap?: number;
  justifyContent?: string;
  alignItems?: string;
  flexWrap?: string;
  alignContent?: string;
  alignSelf?: string;
  flexDirection?: string;
};

type Border = {
  borderWidth?: number;
  borderColor?: string;
  borderTopWidth?: number;
  borderBottomWidth?: number;
  borderLeftWidth?: number;
  borderRightWidth?: number;
};

const flex = {
  f: (num: number = 1): Flex => ({
    flex: num,
  }),
  gap: (num: number = 0): Flex => ({
    gap: num,
  }),
  justify: (value: string = 'flex-start'): Flex => ({
    justifyContent: value,
  }),
  items: (value: string = 'stretch'): Flex => ({
    alignItems: value,
  }),
  wrap: (value: string = 'nowrap'): Flex => ({
    flexWrap: value,
  }),
  alignContent: (value: string = 'flex-start'): Flex => ({
    alignContent: value,
  }),
  alignSelf: (value: string = 'auto'): Flex => ({
    alignSelf: value,
  }),
  row: {
    flexDirection: 'row',
  } as Flex,
  row_reverse: {
    flexDirection: 'row-reverse',
  } as Flex,
  col: {
    flexDirection: 'column',
  } as Flex,
  column_reverse: {
    flexDirection: 'column-reverse',
  } as Flex,
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

export { object_fit, display, direction, aspect_ratio, p, m, flex, border };
