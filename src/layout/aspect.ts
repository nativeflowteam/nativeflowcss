import type { AspectRatio } from '../types/layout';

const aspectRatioValues: { [key: string]: number | string } = {
  auto: 'auto',
  square: 1,
  video: 16 / 9,
};

const getAspectRatioValue = (key: string | number): number | string => {
  if (typeof key === 'number') return key;
  if (key === 'auto') return 'auto';
  if (!isNaN(Number(key))) return Number(key);

  // Handle fractional strings like '1/3'
  const fractionMatch = key.match(/^(\d+)\/(\d+)$/);
  if (fractionMatch) {
    const numerator = Number(fractionMatch[1]);
    const denominator = Number(fractionMatch[2]);
    return numerator / denominator;
  }

  const value = aspectRatioValues[key];
  if (value === undefined) throw new Error(`Invalid aspect ratio key: ${key}`);
  return value;
};

const aspect: Record<string, AspectRatio | ((key: string | number) => AspectRatio)> = {
  custom_: (key: string | number): AspectRatio => ({
    aspectRatio: getAspectRatioValue(key),
  }),
};

for (const key of Object.keys(aspectRatioValues)) {
  aspect[key] = { aspectRatio: getAspectRatioValue(key) };
}

// Example usage
// const autoAspectRatio = aspect.auto; // { aspectRatio: 'auto' }
// const squareAspectRatio = aspect.square; // { aspectRatio: 1 }
// const videoAspectRatio = aspect.video; // { aspectRatio: 16 / 9 }
// const customAspectRatio = aspect.custom_('4/3'); // { aspectRatio: 4 / 3 }
// const customAspectRatioNumber = aspect.custom_(3); // { aspectRatio: 3 }
// const customAspectRatioString = aspect.custom_('3'); // { aspectRatio: 3 }

export default aspect;
