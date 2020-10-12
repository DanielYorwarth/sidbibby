import React from 'react';

import AltButton from '../alt-button/alt-button';

import './trustpilot-block.style.scss';

import logo from '../../images/trustpilot-logo.jpg';

const TrustPilotBlock = ({title, text, link, marginBottom, lightShadow}) => {
  let showLightShadow = lightShadow ? 'trustpilot-block__wrapper--light' : ''
  return (
    <div className={`${marginBottom && 'mb-12 md:mb-24'} trustpilot-block__wrapper ${showLightShadow} relative`}>
      <div className="max-w-6xl mx-auto px-4 md:px-8 flex flex-wrap py-8 md:py-12 items-end justify-between">
        <h3 className="trustpilot-block__small-width font-black text-primary-dark text-3xl max-w-xs xs:mb-2 md:mb-0">{title}</h3>
        <img className="-ml-2 sm:ml-0 xs:mb-2 md:mb-0" src={logo} alt="trustpilot logo" />
        <p className="trustpilot-block__small-width text-primary-dark max-w-xs sm:px-4 hidden sm:block">{text}</p>
        <AltButton text={link.text} link={link.to} color={link.color}/>
      </div>
    </div>
  )
};

export default TrustPilotBlock;