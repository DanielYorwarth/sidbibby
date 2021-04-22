import React from 'react';
import { Link } from "gatsby";

import './nav-menu.style.scss';

const NavMenu = ({menu}) => {
  return (
    <nav id="swup" className="site-head-right uppercase flex flex-col md:block md:mt-1">
      {menu && <div className="flex flex-col md:flex-row flex-wrap leading-none" role="menu">
        {menu.map((menuItem, i) => (
          <div key={i} className="relative nav-item__wrapper md:py-4">
            <div className="nav-item" role="menuitem">
              <Link activeClassName="md:font-semibold opacity-100" className={`${menu.length -1 === i ? 'md:pl-2' : 'md:px-2'} ${ i < 3 ? 'text-3xl font-semibold mb-2' : 'text-xl font-light mb-2'} ${ i === 3 && 'mt-4' } md:mt-0 md:mb-0 md:text-xs lg:text-sm xl:text-base xl:pr-5 xl:pl-5 md:font-normal opacity-75 block`} to={menuItem.link}>
                <span className="block">{menuItem.title}</span>
              </Link>
            </div>
            {menuItem.sub && 
            <div className="nav-item__sub p-4 bg-primary text-white absolute z-10">
              {menuItem.sub.map((item, i) => (
                <div key={i} className="mb-4">
                  <Link activeClassName="md:font-bold opacity-100" className="opacity-75 hover:opacity-100 duration-300" to={`${menuItem.link}${item.to}`}>
                   {item.title}
                  </Link>
                </div>
              ))}
            </div>
            }
          </div>
        ))}
      </div>}
    </nav>
  )
};

export default NavMenu;