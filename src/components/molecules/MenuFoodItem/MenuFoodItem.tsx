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
  key: number;
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
    key
  } = props;

  return (
    <Grid item className='menu-food-item' key={`menu-food-item-${key}`} sm={sm} md={md} lg={lg} xl={xl}>
      <div className='content'>
        <ImageGridItem src={src} />
        <ImageItemDetails title={title} subtitle={subtitle} description={description} />
      </div>
    </Grid>
  )
}

export default MenuFoodItem;