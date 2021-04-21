import React from 'react';
import { Link } from "gatsby";

const FooterMenu = ({menu}) => {
  return (
    <nav className="uppercase flex flex-col md:block mb-4">
      {menu && <div className="flex flex-col md:flex-row flex-wrap leading-none lg:justify-end">
        {menu.map((menuItem, i) => (
          <div key={i} className="">
            <Link activeClassName="font-bold opacity-100" className={`${0 === i ? 'pl-0' : 'md:pl-5 xl:pl-10'} hover:opacity-75 duration-300 md:text-base block mb-4`} to={menuItem.link}>
              <span className="block">{menuItem.title}</span>
            </Link>
          </div>
        ))}
      </div>}
    </nav>
  )
};

export default FooterMenu;