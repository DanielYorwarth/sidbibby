import React from 'react';

const Heading = ({title, text, className}) => (
  <div className={className}>
    <h3 className="text-4xl font-black text-primary-dark leading-tight mb-2">{title}</h3>
    {text && <p className="text-lg">{text}</p>}
  </div>
);

export default Heading;