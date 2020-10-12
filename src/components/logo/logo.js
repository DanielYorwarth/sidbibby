import React from 'react';
import { Link } from 'gatsby';

import logo from '../../images/logo.svg';
import './logo.style.scss';

const Logo = ({classes}) => (
  <div className="flex flex-wrap md:mb-5 xl:mb-0 xl:mr-4">
    <Link className="" to={`/`}>
      <img src={logo} className={classes} alt="SidBibby Logo"/>
    </Link>
  </div>
)

export default Logo;