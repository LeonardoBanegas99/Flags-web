import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles/createPalette' {


  interface CommonColors {
    black: string;
    darkGrey: string;
    orange: string;
    yellow: string;
    mustard: string;
    pink: string;
    white: string;
  }
}

const black = `#231F20`;
const darkGrey = `#4F4D5A`;
const orange = `#D88F29`;
const yellow = `#F1C32F`;
const mustard = `#DAA628`;
const pink = `#F0C0AD`;
const white = `#F3F4F5`;

export const theme = createTheme({
  palette: {
    common: {
      black,
      darkGrey,
      orange,
      yellow,
      mustard,
      pink,
      white
    }
  },
  typography: {
    fontFamily: "'Raleway', 'sans-serif'",
    subtitle1: {
      color: white,
    },
    h4: {
      fontWeight: 600,
      color: white,
    },
    body2: {
      fontWeight: 600,
      //marginRight: '20px',
      color: white,
    }
  }
});
