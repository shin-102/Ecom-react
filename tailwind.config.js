/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        'primary' : {
          'DEFAULT' : '#E1251B',
        }, 
        'smoke' : '#f5f5f5',
      },
      fontFamily : {
        'opensans' : '"Open Sans"'
      }
    },
  },
  plugins: [],
}

