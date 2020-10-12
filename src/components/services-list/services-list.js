import React from 'react';

import ServiceItem from '../service-slider/service-item/service-item';
import Heading from '../heading/heading';

const ServicesList = ({title, text, services}) => (
  <div className="relative home-slider bg-gray py-12 md:py-24">
    <div className="max-w-screen-2xl mx-auto px-4 md:px-8 justify-between text-center">
      <Heading 
        className="mb-4"
        title={title}
        text={text}
      />
      <div className="flex flex-wrap relative">
        {services.map((service, i) => (
          <div key={i} className="w-full md:w-1/2 lg:w-1/4">
            <ServiceItem  {...service} />
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default ServicesList;