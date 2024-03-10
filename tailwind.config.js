const plugin = require("tailwindcss/plugin")

/** @type {import('tailwindcss').Config} */
export default  {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
 
  theme: {
    extend: {
      backgroundSize: {
        'size-200': '200% 200%',
    },
    backgroundPosition: {
        'pos-0': '0% 0%',
        'pos-100': '100% 100%',
    },
      boxShadow:{
        neon: "0 0 5px theme('colors.purple.200'), 0 0 20px theme('colors.purple.700')"
      }

    },
    fontFamily:{
      Poppins: [ 'Poppins', 'sans-serif'],
      montserrat: ['Montserrat', 'sans-serif'],
      

    }
  },
  colors: {
      'blues': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
    },
  plugins: [
    plugin(({theme, addUtilities})=> {
       const neonUtilities = {};
       const colors = theme('colors');
       for(const color in colors){
        if(typeof colors[color] === 'object'){
          const color1 = colors[color]['500']
          const color2 = colors[color]['700']
          neonUtilities[`.neon-${color}`] = {
            boxShadow: `0 0 5px ${color1}, 0 0 20px ${color2}`
          };
        }
       }
addUtilities(neonUtilities) 
    })
  ],


};


// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   theme: {
//     screens: {
//       sm: '480px',
//       md: '768px',
//       lg: '976px',
//       xl: '1440px',
//     },

//     fontFamily: {
//       sans: ['Graphik', 'sans-serif'],
//       serif: ['Merriweather', 'serif'],
//     },
//     extend: {
//       spacing: {
//         '128': '32rem',
//         '144': '36rem',
//       },
//       borderRadius: {
//         '4xl': '2rem',
//       }
//     }
//   }
// }