import React, {lazy, useEffect, useState} from 'react';

import 'styles';
import st from 'ryscott-st';

import Web from './Web.jsx';
import ContactButtons from './ContactButtons.jsx';
import SmoothImage from './SmoothImage.jsx';
import Lazy from './Lazy.jsx';

const NavBar = lazy(()=>import('./NavBar.jsx'));
const Art    = lazy(()=>import('./Art.jsx'));

st.logoSrc = 'https://ryananger.github.io/public/rycreates.webp';

const mode = window.innerWidth < 540 ? 'phone' : (window.innerWidth > window.innerHeight ? 'landscape' : 'portrait');

const App = function() {
  const [view, setView] = st.newState('view', useState('web'));

  const views = {
    web: <Web />,
    art: <Lazy Component={Art}/>
  };

  if (mode !== 'landscape') {
    return (
      <div id='app' className='app v'>
        <div className='notSupported v'>
          <SmoothImage className='logo' src={st.logoSrc}/>
          <ContactButtons />
          This device is not yet supported. Please view on desktop.
        </div>
      </div>
    );
  }

  return (
    <div id='app' className='app h'>
      <Lazy Component={NavBar} fallback={<div className='nav v'/>}/>
      <div className='main'>
        {views[view]}
      </div>
    </div>
  );
};

export default App;

