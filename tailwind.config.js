/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '300px',
      // => @media (min-width: 576px) { ... }

      'md': '960px',
      // => @media (min-width: 960px) { ... }

      'lg': '1440px',
      // => @media (min-width: 1440px) { ... }
    },

    extend: {
      screens: {
        'sm': '300px',},
      animation:{
        slideIn:'slideIn 1.5s ease-in-out forwards',
      },
      keyframes:{
        slideIn:{
          '0%':{transform: 'translateY(-100%)'},
          '100%':{ transform: 'translateY(0)'},
        },
      },
      screens:{
        'xs':{'min': '320px', 'max' :'480px'},
        '3xl':'1600px',
      },
    },
  },
  plugins: [],
}

