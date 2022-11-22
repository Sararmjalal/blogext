import { createTheme } from '@mui/material/styles';

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
    h1: {
      fontFamily: 'Cormorant Garamond',
      fontWeight: "medium",
      fontSize: '64px',
      lineHeight: '80px',
    },
    h2: {
      fontFamily: 'Cormorant Garamond',
      fontWeight: "medium",
      fontSize: '52px',
      lineHeight: '80px',
    },
    h3: {
      fontFamily: 'Cormorant Garamond',
      fontWeight: "medium",
      fontSize: '36px',
      lineHeight: '80px',
    },
    h4: {
      fontFamily: 'Cormorant Garamond',
      fontWeight: "medium",
      fontSize: '24px',
      lineHeight: '80px',
    },
    subtitle1: {
      fontFamily: 'Open Sans',
      fontWeight: 'medium',
      fontSize: '21px',
      lineHeight: '32px'
    },
    subtitle2: {
      fontFamily: 'Open Sans',
      fontWeight: 'medium',
      fontSize: '18x',
      lineHeight: '26px'
    },
    button: {
      fontFamily: 'Open Sans',
      fontWeight: 'bold',
      fontSize: '16px',
      lineHeight:'24px',
    },
    caption: {
      fontFamily: 'Open Sans',
      fontWeight: 'medium',
      fontSize: '14px',
      lineHeight: '19px',
    },
  },
});

console.log("CREATE THENE", createTheme())