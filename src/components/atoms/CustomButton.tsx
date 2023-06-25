import React from 'react';
import { useTheme } from '@mui/material/styles';

const CustomButton = () => {

  const theme = useTheme();

  console.log(theme.palette,"theme");

  return (
    <div>
      {theme.typography.fontFamily}
    </div>
  )
}

export default CustomButton;