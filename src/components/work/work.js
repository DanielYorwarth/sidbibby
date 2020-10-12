import React from 'react';
import Img from "gatsby-image";

import './work.style.scss';

const Work = ({tag, title, image}) => {
  let tagColor 
  switch (tag) {
    case 'domestic':
      tagColor = 'bg-primary'
      break;
    case 'commercial':
      tagColor = 'bg-secondary'
      break;
    default:
      break;
  }
  return (
    <div className="work__wrapper relative">
      <div className={`work__tag ${tagColor} absolute z-10 text-white font-bold text-xs p-2`}>
        {tag.toUpperCase()}
      </div>
      <Img className="work w-full" fluid={image} />
      {title && (
        <div className="work__text absolute bottom-0 z-10 bg-white text-primary-darker font-black py-2 px-4 max-w-md text-center">
          {title}
        </div>
      )}
    </div>
  );
}
export default Work;

