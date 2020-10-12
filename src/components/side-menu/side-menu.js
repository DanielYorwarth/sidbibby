import React from 'react';

import MenuItem from './menu-item';

const SideMenu = ({menuItems}) => (
  <div>
    {menuItems && menuItems.map((item, i) => (
      <MenuItem key={i} {...item}/>
    ))}
  </div>
);

export default SideMenu;