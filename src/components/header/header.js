import React from 'react';

import HamburgerMenu from '../burger-menu/burger-menu';
import NavMenu from '../nav-menu/nav-menu';
import Logo from '../logo/logo';
import ConactInfoBlock from '../contact-info-block/contact-info-block';

const Header = ({setToggleNav, toggleNav, menuLinks}) => (
  <header className="header relative flex flex-wrap">
    <div className="flex flex-wrap xl:flex-no-wrap flex-1 justify-between items-center px-2 md:px-6 py-3">
      <Logo classes="header__logo w-56 lg:w-auto -mt-2" />
      <NavMenu menu={menuLinks}/>
      <HamburgerMenu setToggleNav={setToggleNav} toggleNav={toggleNav}/>
    </div>
    <div className="contact-info">
      <ConactInfoBlock phone="01353 777 909" email="info@sidbibby.co.uk" />
    </div>
  </header>
);

export default Header;