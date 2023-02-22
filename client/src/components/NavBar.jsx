import React, {useState, useEffect} from 'react';

import '../styles/nav.css';
import st from 'ryscott-st';

import ContactButtons from './ContactButtons.jsx';

const NavBar = function() {
  const view    = st.view;
  const setView = st.setView;

  var checkView = function(str) {
    return view === str ? ' active' : '';
  };

  return (
    <div className='nav v'>
      <img className='logo hidden' src={'https://ryananger.github.io/public/rycreates.png'} onLoad={(e)=>{e.target.className = 'logo visible'}}/>
      <h2 className={'navButton' + checkView('web')} onClick={()=>{setView('web')}}>web</h2>
      <h2 className={'navButton' + checkView('art')} onClick={()=>{setView('art')}}>art</h2><br/><br/>
      <div style={{textAlign: 'center', width: '200px', fontSize: '1.8vh'}}>
        Hi, I'm Ry, and I create.
      </div>
      <br/><br/>
      <ContactButtons />
    </div>
  )
};

export default NavBar;