import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import './App.scss';
import CssBaseline from '@mui/material/CssBaseline'
import { theme } from './theme';
import Header from './components/organisms/Header/Header';
import Menu from './components/organisms/Menu/Menu';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <div className='App'>
        <Header/>
        <Menu/>
      </div>
    </ThemeProvider>
  );
}

export default App;
