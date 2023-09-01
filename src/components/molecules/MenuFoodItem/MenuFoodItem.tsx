import { Grid, GridSize } from '@mui/material';
import React from 'react';
import ImageGridItem from '../../atoms/ImageGridItem/ImageGridItem';
import ImageItemDetails from '../../atoms/ImageItemDetails/ImageItemDetails';
import './MenuFoodItem.scss'

export interface MenuFoodItemProps {
  src: string;
  title: string;
  subtitle?: string;
  description?: string;
  sm: GridSize;
  md: GridSize;
  lg: GridSize;
  xl: GridSize;
  index: number;
  flag?: string;
}

const MenuFoodItem = (props: MenuFoodItemProps) => {

  const {
    src,
    title,
    subtitle,
    description,
    sm,
    md,
    lg,
    xl,
    index,
    flag,
  } = props;

  const renderImage = () => {
    return (
      <ImageGridItem src={src} index={index} flag={flag}/>
    );
  }

  const renderDetails = () => {
    return (
      <ImageItemDetails title={title} subtitle={subtitle} description={description} index={index}/>
    );
  }

  return (
    <Grid item className='menu-food-item' key={`menu-food-item-${index}`} sm={sm} md={md} lg={lg} xl={xl}>
      <Grid container className='content' justifyContent='center'>
        {index % 2 === 0 ?
          <>
            {renderImage()}
            {renderDetails()}
          </>
          :
          <>
            {renderDetails()}
            {renderImage()}
          </>
        }
      </Grid>
    </Grid>
  )
}

export default MenuFoodItem;