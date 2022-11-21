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
});

console.log("CREATE THENE", createTheme())