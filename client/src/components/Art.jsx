import React, {useEffect, useState} from 'react';

import st from 'ryscott-st';

import SmoothImage from './SmoothImage.jsx';

const Art = function() {
  const [zoom, setZoom] = useState(null);
  const [mod, setMod]   = useState('hidden');

  var renderImages = function(section) {
    var images = [];
    var folder = section + '/';

    imageNames[section].map(function(name, i) {
      var source = 'https://ryananger.github.io/public/images/thumbs/' + folder + name + '.webp';

      images.push(
        <div key={i} className='imageContainer v'>
          <SmoothImage
            className='imageThumb'
            src={source}
            onClick={()=>{setZoom({section: section, index: i})}}
            transition='height 0.5s, top 0.5s'
          />
        </div>
      )
    })

    return images;
  };

  var zoomModal = function() {
    var source = `https://ryananger.github.io/public/images/${zoom.section}/${imageNames[zoom.section][zoom.index]}.webp`;

    return (
      <div className='zoomModal v'>
        <SmoothImage className='zoomImage' src={source} onClick={()=>{setZoom(null)}}/>
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
        <h3 className='artLabel'>DESIGN</h3>
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

