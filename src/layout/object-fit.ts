import type { SizeMode } from '../types/layout';

const object_fit: {
  [key: string]: { resizeMode: SizeMode } | { objectFit: SizeMode };
} = {
  cover: { resizeMode: 'cover' },
  contain: { resizeMode: 'contain' },
  stretch: { resizeMode: 'stretch' },
  repeat: { resizeMode: 'repeat' },
  center: { resizeMode: 'center' },
  fill: { objectFit: 'fill' },
  scale_down: { objectFit: 'scale_down' },
};

// Example usage
// const coverResizeMode = object_fit.cover; // { resizeMode: 'cover' }
// const containResizeMode = object_fit.contain; // { resizeMode: 'contain' }
// const stretchResizeMode = object_fit.stretch; // { resizeMode: 'stretch' }
// const repeatResizeMode = object_fit.repeat; // { resizeMode: 'repeat' }
// const centerResizeMode = object_fit.center; // { resizeMode: 'center' }
// const fillResizeMode = object_fit.fill; // { objectFit: 'fill' }
// const scaleDownResizeMode = object_fit.scale_down; // { objectFit: 'scale_down' }

export default object_fit;
