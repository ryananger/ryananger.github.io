import React, {lazy, useEffect, useState} from 'react';

import 'styles';

const MainTile = function({float, center}) {
  const [mod, setMod] = useState('closed');

  useEffect(()=>{
    setTimeout(()=>{
      setMod('open');
    }, 500);

  }, []);

  return (
    <div className={`mainTile tile ${mod} h`}>
      {float && (
        <div className='tileFloat v'>
          {float}
        </div>
      )}
      {center && (
        <div className='tileCenter v'>
          {center}
        </div>
      )}
    </div>
  );
};

export default MainTile;

