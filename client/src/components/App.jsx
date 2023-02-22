import React, {useEffect, useState} from 'react';
import {FaFacebookSquare as FB,
        FaInstagram as Insta} from 'react-icons/fa';
import {AiFillPhone as Phone} from 'react-icons/ai';

import '../styles/style.css';
import st            from 'ryscott-st';
import {ax, helpers} from 'util';

import Alert from './Alert.jsx';
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
            src={'http://localhost:4001/public/rycreates.png'}
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
      <Alert />
      <NavBar />
      <div className='main'>
        {views[view]}
      </div>
    </div>
  );
};

export default App;

