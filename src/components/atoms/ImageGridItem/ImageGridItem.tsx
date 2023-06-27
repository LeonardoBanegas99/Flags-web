import React from 'react';

export interface ImageGridItemProps {
  src: string;
}

const ImageGridItem = (props : ImageGridItemProps) => {

  const {
    src,
  } = props;


  return (
    <img src={src}/>
  )
}

export default ImageGridItem;