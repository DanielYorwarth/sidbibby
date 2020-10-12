import React from 'react';
import {Link} from 'gatsby';

const MenuItem = ({text, to}) => (
  <Link activeClassName="bg-secondary" className="block bg-primary text-white font-extrabold py-4 px-6 mb-1 text-lg duration-300 hover:bg-primary-dark" to={to}>
    {text}
  </Link>
);

export default MenuItem