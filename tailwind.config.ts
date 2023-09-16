import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      // Commented out, as we support minimum 800px width
      // 'sm': '640px',
      // => @media (min-width: 640px) { ... }

      // 768px by default, but we want to use 800px as the task description says
      md: '800px',
      // => @media (min-width: 800px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      minWidth: {
        '800px': '800px',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};

export default config;
