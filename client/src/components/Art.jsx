import React, {useEffect, useState} from 'react';

import '../styles/art.css';
import st            from 'ryscott-st';
import {ax, helpers} from 'util';

const Art = function() {
  const [zoom, setZoom] = useState(null);
  const [mod, setMod]   = useState('hidden');

  var renderImages = function(section) {
    var images = [];
    var folder = section + '/';

    imageNames[section].map(function(name, i) {
      var source = 'https://ryananger.github.io/public/images/thumbs/' + folder + name + '.jpg';

      images.push(
        <div key={i} className='imageContainer v'>
          <img
            className='imageThumb hidden'
            src={source}
            onClick={()=>{setZoom({section: section, index: i})}}
            onLoad={(e)=>{e.target.className = 'imageThumb visible'}}
            loading='lazy'
          />
        </div>
      )
    })

    return images;
  };

  var zoomModal = function() {
    return (
      <div className='zoomModal v'>
        <img
          className='zoomImage hidden'
          src={`https://ryananger.github.io/public/images/${zoom.section}/${imageNames[zoom.section][zoom.index]}.png`}
          onClick={()=>{setZoom(null)}}
          onLoad={(e)=>{e.target.className = 'zoomImage visible'}}
          loading='lazy'
        />
      </div>
    )
  };

  useEffect(()=>{setMod('hidden')}, [zoom]);

  return (
    <div className='artViewer v'>
      <div className='artSection v'>
        <h3 className='artLabel'>ILLUSTRATION</h3>
        <div className='imageViewer h'>
          {renderImages('illustration')}
        </div>
      </div>
      <div className='artSection v'>
        <h3 className='artLabel'>TATTOO</h3>
        <div className='imageViewer h'>
          {renderImages('tattoo')}
        </div>
      </div>
      <div className='artSection v'>
        <h3 className='artLabel'>MANDALA</h3>
        <div className='imageViewer h'>
          {renderImages('mandala')}
        </div>
      </div>
      {zoom && zoomModal()}
    </div>
  );
};

const imageNames = {
  mandala: [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9'
  ],
  illustration: [
    'last_supper',
    'garden_future',
    'genie',
    'watcher',
    'furball'
  ],
  tattoo: [
    '0flash',
    'astro',
    'bee',
    'crow',
    'lock',
    'lotus',
    'piano',
    'self',
    'storm_eye',
    'trek'
  ]
};

export default Art;

