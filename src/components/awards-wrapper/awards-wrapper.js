import React from 'react';

import Award from '../award/award';

const AwardsWrapper = ({title, text, awards}) => (
  <div className="max-w-screen-2xl mx-auto text-center text-primary-dark mb-12 md:mb-24">
    <h3 className="text-4xl font-black px-4 md:px-8">{title}</h3>
    <p className="mb-6 md:mb-12 px-4 md:px-8">{text}</p>
    
    {awards && <div className="flex flex-wrap">
      {awards.map((award, i) => (
        <div key={i} className="w-full md:w-1/2 lg:w-1/4 mb-10 lg:mb-0 px-2 md:px-4">
          <Award {...award} />
        </div>
      ))}
    </div>
    }
  </div>
);

export default AwardsWrapper; 