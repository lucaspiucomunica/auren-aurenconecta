/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['../../index.html', '../js/*.js'],
  theme: {
    extend: {
      colors: {
        azul: '#170054',
        rosa: '#E52397',
        'cinza-50': '#F6F6F6',
        'cinza-100': '#E7E7E7',
        'cinza-200': '#D1D1D1',
        'cinza-600': '#5D5D5D',
        'cinza-800': '#454545',
        'cinza-900': '#3D3D3D',
      },

      fontFamily: {
        sans: ['Verdana', 'Arial', 'sans-serif'],
      },

      container: {
        center: true,
        screens: {
          sm: '100%',
          md: '100%',
          lg: '100%',
          xl: '100%',
          '2xl': '1328px',
        },
      },

      screens: {
        mlg: '880px',
      },
    },
  },
  plugins: [],
};
