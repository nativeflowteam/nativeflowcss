import type { ResizeMode } from '../types/layout';

const resizeModeValues: { [key: string]: ResizeMode } = {
  cover: 'cover',
  contain: 'contain',
  stretch: 'stretch',
  repeat: 'repeat',
  center: 'center',
};

const getResizeModeValue = (key: string): { resizeMode: ResizeMode } => {
  const value = resizeModeValues[key];
  if (value === undefined) throw new Error(`Invalid resize mode key: ${key}`);
  return { resizeMode: value };
};

const object_fit: { [key: string]: { resizeMode: ResizeMode } } = {};

Object.keys(resizeModeValues).forEach((key) => {
  object_fit[key] = getResizeModeValue(key);
});

// Example usage
// const coverResizeMode = object_fit.cover; // { resizeMode: 'cover' }
// const containResizeMode = object_fit.contain; // { resizeMode: 'contain' }
// const stretchResizeMode = object_fit.stretch; // { resizeMode: 'stretch' }
// const repeatResizeMode = object_fit.repeat; // { resizeMode: 'repeat' }
// const centerResizeMode = object_fit.center; // { resizeMode: 'center' }

export { object_fit };
