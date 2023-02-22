import React from 'react';
import {IoLogoLinkedin as LinkedIn,
        IoLogoGithub   as GitHub} from 'react-icons/io';
import {HiDocumentText as Resume} from 'react-icons/hi';

const ContactButtons = function() {
  return (
    <div className='contactButtons h'>
      <LinkedIn className='contactButton' size={40} onClick={()=>{window.open('https://www.linkedin.com/in/ryscott89/', '_blank')}}/>
      <GitHub   className='contactButton' size={38} onClick={()=>{window.open('https://github.com/ryananger', '_blank')}}/>
      <Resume   className='contactButton' size={40} onClick={()=>{window.open('https://docs.google.com/document/d/1IPqpl7-mlfBT8mdvCxSqdyoSIJqduUxeeRUuEle7KH8/edit?usp=sharing', '_blank')}}/>
    </div>
  )
};

export default ContactButtons;