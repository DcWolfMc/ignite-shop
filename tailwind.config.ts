import type { Config } from 'tailwindcss'

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
      colors:{
      'white': '#ffffff',
      'gray': {
        100: '#e1e1e6',
        300: '#c4c4cc',
        800: '#202024',
        900: '#121214',
      },
      'green': {
        300: '#00b37e',
        500: '#00875f',
      },
      "blue":{
        300: '#267DCD',
        500: '#004687',
      },
      }
    },
  },
  plugins: [],
}
export default config
