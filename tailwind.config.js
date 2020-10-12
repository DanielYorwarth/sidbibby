// See https://tailwindcss.com/docs/configuration for details
module.exports = {
  purge: [
    './src/**/*.js',
  ],
  theme: {
    extend: {
      fontSize: {
        '7xl': '5rem',
      },
      maxWidth: {
        'screen-2xl': '1500px',
      },
      colors: {
        primary: {
          default: '#59B325',
          dark: '#044122',
          darker: '#192821',
        },
        secondary: {
          default: '#D8574A',
        },
        gray: {
          default: '#EEEEEE'
        }
      },
    }
  },
};
