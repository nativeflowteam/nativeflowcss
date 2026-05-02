export type DynamicArg = string | number;

export type DynamicSingleFn<TStyle> = (value: DynamicArg) => TStyle;

export type DynamicSpacingFn<TStyle> = {
  (all: DynamicArg): TStyle;
  (vertical: DynamicArg, horizontal: DynamicArg): TStyle;
  (top: DynamicArg, right: DynamicArg, bottom: DynamicArg, left: DynamicArg): TStyle;
};

export type DynamicStyleMap<TStyle> = Record<string, TStyle | DynamicSingleFn<TStyle> | DynamicSpacingFn<TStyle>>;
