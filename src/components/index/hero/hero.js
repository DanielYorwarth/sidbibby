import React from 'react'
import BackgroundImage from 'gatsby-background-image'

import Button from '../../button/button';
import AltButton from '../../alt-button/alt-button';

import './hero.style.scss';

const Hero = ({title, image, text, button1, button2}) => (
    <BackgroundImage
      Tag="section"
      fluid={image}
      backgroundColor={`#040e18`}
    >
      <div className="hero flex flex-wrap items-center relative">
        <div className="max-w-screen-2xl w-full mx-auto relative z-10 text-white px-4 md:px-8 text-center md:text-left py-10">
          {title && 
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase leading-none max-w-xl mb-3 md:mb-6">
              {title}
            </h2>
          }
          {text && 
            <p className="lg:text-lg max-w-2xl mb-6">
              {text}
            </p>
          }
          <div className="md:flex flex-wrap items-end">
            {button1 && 
              <Button text={button1.text} link={button1.link} internal/>
            }
            {button2 && 
              <div className="md:pl-8">
                <AltButton text={button2.text} link={button2.link} color="#59B325" internal/>
              </div>
            }
          </div>
        </div>
        <div className="absolute inset-0 bg-primary-darker opacity-50" />
      </div>
    </BackgroundImage>
)

export default Hero