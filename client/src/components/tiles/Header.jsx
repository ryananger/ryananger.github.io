import React, {lazy, useEffect, useState} from 'react';

import 'styles';
import Slide from '../Slide.jsx';

const Header = function() {
  return (
    <Slide dir={'left'} time={0.5}>
      <div className='h' style={{justifyContent: 'flex-start', alignItems: 'baseline', width: '100%'}}>
        <h2>earthpunk</h2>&emsp;
        <small>finding natural solutions in technology and design</small>
      </div>
    </Slide>
   );
};

export default Header;

