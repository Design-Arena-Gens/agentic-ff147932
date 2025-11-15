import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#16a34a',
          dark: '#15803d',
          light: '#4ade80'
        }
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          '2xl': '1200px',
        }
      }
    },
  },
  plugins: [],
}
export default config
