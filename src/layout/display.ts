import type { Display } from '../types/layout';

const display: { [key: string]: Display } = {
  hidden: { display: 'none' },
  flex: { display: 'flex' },
};

// Example usage
// const hiddenDisplay = display.hidden; // { display: 'none' }
// const flexDisplay = display.flex; // { display: 'flex' }

export default display;
