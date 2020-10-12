import React from 'react';

import awardIcon from '../../images/reward-icon.svg';

const Award = ({title, text}) => (
  <div className="text-center text-primary-dark">
    <img className="mx-auto mb-2" src={awardIcon} alt="Award" />
    <h5 className="text-xl font-black">{title}</h5>
    <p className="italic">{text}</p>
  </div>
);

export default Award; 