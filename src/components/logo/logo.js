import React from 'react';
import { Link } from 'gatsby';

import logo from '../../images/logo.svg';
import './logo.style.scss';

const Logo = ({classes}) => (
  <div className="flex flex-wrap xl:mr-4">
    <Link className="" to={`/`}>
      <img src={logo} className={`${classes} h-12`} alt="SidBibby Logo"/>
    </Link>
  </div>
)

export default Logo;