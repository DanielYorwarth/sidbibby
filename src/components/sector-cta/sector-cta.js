import React from 'react';
import {Link} from 'gatsby';
import BackgroundImage from 'gatsby-background-image'

import AltButton from '../alt-button/alt-button';

import './sector-cta.style.scss';

const SectorCta = ({image, title, subTitle, link}) => {
  return (
    <div className="overflow-hidden">
      <Link to={link.to}>
        <BackgroundImage
          Tag="div"
          fluid={image}
          className="sector-cta"
        >
          <div className="sector-cta__content flex flex-wrap flex-col items-center justify-center relative z-10 pt-32 pb-16 lg:pt-56 lg:pb-48 text-white leading-tight">
            <h2 className="font-black text-4xl lg:text-5xl">{title}</h2>
            <p className="text-xl lg:text-2xl mb-3">{subTitle}</p>
            <div className="sector-cta__button">
              <AltButton text={link.text} link={link.to} color={link.color} internal/>
            </div>
          </div>
          <div className="sector-cta__bgcolor inset-0 absolute opacity-50 bg-primary-darker" />
        </BackgroundImage>
      </Link>
    </div>
  )
}

export default SectorCta;