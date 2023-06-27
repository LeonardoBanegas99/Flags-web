import React from 'react';
import honduras from '../../../assets/honduras.jpg';
import yellowLogo from '../../../assets/flags-logo-yellow.png';
import { useTheme } from '@mui/material/styles';

const Header = () => {

  const theme = useTheme();

  return (
    <div className='header'>
      <div className='content'>
        <img src={honduras} />
        <section className='header-logo'>
          <img src={yellowLogo}/>
        </section>
      </div>
    </div>
  )
}

export default Header;