import React from 'react';

import twitterIcon from '../../images/twitter.svg';
import facebookIcon from '../../images/facebook.svg';
import instagramIcon from '../../images/instagram.svg';

import './socials.style.scss';

const Socials = ({twitter, facebook, instagram}) => (
  <div className="flex flex-wrap items-center">
    {twitter &&
    <a href={twitter} rel="noopener" target="_blank"><img className="duration-300 social-link" src={twitterIcon} alt="Twitter Account" /></a>}
    {instagram &&
    <a className="mx-10" rel="noopener" target="_blank" href={instagram}><img className="duration-300 social-link" src={instagramIcon} alt="Instagram Account" /></a>}
    {facebook &&
    <a href={facebook} rel="noopener" target="_blank"><img className="duration-300 social-link" src={facebookIcon} alt="Facebook Account" /></a>}
  </div>
);

export default Socials;