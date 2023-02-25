import React, {useEffect, useState} from 'react';

import st from 'ryscott-st';

const Web = function() {
  const [project, setProject] = useState(null);
  const [mod, setMod] = useState('hidden');

  const projects = {
    toast: (
      <iframe
        className={'webView ' + mod}
        src='https://ryananger.github.io/toast'
        title='TOAST'
        onLoad={()=>{setMod('visible')}}
      />
    ),
    jupiterFalls: (
      <iframe
        className={'jupiterFallsView ' + mod}
        src="https://www.youtube.com/embed/XjiPB2ffzPI"
        title="Jupiter Falls"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        onLoad={()=>{setMod('visible')}}
      />
    ),
    artBoard: (
      <iframe
        className={'webView ' + mod}
        src="https://www.youtube.com/embed/dQ_3OX2dcwE"
        title="artBoard"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        onLoad={()=>{setMod('visible')}}
      />
    ),
    foodDRIVEN: (
      <iframe
        className={'webView ' + mod}
        src="https://www.youtube.com/embed/GGUM1D9eFb8"
        title="artBoard"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        onLoad={()=>{setMod('visible')}}
      />
    )
  };

  var button = function(name, value, info) {
    return (
      <div className='h' style={{alignItems: 'baseline'}}>
        <h3 className={'navButton' + checkView(name)} onClick={()=>{handleClick(name)}}>{value}</h3>
        <small>{info}</small>
      </div>
    )
  };

  var handleClick = function(name) {
    setMod('hidden');
    setProject(name);
  };

  var checkView = function(str) {
    return project === str ? ' active' : '';
  };

  useEffect(()=>{
    setProject('toast');
  }, []);

  return (
    <div className='webViewer full v'>
      <div className='webButtons h'>
        {button('toast', 'TOAST', 'restaurant.front-end')}
        {button('jupiterFalls', 'Jupiter Falls', 'mobile game')}
        {button('artBoard', 'artBoard', 'uxui.database.authentication')}
        {button('foodDRIVEN', 'foodDRIVEN', 'uxui.databse interface')}
      </div>
      {projects[project]}
    </div>
  )
};

export default Web;

