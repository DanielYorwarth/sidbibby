import React from 'react';

import AltButton from '../alt-button/alt-button';

import './trustpilot-block.style.scss';

import logo from '../../images/facebook-reviews.png';

const TrustPilotBlock = ({title, text, link, marginBottom, lightShadow}) => {
  let showLightShadow = lightShadow ? 'trustpilot-block__wrapper--light' : ''
  return (
    <div className={`${marginBottom && 'mb-12 md:mb-24'} trustpilot-block__wrapper ${showLightShadow} relative`}>
      <div className="max-w-6xl mx-auto px-4 md:px-8 flex flex-wrap py-8 md:py-12 items-center md:items-end justify-between flex-col md:flex-row">
        <h3 className="trustpilot-block__small-width font-black text-center md:text-left text-primary-dark text-3xl max-w-xs mb-4 md:mb-0">{title}</h3>
        <img className="trustpilot-block__image md:-ml-2 sm:ml-0 mb-4 md:mb-0" src={logo} alt="trustpilot logo" />
        <p className="trustpilot-block__small-width text-primary-dark max-w-xs mb-4 md:mb-0 sm:px-4">{text}</p>
        <AltButton target="_blank" text={link.text} link={link.to} color={link.color}/>
      </div>
    </div>
  )
};

export default TrustPilotBlock;