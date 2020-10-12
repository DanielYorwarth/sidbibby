import React from 'react';

import './burger-menu.style.scss';

const HamburgerMenu = ({setToggleNav, toggleNav}) => {
  return(
    <button
      className="block md:hidden p-2"
      href={`#`}
      onClick={() => setToggleNav(!toggleNav)}
    >
      <div
        className="hamburger hamburger--collapse"
        aria-label="Menu"
        role="button"
        aria-controls="navigation"
      >
        <div className="hamburger-box">
          <div className="hamburger-inner" />
        </div>
      </div>
    </button>
  )
};

export default HamburgerMenu;
