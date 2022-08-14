/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'pink':'#ff4d5a'
      },
      fontFamily:{
        'nav-bar':['Roboto'],
        'name':['Lato'],
        'body':['Dosis'],
        'hey':['Teko'],
        'footer': ['Roboto'],
      },
      screens:{
        'lg':'1000px',
        'sp': {'min': '768px', 'max':'1000px'},
        'pp': {'max':'768px'}
      },
      gridTemplateRows: {
        '12': 'repeat(12,minmax(0,1fr))',
      }
    },
  },
  plugins: [],
}
