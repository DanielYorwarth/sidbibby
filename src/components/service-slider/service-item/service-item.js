import React from 'react';
import {Link} from 'gatsby';
import BackgroundImage from 'gatsby-background-image'

import './service-item.style.scss';

const ServiceItem = ({title, link, image}) => (
  <div className="service-item__wrapper overflow-hidden">
  
    <Link to={link}>
      <BackgroundImage
        Tag="div"
        fluid={image}
        className="service-item  text-white"
      >
        <div className="flex flex-wrap flex-col items-center justify-end relative z-10 text-white h-full pb-12 text-center">
          <div className="service-item__text relative overflow-hidden">
            <h3 className="font-black text-2xl px-8">{title}</h3>
          </div>
        </div>
        <div className="service-item__overlay inset-0 absolute opacity-50 bg-primary-darker" />
      </BackgroundImage>
    </Link>
  </div>
);

export default ServiceItem;
