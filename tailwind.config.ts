import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        nunito: ['var(--font-nunito)'],
      },
      colors: {
        lightGray: '#F6F4F5',
        gray: '#828282',
        gray2: '#E0E0E0',
        gray3: '#363333',
        gray4: '#4F4F4F',
        red: '#D20653',
        orange: '#FF951D',
        yellow: '#FFEAD2',
        yellow2: '#FFF5E9',
        black: '#333333',
      },
    },
  },
  plugins: [],
};
export default config;
