type Padding = {
  padding?: number;
  paddingTop?: number;
  paddingBottom?: number;
  paddingLeft?: number;
  paddingRight?: number;
  paddingHorizontal?: number;
  paddingVertical?: number;
};

type Margin = {
  margin?: number;
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
  marginHorizontal?: number;
  marginVertical?: number;
};

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

const p = {
  p: (num: number): Padding => ({
    padding: num,
  }),
  t: (num: number): Padding => ({
    paddingTop: num,
  }),
  b: (num: number): Padding => ({
    paddingBottom: num,
  }),
  l: (num: number): Padding => ({
    paddingLeft: num,
  }),
  r: (num: number): Padding => ({
    paddingRight: num,
  }),
  x: (num: number): Padding => ({
    paddingHorizontal: num,
  }),
  y: (num: number): Padding => ({
    paddingVertical: num,
  }),
};

const m = {
  m: (num: number): Margin => ({
    margin: num,
  }),
  t: (num: number): Margin => ({
    marginTop: num,
  }),
  b: (num: number): Margin => ({
    marginBottom: num,
  }),
  l: (num: number): Margin => ({
    marginLeft: num,
  }),
  r: (num: number): Margin => ({
    marginRight: num,
  }),
  x: (num: number): Margin => ({
    marginHorizontal: num,
  }),
  y: (num: number): Margin => ({
    marginVertical: num,
  }),
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

export { p, m, flex, border };
