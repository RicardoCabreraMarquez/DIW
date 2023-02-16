/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    variants: {
        extend: {
            animation:['responsive', 'hover', 'group-hover'],
            fontSize:['responsive', 'hover', 'group-hover'],
            transform:['responsive', 'hover', 'group-hover'],
            outline: ['responsive', 'hover', 'group-hover', 'focus'],
            scale: ['responsive', 'hover', 'group-hover','active'],
        },           
    },
    theme: {
        extend: {
            colors: {
                'principal':'#ea2e38',
            },
            backgroundImage: {
                'login': "url('/image/fondo.svg')",
            },
            width: {
                'login': '31.25rem',
            },
            height: {
                'login': '37.5rem',
            },
            boxShadow: {
                'login': '0px 0px 18px 5px rgba(67,66,66,0.45) inset;',
            }
        },
    },
    plugins: [], 
  }