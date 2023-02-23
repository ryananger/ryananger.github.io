import React, {useState, useEffect} from 'react';

import st from 'ryscott-st';

import ContactButtons from './ContactButtons.jsx';
import SmoothImage from './SmoothImage.jsx';

const NavBar = function() {
  const view    = st.view;
  const setView = st.setView;

  var checkView = function(str) {
    return view === str ? ' active' : '';
  };

  return (
    <div className='nav v' style={{alignItems: 'center'}}>
      <SmoothImage className='logo' src={st.logoSrc}/>
      <h2 className={'navButton' + checkView('web')} onClick={()=>{setView('web')}}>web</h2>
      <h2 className={'navButton' + checkView('art')} onClick={()=>{setView('art')}}>art</h2><br/><br/>
      <div style={{textAlign: 'center', width: '200px', fontSize: '1.8vh'}}>
        Hi, I'm Ry, and I create.
      </div>
      <br/><br/>
      <div className='v'>
        <ContactButtons />
        <small style={{marginTop: '1vh'}}>ryan.anger.314@gmail.com</small>
        <small>734.530.7883</small>
      </div>
    </div>
  )
};

export default NavBar;