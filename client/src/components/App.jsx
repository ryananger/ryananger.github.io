import React, {useEffect, useState} from 'react';

import '../styles/style.css';
import st from 'ryscott-st';

import Web from './Web.jsx';
import Art from './Art.jsx';
import NavBar from './NavBar.jsx';
import ContactButtons from './ContactButtons.jsx';

const mode = window.innerWidth < 540 ? 'phone' : (window.innerWidth > window.innerHeight ? 'landscape' : 'portrait');

const App = function() {
  const [view, setView] = st.newState('view', useState('web'));

  const views = {
    web: <Web />,
    art: <Art />
  };

  if (mode !== 'landscape') {
    return (
      <div id='app' className='app v'>
        <div className='notSupported v'>
          <img
            className='logo hidden'
            src={'https://ryananger.github.io/public/rycreates.png'}
            onLoad={(e)=>{e.target.className = 'logo visible'}}
          />
          <ContactButtons />
          This device is not yet supported. Please view on desktop.
        </div>
      </div>
    );
  }

  return (
    <div id='app' className='app h'>
      <NavBar />
      <div className='main'>
        {views[view]}
      </div>
    </div>
  );
};

export default App;

