import { Grid, Typography, useTheme } from '@mui/material';
import React from 'react';

export interface ImageItemDetailsProps {
  title: string;
  subtitle?: string;
  description?: string;
  index: number;
}

const ImageItemDetails = (props: ImageItemDetailsProps) => {

  const {
    title,
    subtitle,
    description,
    index
  } = props;

  const theme = useTheme();

  const style = index % 2 === 0 ? {marginLeft : '15px'} : {marginRight : '15px'};

  return (
    <Grid item md={5} className='item-text-content' sx={style}>
      <div className='title-n-price-container'>
        <Typography variant='h4' sx={{ fontWeight: theme.typography.h4 }}>{title}</Typography>
        <div className='price-container'>
          <div className='line'> </div>
          <Typography variant='subtitle1' className='price'>{subtitle}</Typography>
        </div>
      </div>
      <Typography variant='body2' sx={{ fontWeight: theme.typography.body2, marginRight: theme.typography.body2 }}>{description}</Typography>
    </Grid>
  )
}

export default ImageItemDetails;