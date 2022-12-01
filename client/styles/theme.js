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

const color = {
  background: {
    default: 'white'
  },
  primary: {
    main: '#000000'
  },
  secondary: {
    main: '#ffffff',
  },
  gray: '#949799'
}

const {background, primary, secondary, gray} = color

export const blogextTheme = createTheme({
  palette: {
    background,
    primary,
    secondary,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1440,
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
      fontStyle: "normal",
      color: primary.main,
    },
    h2: {
      fontFamily: cormorantGaramond.style.fontFamily,
      fontWeight: "400",
      fontSize: '52px',
      lineHeight: '64px',
      fontStyle: "normal",
      color: primary.main,
    },
    h3: {
      fontFamily: cormorantGaramond.style.fontFamily,
      fontWeight: "400",
      fontSize: '36px',
      lineHeight: '46px',
      fontStyle: "normal",
      color: primary.main,
    },
    h4: {
      fontFamily: cormorantGaramond.style.fontFamily,
      fontWeight: "400",
      fontSize: '24px',
      lineHeight: '32px',
      fontStyle: "normal",
      color: primary.main,
    },
    subtitle1: {
      fontFamily: openSans.style.fontFamily,
      fontWeight: '400',
      fontSize: '21px',
      lineHeight: '32px',
      fontStyle: "normal",
      color: gray,
    },
    subtitle2: {
      fontFamily: openSans.style.fontFamily,
      fontWeight: '400',
      fontSize: '18x',
      lineHeight: '26px',
      fontStyle: "normal",
      color: gray,
    },
    button: {
      fontFamily: openSans.style.fontFamily,
      textTransform: 'none',
      fontWeight: '700',
      fontSize: '16px',
      lineHeight: '24px',
      fontStyle: "normal",
      color: primary.main,
    },
    caption: {
      fontFamily: openSans.style.fontFamily,
      fontWeight: '300',
      fontSize: '14px',
      lineHeight: '19px',
      fontStyle: "normal",
      color: primary.main,
    },
  },
  components: {
    MuiContainer: {
      variants: [{
        props: { variant: 'main' },
        style: {
          margin: { xs: "0 24px", md: "0 8%" },
          minHeight: 'calc(100vh - 336px)'
        }
      },
      {
        props: { variant: 'contained' },
        style: {
          margin: { xs: "0 24px", md: "0 8%" },
          maxWidth:"100%"
        }
        },
        {
          props: { variant: 'imageLess' },
          style: {
            maxWidth: "100%",
            marginTop:'130px'
          }
        }
      ]
    },
    MuiTypography: {
      variants: [{
        props: { variant: "p" },
        style: {
          fontFamily: openSans.style.fontFamily,
          fontSize: '16px',
          lineHeight: '26px',
          color: primary.main,
        }
      },
      {
        props: { variant: "blockquote" },
        style: {
          fontFamily: openSans.style.fontFamily,
          fontStyle: 'italic',
          fontSize: '32px',
          lineHeight: '41px',
          color: primary.main,
        }
        },
        {
        props: { variant: "logo" },
        style: {
          fontFamily: cormorantGaramond.style.fontFamily,
          fontWeight: '700',
          fontSize: '32px',
          lineHeight: '39px',
          color: primary.main,
        }
      },]
    },
    MuiButton: {
      variants: [{
        props: { variant: 'primaryButton' },
        style: {
          fontFamily: openSans.style.fontFamily,
          width: '155px',
          height: '55px',
          background: primary.main,
          color: secondary.main,
          borderRadius: '0',
          border: `1px solid ${primary.main}`,
          '&:hover': {
            background: '#00000000',
            color: primary.main,
          }
        }
      },
      {
        props: { variant: 'secondaryButton' },
        style: {
          fontFamily: openSans.style.fontFamily,
          width: '155px',
          height: '55px',
          background: secondary.main,
          color: primary.main,
          borderRadius: '0',
          '&:hover': {
            background: primary.main,
            color: secondary.main,
          }
        }
        },
        {
          props: { variant: 'cancel' },
          style: {
            fontFamily: openSans.style.fontFamily,
            width: '48%',
            height: '45px',
            background: secondary.main,
            color: primary.main,
            borderRadius: '0',
            border: `1px solid ${secondary.main}`,
            '&:hover': {
              background: primary.main,
              color: secondary.main,
            }
          }
        },
        {
          props: { variant: 'yes' },
          style: {
            fontFamily: openSans.style.fontFamily,
            width: '48%',
            height: '45px',
            color: secondary.main,
            border: `1px solid ${secondary.main}`,
            borderRadius: '0',
            '&:hover': {
              background: secondary.main,
              color: primary.main,
            }
          }
        },
        {
          props: { variant: 'linkAlike' },
          style: {
            fontFamily: openSans.style.fontFamily,
            fontSize: "12px",
            fontWeight: '300',
            width: '40px',
            height: '25px',
            color: primary.main,
            border: `1px solid ${primary.main}`,
            borderRadius: '0',
            '&:hover': {
              background: primary.main,
              color: secondary.main,
              fontWeight: '400'
            }
          }
        },
        {
          props: { variant: 'linkAlikeBlack' },
          style: {
            fontFamily: openSans.style.fontFamily,
            fontSize: "12px",
            fontWeight: '300',
            width: '40px',
            height: '25px',
            color: secondary.main,
            border: `1px solid ${primary.main}`,
            borderRadius: '0',
            background: primary.main,
            '&:hover': {
              background: 'transparent',
              color: primary.main,
              fontWeight: '400'
            }
          }
        },
      ],
    }
  }
});

console.log("CREATE THENE", createTheme())