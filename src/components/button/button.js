import React from 'react';
import {Link} from 'gatsby';

import './button.style.scss';

const Button = ({text, link, internal}) => {
  const classes = "custom-button bg-secondary py-4 px-8 text-white font-bold rounded-full relative z-10 inline-block"

  return (
    <div className="custom-button__wrapper">
      {internal ? 
        <Link className={classes} to={link}>
          <span className="relative z-10">{text}</span>
        </Link>
        :
        <a className={classes} href={link}>
          <span className="relative z-10">{text}</span>
        </a>
      }
    </div>
  )
};

export default Button;