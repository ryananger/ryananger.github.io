import React, {lazy, useEffect, useState, useRef} from 'react';

import 'styles';
import st from 'ryscott-st';

import SmoothImage from './SmoothImage.jsx';
import Lazy from './Lazy.jsx';


const Slide = function({dir, time, delay, children}) {
  const start = {
    position: 'absolute',
    left: dir === 'left' ? '150vw' : '-150vw',
    transition: time ? `left ${time + 's'}` : '1s'
  };

  const [style, setStyle] = useState(start);
  const [done, setDone] = useState(false);
  const timeout = 500 + (delay * 1000) || 500;

  useEffect(()=>{
    setTimeout(()=>{
      setStyle({...style, left: 0});

      setTimeout(()=>{setDone(true)}, time * 1000 || 1000);
    }, timeout);
  }, []);

  if (done) {return children};

  return (
    <div className='slide v' style={style}>
      {children}
    </div>
  );
};

export default Slide;

