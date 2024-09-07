import type { AspectRatio } from '../types/layout';

const aspectRatioValues: { [key: string]: number | string } = {
  auto: 'auto',
  square: 1,
  video: 16 / 9,
};

const getAspectRatioValue = (key: string | number): number | string => {
  if (typeof key === 'number') return key;
  const value = aspectRatioValues[key];
  if (value === undefined) throw new Error(`Invalid aspect ratio key: ${key}`);
  return value;
};

const aspect_ratio = {
  custom: (key: string | number): AspectRatio => {
    return { aspectRatio: getAspectRatioValue(key) };
  },
} as { [key: string]: AspectRatio } & {
  custom: (key: string | number) => AspectRatio;
};

Object.keys(aspectRatioValues).forEach((key) => {
  aspect_ratio[key] = { aspectRatio: getAspectRatioValue(key) };
});

// Example usage
// const autoAspectRatio = aspect_ratio.auto; // { aspectRatio: 'auto' }
// const squareAspectRatio = aspect_ratio.square; // { aspectRatio: 1 }
// const videoAspectRatio = aspect_ratio.video; // { aspectRatio: 16 / 9 }
// const customAspectRatio = aspect_ratio.custom(4 / 3); // { aspectRatio: 4 / 3 }

export default aspect_ratio;
