import React, {useState, useEffect} from 'react';

import st from 'ryscott-st';

import ContactButtons from './ContactButtons.jsx';
import SmoothImage from './SmoothImage.jsx';

const ContactInfo = function() {
  return (
    <div className='contactInfo h'>
      <ContactButtons />
    </div>
  )
};

export default ContactInfo;