import { Typography, useTheme } from '@mui/material';
import React from 'react';

export interface ImageItemDetailsProps {
  title: string;
  subtitle?: string;
  description?: string;
}

const ImageItemDetails = (props: ImageItemDetailsProps) => {

  const {
    title,
    subtitle,
    description,
  } = props;

  const theme = useTheme();

  return (
    <div className='item-text-content'>
      <Typography variant='h4' sx={{fontWeight: theme.typography.h4}}>{title}</Typography>
      <Typography variant='subtitle1'>{subtitle}</Typography>
      <Typography variant='body2' sx={{fontWeight: theme.typography.body2, marginRight: theme.typography.body2}}>{description}</Typography>
    </div>
  )
}

export default ImageItemDetails;