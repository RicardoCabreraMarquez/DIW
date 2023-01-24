const { transform } = require('lodash')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",],
    variants: {
      extend: {
        animation:['responsive', 'hover', 'group-hover'],
        fontSize:['responsive', 'hover', 'group-hover'],
        transform:['responsive', 'hover', 'group-hover'],
        scale:['responsive', 'hover', 'group-hover'],
      },
    },
  theme: {
    extend: {
      colors:{
        "azul-claro":"#37bcf9",
        "azul-oscuro": "#00538c",
        "azul-medio": "#0370b9"
      },
      keyframes:{
        rotateGear : {
          from : {transform: 'rotateZ(0deg)'},
          to : {transform: 'rotateZ(360deg)'},
        },
        fromBellow : {
          '0%': {transform: 'translateY(0%)'}, 
          '50%':{transform: 'translateY(200%)'},
          '100%':{transform: 'translateY(0%)'},
        },
        fromRight : {
          from : {transform: 'translateX(200%)'},
          to : {transform: 'translateX(0%)'},
        },
        backBanner : {
          '0%': {'background-position': '0px 0px'},
          '100%' : {'background-position': '-200px -200px'}
        },
        showText :{
          '0%' : {transform: 'translateX(-600%) scale(5,5)',
                  opacity: '1' },
          '50%' : {transform: 'translateX(600%) scale(5,5)',
                  opacity: '1'},
          '75%' : {transform: 'translateX(-600%) scale(5,5)',
                  'text-shadow': 'none',
                  color: 'transparent',
                  opacity: '0'},
          '100%' : {transform: 'translateX(0%) scale(1,1)',
                  'text-shadow': '2px 2px 1px black',
                  color: 'white',
                  opacity: '1'},
          },
          showIcon :{
            from : {transform: 'translateY(-200%)'},
            to : {transform: 'translateY(0%)'}
          },
          showCategory :{
            from : {transform: 'translateY(-300%)',
                    color: 'black'},
            to : {transform: 'translateY(0%)',
                  color: 'white'}
          },
          showDescription :{
            from : {transform: 'translateX(-300%)',
                    color: 'black'},
            to : {transform: 'translateX(0%)'}
          }
      },
      animation: {
        rotategear : 'rotateGear 2s infinite linear',
        frombellow : 'fromBellow 500ms linear',
        fromright : 'fromRight 300ms linear',
        backbanner : 'backBanner 10s linear',
        showtext : 'showText 10s linear',
        showicon : 'showIcon 300ms linear',
        showcategory : 'showCategory 400ms linear',
        showdescription : 'showDescription 400ms linear',
      },
      boxShadow: {
        'lateral-h3': '0px 1px 0px #393d3f, 1px 2px 0px #393d3f, 2px 3px 0px #393d3f, 3px 4px 0px #393d3f'
      }
    },  
  },
  plugins: [],
}

