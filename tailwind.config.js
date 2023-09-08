/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      colors: {
        lightRed: 'hsl(0, 100%, 67%)',
        orangeYellow: 'hsl(39, 100%, 56%)',
        greenTeal: 'hsl(166, 100%, 37%)',
        cobaltBlue: 'hsl(234, 85%, 45%)',
        white: 'hsl(0, 0%, 100%)',
        paleBlue: 'hsl(221, 100%, 96%)',
        lightLavender: 'hsl(241, 100%, 89%)',
        darkGrayBlue: 'hsl(224, 30%, 27%)',
      },
      fontSize:{
        textBase: '1.125rem'
      },
      fontFamily: {
        hanken: ['Hanken Grotesk','sans']
      },
      fontWeight:{
        500: '500',
        600: '600',
        700: '700'
      },
      backgroundImage: {
        gradientSlateRoyalBlue: 'linear-gradient(5deg,hsl(241,81%,54%) 0%, hsl(252,100%,67%) 90%)',
      },
    plugins: [],
    },
  }
}

