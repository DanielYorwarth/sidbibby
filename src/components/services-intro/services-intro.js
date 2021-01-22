import React from 'react';
import BackgroundImage from 'gatsby-background-image';

import Button from '../button/button';
import AltButton from '../alt-button/alt-button';

const ServicesIntro = ({services}) => (
  <div>
    {services.map((service, i) => {
      if (i%2 === 0) {
        return ( 
          <div className="flex flex-wrap bg-gray">
            <div className="w-full h-64 md:h-auto md:w-1/2">
              <BackgroundImage
                Tag="section"
                fluid={service.image}
                className="h-full"
              />
            </div>
            <div className="w-full md:w-1/2 py-8 md:py-16 lg:py-24 xl:py-32">
              <div className="text-primary-dark leading-relaxed max-w-3xl mr-auto px-4 md:px-8 lg:px-16 xl:px-32">
                <h2 className="font-black text-3xl mb-4">{service.title}</h2>
                <p className="mb-6">
                {service.text}
                </p>
                <div className="flex flex-wrap items-start">
                  <div className="pr-8">
                    <Button text={service.link1.text} link={service.link1.to} internal/>
                  </div>
                  <AltButton text={service.link2.text} link={service.link2.to} color="#59B325" internal/>
                </div>
              </div>
            </div>
          </div>
        )
      } else {
        return (
          <div className="flex flex-wrap bg-gray">
            <div className="w-full md:w-1/2 py-8 md:py-16 lg:py-24 xl:py-32">
              <div className="text-primary-dark leading-relaxed max-w-3xl ml-auto px-4 md:px-8 lg:px-16 xl:px-32">
                <h2 className="font-black text-3xl mb-4">{service.title}</h2>
                <p className="mb-6">
                {service.text}
                </p>
                <div className="flex flex-wrap items-start">
                  <div className="pr-8">
                    <Button text={service.link1.text} link={service.link1.to} internal/>
                  </div>
                  <AltButton text={service.link2.text} link={service.link2.to} color="#59B325" internal/>
                </div>
              </div>
            </div>
            <div className="w-full h-64 md:h-auto md:w-1/2 order-first md:order-last">
              <BackgroundImage
                Tag="section"
                fluid={service.image}
                className="h-full"
              />
            </div>
          </div>
        )
      }
    })}
  </div>
);

export default ServicesIntro;