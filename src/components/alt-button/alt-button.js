import React from 'react';
import {Link} from 'gatsby';

import './alt-button.style.scss';

const AltButton = ({text, link, internal, color}) => {
  const classes = "alt-button py-3 font-bold relative z-10 flex duration-300"

  return (
    <div className="alt-button__wrapper">
      {internal ? 
        <Link style={{color}} className={classes} to={link}>
          <span className="relative z-10 block pr-4">{text}</span>
          <svg className="alt-button__icon duration-300" xmlns="http://www.w3.org/2000/svg" width="25.333" height="17.813" viewBox="0 0 25.333 17.813">
            <path id="next" d="M17.059,4.942a.9.9,0,1,0-1.277,1.264l6.474,6.474H.894A.889.889,0,0,0,0,13.574a.9.9,0,0,0,.894.907H22.256l-6.474,6.462a.917.917,0,0,0,0,1.277.894.894,0,0,0,1.277,0l8.006-8.006a.879.879,0,0,0,0-1.264Z" transform="translate(0 -4.674)" fill={color}/>
          </svg>
          <div style={{backgroundColor: color}}  className="alt-button__line absolute w-full h-1 bottom-0 duration-300" />
        </Link>
        :
        <a style={{color}} className={classes} target="_blank" href={link}>
          <span className="relative z-10 block pr-4">{text}</span>
          <svg className="alt-button__icon duration-300" xmlns="http://www.w3.org/2000/svg" width="25.333" height="17.813" viewBox="0 0 25.333 17.813">
            <path id="next" d="M17.059,4.942a.9.9,0,1,0-1.277,1.264l6.474,6.474H.894A.889.889,0,0,0,0,13.574a.9.9,0,0,0,.894.907H22.256l-6.474,6.462a.917.917,0,0,0,0,1.277.894.894,0,0,0,1.277,0l8.006-8.006a.879.879,0,0,0,0-1.264Z" transform="translate(0 -4.674)" fill={color}/>
          </svg>
          <div style={{backgroundColor: color}}  className="alt-button__line absolute w-full h-1 bottom-0 duration-300" />
        </a>
      }
    </div>
  )
};

export default AltButton;