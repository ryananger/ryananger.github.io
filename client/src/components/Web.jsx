import React, {useEffect, useState} from 'react';

import '../styles/web.css';
import st            from 'ryscott-st';
import {ax, helpers} from 'util';

const Web = function() {
  const [project, setProject] = useState('toast');
  const [mod, setMod] = useState('hidden');

  const projects = {
    toast: (
      <iframe
        className={'webView ' + mod}
        src='https://ryananger.github.io/toast'
        onLoad={()=>{setMod('visible')}}
      />
    ),
    jupiterFalls: (
      <iframe
        className={'jupiterFallsView ' + mod}
        src="https://www.youtube.com/embed/XjiPB2ffzPI"
        title="Jupiter Falls"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
        onLoad={()=>{setMod('visible')}}
      />
    ),
    artBoard: (
      <iframe
        className={'webView ' + mod}
        src="https://www.youtube.com/embed/dQ_3OX2dcwE"
        title="artBoard"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
        onLoad={()=>{setMod('visible')}}
      />
    ),
    foodDRIVEN: (
      <iframe
        className={'webView ' + mod}
        src="https://www.youtube.com/embed/GGUM1D9eFb8"
        title="artBoard"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
        onLoad={()=>{setMod('visible')}}
      />
    )
  };

  var handleClick = function(name) {
    setMod('hidden');
    setProject(name);
  };

  var checkView = function(str) {
    return project === str ? ' active' : '';
  };

  return (
    <div className='webViewer v'>
      <div className='webButtons h'>
        <div className='h' style={{alignItems: 'baseline'}}>
          <h3 className={'navButton' + checkView('toast')} onClick={()=>{handleClick('toast')}}>TOAST</h3>
          <small>restaurant.front-end</small>
        </div>
        <div className='h' style={{alignItems: 'baseline'}}>
          <h3 className={'navButton' + checkView('jupiterFalls')} onClick={()=>{handleClick('jupiterFalls')}}>Jupiter Falls</h3>
          <small>mobile game</small>
        </div>
        <div className='h' style={{alignItems: 'baseline'}}>
          <h3 className={'navButton' + checkView('artBoard')} onClick={()=>{handleClick('artBoard')}}>artBoard</h3>
          <small>uxui.database.authentication</small>
        </div>
        <div className='h' style={{alignItems: 'baseline'}}>
          <h3 className={'navButton' + checkView('foodDRIVEN')} onClick={()=>{handleClick('foodDRIVEN')}}>foodDRIVEN</h3>
          <small>uxui.database interface</small>
        </div>
      </div>
      {projects[project]}
    </div>
  )
};

export default Web;

