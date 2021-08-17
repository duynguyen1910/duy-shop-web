const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors,
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      cursive: ['Pacifico', 'cursive'],

    },
    extend: {
      spacing: ['group-focus'],
      spacing: {
        
        // "1": "4px"
        "0": "0px",
        "1.75": "7px",
        "2.25": "9px",
        "8.5": "34px",
        "12.5": "50px",
        "18": "72px",
        "18.5": "74px",
        "26.5": "106px",
        "57": "228px",
        "59": "236px",
        "82": "328px",
        "83.5": "334px",
        '58.5': "234px",
        "63.5": "254px",
        
        "86.5": "346px",
        '128': '32rem',
        '144': '36rem',

        "35.75": "143px"
      },
      borderRadius: {
        '4xl': '2rem',
      },
      borderWidth: {
        '1': '1px'
      },
      backgroundColor: ["active"],
      colors: {
        violetcustoms: "#e3b4e2",
        graycustom: "#a1a1b1",
        pinkcustom: "#cd81cb",
        borderColor: "#ffffff38",
        bgnav: "#f5f7fb",
        iconcustom: "#c3cad6",
        titlecustom: "#393d45",
        whitecustom: "#bec3cd",
        bgcontent: "#f5f5f5",
        graycustom1:"#4a4d55",
        "gray-85-custom": "rgba(74, 77, 85, 0.85)"

      },
      boxShadow: {
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
        '4xl': '0 45px 70px -17px rgba(0, 0, 0, 0.35)',
        '5xl': '0 55px 80px -19px rgba(0, 0, 0, 0.4)',
        inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        none: 'none',
      },
      transitionDuration: {
        "400": "400ms",
        "600": "600ms"
      },
      opacity: {
        "85": ".85"
      }

    }
  },
  variants: {
    extend: {
      borderColor: ['focus-visible'],
      opacity: ['disabled'],
    }
  }
}