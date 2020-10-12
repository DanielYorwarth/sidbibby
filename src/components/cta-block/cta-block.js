import React from 'react';

import Button from '../button/button';

const CtaBlock = ({text, phone, link}) => (
  <div className="max-w-6xl mx-auto px-4 md:px-8 mb-12 md:mb-24">
    <div className="bg-gray text-primary-dark px-8 py-6 font-black flex flex-wrap justify-center md:justify-between items-center text-center md:text-left">
      <h4 className="text-2xl md:text-3xl pr-8">{text} <a className="text-primary hover:opacity-75 duration-300" href={`tel:${phone.replace(/\s/g, '')}`}>{phone}</a></h4>
      <Button text={link.text} link={link.to} internal/>
    </div>
  </div>
);

export default CtaBlock;