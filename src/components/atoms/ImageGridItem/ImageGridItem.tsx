import { Grid } from '@mui/material';
import React from 'react';
import { useSpring, animated } from 'react-spring';

export interface ImageGridItemProps {
  src: string;
  index: number;
  flag?: string;
}

const ImageGridItem = (props: ImageGridItemProps) => {

  const {
    src,
    index,
    flag,
  } = props;

  const stuff = {
    from: { transform: "translateY(0px)" },
    to: [{ transform: "translateY(8px)" }, { transform: "translateY(0px)" }],
    //config: { duration: "1000" },
    config: { duration: 2000},
    loop: true
  };

  const springProps = useSpring(stuff);

  /**
  const transitions = useTransition(show, null, {
    from: { opacity: 0, maxHeight: "0px" },
    enter: { opacity: 1, maxHeight: "600px" },
    leave: { opacity: 0, maxHeight: "0px" }
  });
   */

  const isEven = index % 2 === 0;
  const style = isEven ? { marginRight: '15px' } : { marginLeft: '15px' };


  return (
    <>
      <Grid item md={6} className='image-item'>
        <animated.div style={springProps}>
          <img className='food-image' src={src} style={style} />
          <img className={`flag-image ${isEven ? 'even' : 'odd'}`} src={flag} />
        </animated.div>

      </Grid>
    </>
  )
}

export default ImageGridItem;