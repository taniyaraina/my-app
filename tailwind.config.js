module.exports = {
  mode: 'jit',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/utils/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primaryColor: '#D3A265',
        lightYellow: '#FDFBF8',
        grayLight: ' #706C6D',
        darkPink: '#D150E5',
        darkPurple: '#804BEE',
        lightPurple: '#A84EEA',
        lightWhite: '#FAF7FF',
        lightGreen: '#89C053',
      },
      fontSize: {
        extraLarge: '65px',
        medium: '25px',
        large: '45px',
      },
      minHeight: {
        mh: '158px',
      },
      borderRadius: {
        br: '10px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
