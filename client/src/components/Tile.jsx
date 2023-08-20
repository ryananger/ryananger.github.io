import React, {lazy, useEffect, useState} from 'react';

import 'styles';
import st from 'ryscott-st';

import SmoothImage from './SmoothImage.jsx';
import Lazy from './Lazy.jsx';

const Tile = function({bg, color, height, float, left, center, right, open}) {
  const start = {
    height: open ? '2svh' : `${height}svh`,
    backgroundColor: `var(--${bg})`,
    color: `var(--${color})` || undefined,
    transition: 'height 1s'
  };

  const [style, setStyle] = useState(start);

  useEffect(()=>{
    setTimeout(()=>{
      setStyle({...style, height: `${height}svh`});
    }, 500);

  }, []);

  return (
    <div className='tile h' style={style}>
      {float && (
        <div className='tileFloat v'>
          {float}
        </div>
      )}
      {left && (
        <div className='tileLeft v'>
          {left}
        </div>
      )}
      {center && (
        <div className='tileCenter v'>
          {center}
        </div>
      )}
      {right && (
        <div className='tileRight v'>
          {right}
        </div>
      )}
    </div>
  );
};

export default Tile;

