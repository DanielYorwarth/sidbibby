import React from 'react';

import Heading from '../heading/heading';

const Logos = ({logos, title, text}) => (
  <div className="max-w-screen-2xl mx-auto px-4 md:px-8 mb-16 md:mb-24">
  {title && 
    <Heading 
      className="mb-5"
      title={title}
      text={text ? text : null}
   />
  }
  {logos && (
    <div className="flex flex-wrap items-center justify-between">
      {logos.map((logo, i) => (
        <img key={i} className="px-2" src={logo} alt={`logo${i}`} />
      ))}
    </div>
  )}
</div>
); 

export default Logos;