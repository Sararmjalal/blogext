import { createTheme } from '@mui/material/styles';
import localFont from '@next/font/local'

const cormorantGaramond = localFont({ src: './fonts/CormorantGaramond-Bold.woff' })

const openSans = localFont({
  src: [{
    path: './fonts/OpenSans-Light.woff',
    weight: '300',
    style:"normal"
  },
    {
    path: './fonts/OpenSans-LightItalic.woff',
    weight: '300',
    style:"italic"
  },
    {
    path: './fonts/OpenSans-Medium.woff',
    weight: '400',
    style:"normal"
    },
    {
      path: './fonts/OpenSans-Bold.woff',
      weight: '700',
      style:"normal"
    },
  ]
})

export const blogextTheme = createTheme({
  palette: {
    background: {
      default: "#F1F4F5"
    },
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#ffffff',
    },
  },
  typography: {
    fontFamily: [
      openSans.style.fontFamily,
      cormorantGaramond.style.fontFamily,
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    h1: {
      fontFamily: cormorantGaramond.style.fontFamily,
      fontWeight: "400",
      fontSize: '64px',
      lineHeight: '80px',
      fontStyle: "normal"
    },
    h2: {
      fontFamily: cormorantGaramond.style.fontFamily,
      fontWeight: "400",
      fontSize: '52px',
      lineHeight: '80px',
      fontStyle: "normal"
    },
    h3: {
      fontFamily: cormorantGaramond.style.fontFamily,
      fontWeight: "400",
      fontSize: '36px',
      lineHeight: '80px',
      fontStyle: "normal"
    },
    h4: {
      fontFamily: cormorantGaramond.style.fontFamily,
      fontWeight: "400",
      fontSize: '24px',
      lineHeight: '80px',
      fontStyle: "normal"
    },
    subtitle1: {
      fontFamily: openSans.style.fontFamily,
      fontWeight: '400',
      fontSize: '21px',
      lineHeight: '32px',
      fontStyle: "normal"
    },
    subtitle2: {
      fontFamily: openSans.style.fontFamily,
      fontWeight: '400',
      fontSize: '18x',
      lineHeight: '26px',
      fontStyle: "normal"
    },
    button: {
      fontFamily: openSans.style.fontFamily,
      textTransform: 'none',
      fontWeight: '700',
      fontSize: '16px',
      lineHeight: '24px',
      fontStyle: "normal"
    },
    caption: {
      fontFamily: openSans.style.fontFamily,
      fontWeight: '300',
      fontSize: '14px',
      lineHeight: '19px',
      fontStyle: "normal"
    },
  },
});

console.log("CREATE THENE", createTheme())