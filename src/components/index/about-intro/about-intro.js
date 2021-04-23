import React from 'react';
import BackgroundImage from 'gatsby-background-image';

import './about-intro.style.scss'

const AboutIntro = ({logo, title, text, image}) => (
  <div className="relative bg-gray mb-12 md:mb-24">
    <div className="flex flex-wrap max-w-screen-2xl mx-auto px-4 md:px-8">
      <div className="w-full md:pr-12 md:w-2/3 xl:w-1/2 lg:max-w-3xl py-16 md:py-24">
        <h3 className="text-3xl font-black text-primary-dark mb-5">{title}</h3>
        <img className="mb-10 logo-smallish" src={logo} alt="SidBibby Logo" />
        {text}
      </div>
    </div>
    <div className="about-intro__image absolute right-0 top-0 bottom-0 md:w-1/3 xl:w-2/5">
    {image && <BackgroundImage
      Tag="div"
      className="h-full"
      fluid={image}
    />}
    </div>
  </div>
);

export default AboutIntro;