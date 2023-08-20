import React, {lazy, useEffect, useState} from 'react';

import 'styles';
import Slide from '../Slide.jsx';

const Header = function() {
  return (
    <div className='h' style={{justifyContent: 'flex-start', alignItems: 'baseline', width: '100%'}}>
      <h2>earthpunk</h2>&emsp;
      <small>finding natural solutions in technology and design</small>
    </div>
   );
};

export default Header;

