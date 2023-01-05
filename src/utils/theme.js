import { createGlobalStyle } from 'styled-components'

const mainBrandColor = '#D3A265'
const lightShades = '#FDFBF8'
const darkAccent = '#726699'
const darkShades = '#3D3737'

const theme = {
  // It can be liberally applied to your layout as its main identity.
  mainBrandColor,
  // Accent colors can be used to bring attention to design elements
  // by contrasting with the rest of the palette.
  lightAccent: '',
  // Use this color as the background for your dark-on-light designs,
  // or the text color of an inverted design.
  lightShades,
  // Another accent color to consider. Not all colors have to be used -
  // sometimes a simple color scheme works best.
  darkAccent,
  // Use as the text color for dark-on-light designs,
  // or as the background for inverted designs.
  darkShades,
  dangerColor: '#f44336',

  primaryColor: mainBrandColor,
  borderColor: mainBrandColor,
  backgroundColor: '#FFFFF',
  backgroundSecondaryColor: '#F4F4F4',
  fontSize: 16,
  fontSizeSmall: 14,
  fontSizeExtraSmall: 12,
  fontSizeMedium: 18,
  fontSizeLarge: 22,
  textColor: '#161616',
  textColorInverse: lightShades,
  textColorLite: '#878787',
  primaryFontFamily: "'Lora', serif",
  secondaryFontFamily: "'Libre Baskerville', serif",
  boxShadow: 'rgba(0,0,0,0.08) 0px 7px 18px',
}

export default theme

const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${theme.primaryFontFamily};
    color: ${theme.textColor};
    letter-spacing: 0.03rem !important;
    font-size: 17px;
  }
  .border {
    border: 2.5px solid ${theme.primaryColor};
  }
  .bgLight {
    background-color : ${theme.backgroundSecondaryColor};
  }
  .textPrimary {
    color : ${theme.primaryColor};
  }
  .textLite {
    color : ${theme.textColorLite};
  }
  .textSecondaryColor {
    color : ${theme.textColor};
  }
  .bgLightYellow {
    color: ${theme.lightShades};
  }
`

export { GlobalStyle }
