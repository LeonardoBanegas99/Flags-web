import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles/createPalette' {
  //interface PaletteCustomColor {

  //}

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

const black = "#231F20";
const darkGrey = "#4F4D5A";
const orange = "#D88F29";
const yellow = "#F1C32F";
const mustard = "#DAA628";
const pink = "#F0C0AD";
const white = "#F3F4F5";

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
  }
});


/**
 black: { 
      main: '#231F20',
    },
    darkGrey: { 
      main: '#4F4D5A',
    },
    orange: { 
      main: '#D88F29',
    },
    yellow: { 
      main: '#F1C32F',
    },
    mustard: { 
      main: '#DAA628',
    },
    pink: { 
      main: '#F0C0AD',
    },
    white: { 
      main: '#F3F4F5',
    },


    [
      {black: '#231F20'},
      {darkGrey: '#4F4D5A'},
      {orange: '#D88F29'},
      {yellow: '#F1C32F'},
      {mustard: '#DAA628'},
      {pink: '#F0C0AD'},
      {white: '#F3F4F5'},
    ]


 */