const z = {
  index_0: { zIndex: 0 },
  index_10: { zIndex: 10 },
  index_20: { zIndex: 20 },
  index_30: { zIndex: 30 },
  index_40: { zIndex: 40 },
  index_50: { zIndex: 50 },
  index_auto: { zIndex: 'auto' },

  index_(value: number | string): { zIndex: number | 'auto' } {
    if (value === 'auto') {
      return { zIndex: 'auto' };
    } else if (!isNaN(Number(value))) {
      return { zIndex: Number(value) };
    } else {
      throw new Error('Invalid zIndex value');
    }
  },
};

// Example usage
// console.log(z.index_(10)); // { zIndex: 10 }
// console.log(z.index_('auto')); // { zIndex: 'auto' }
// console.log(z.index_('20')); // { zIndex: 20 }
// console.log(z.index_('invalid')); // Error: Invalid zIndex value

export default z;
