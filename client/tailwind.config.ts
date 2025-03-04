import scrollbar from 'tailwind-scrollbar';
import daisyui from 'daisyui';

export default {
  theme: {
    extend: {
      fontFamily: {
        jost: ['Jost', 'sans-serif'],
      },
    },
  },
  plugins: [
    scrollbar,
    daisyui
  ],
};