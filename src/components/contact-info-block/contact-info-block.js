import React from 'react';

const ConactInfoBlock = ({phone, email}) => (
  <div className="hidden lg:flex bg-primary px-5 xl:px-10 text-center text-white flex flex-col justify-center leading-none h-full">
    <a className="block font-bold text-lg hover:opacity-75 duration-300" href={`tel:${phone.replace(/\s/g, '')}`}>
      {phone}
    </a>
    <a className="block font-light hover:opacity-75 duration-300" href={`mailto:${email}`}>
      {email}
    </a>
  </div>
);

export default ConactInfoBlock;