/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        eclat: {
          ivory: '#FBF9F5',
          'ivory-light': '#FFFFFF',
          'ivory-dark': '#F4EFE6',
          limestone: '#EFEAE1',
          'limestone-subtle': '#F8F6F2',
          champagne: '#E5DAC6',
          'champagne-light': '#F1EADF',
          amber: '#B87834',
          'amber-deep': '#965E24',
          espresso: '#171413',
          'espresso-light': '#231E1C',
          'espresso-soft': '#342D2A',
          gold: '#C5A880',
          'gold-light': '#DFCCA8',
          'gold-dark': '#A9895E',
          charcoal: '#2D2825',
          sand: '#D9CFBF',
          pebble: '#A3998C',
          slate: '#6B635B',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        'ultra-wide': '0.25em',
        'super-wide': '0.35em',
      },
      boxShadow: {
        'plinth': '0 25px 50px -12px rgba(23, 20, 19, 0.12), 0 8px 24px -4px rgba(23, 20, 19, 0.08)',
        'plinth-hover': '0 35px 60px -15px rgba(23, 20, 19, 0.2), 0 12px 28px -4px rgba(23, 20, 19, 0.12)',
        'bottle-shadow': '0 30px 40px -15px rgba(0, 0, 0, 0.25)',
        'soft-glow': '0 0 40px -10px rgba(197, 168, 128, 0.25)',
      }
    },
  },
  plugins: [],
}
