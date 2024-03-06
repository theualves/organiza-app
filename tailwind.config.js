/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: { 

      maxWidth: {
        '75': '75%',
        '45': '45%',
        '55': '55%',
      },

      fontSize: {
        '64': '4rem',
      },

      width: {
        '1040': '65rem',
      },

      height: {
        '688': '43rem',
      },

      textColor: {
        'custom-green': '#218460',
        'cor-fundo': '#002216',
        'bg-links' : '#B3B3B3',
        'bg-copyrights' : '#707070',
        
      },

      backgroundColor: {
        'cor-button': '#3B9373',
        'cor-fundo': '#002216',
        'custom-green': '#218460',
        'bg-logado': '#EDEDED', 
        'hover-button' : '#00482E',       
      },            

      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
        'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      gradientColorStops: {
        'custom1-green': '#218460',
        'custom2-green': '#1BC149',
        'custom3-green': '#115267',                
      },      

      colors: {
        'text-error': '#933B3B',
        'color-p2': '#00482E',
      },    
  },
  plugins: [
    require('flowbite/plugin')
  ],
  }
}
