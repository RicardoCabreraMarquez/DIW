module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: { 
    animation:['responsive', 'hover', 'group-hover'],
    fontSize:['responsive', 'hover', 'group-hover'],
    transform:['responsive', 'hover', 'group-hover'],
    scale:['responsive', 'hover', 'group-hover']
  },
  },
  plugins: [],
}
