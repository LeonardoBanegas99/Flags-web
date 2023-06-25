import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import './App.scss';
import CssBaseline from '@mui/material/CssBaseline'
import { theme } from './theme';
import Header from './components/atoms/Header/Header';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <div className='App'>
        <Header/>
      </div>
    </ThemeProvider>
  );
}

export default App;
