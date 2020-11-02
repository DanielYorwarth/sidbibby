import React from 'react';
import {Link} from 'gatsby';

import Button from '../button/button';
import Socials from '../socials/socials';
import FooterMenu from '../footer-menu/footer-menu';

import lightLogo from '../../images/logo-light.svg';
import trees from '../../images/tree-icons.svg';

import './footer.style.scss';

const Footer = ({menu}) => (
  <div className="relative">
    <footer className="site-foot px-2 md:px-6 relative z-10">
      <div className="bg-primary py-8 md:py-16 xl:py-24 px-4 sm:px-8 md:px-16 xl:px-24 max-w-screen-2xl mx-auto text-white leading-7">
        <div className="flex flex-wrap justify-between mb-10 sm:mb-32 md:mb-40 lg:mb-32">
          <div className="w-full lg:w-1/2 mb-5 lg:mb-0">
            <h3 className="text-4xl font-extrabold mb-2 leading-10">HOW CAN WE HELP YOU CREATE YOUR DREAM GARDEN?</h3>
            <p className="text-lg opacity-75 max-w-xl">Laying Turf, Planting, Patios, Fencing Features + much more!</p>
          </div>
          <div className="flex-1 relative lg:text-right">
            <Button text="GET YOUR QUOTE" link="/quote" internal />
            <img className="absolute top-0 right-0 " src={trees} alt="Trees" />
          </div>
        </div>
        <div className="flex flex-wrap items-start justify-between">
          <div className="mb-10 lg:mb-0">
            <img className="mb-6 -mt-4 lg:w-auto" src={lightLogo} alt="SidBibby Logo" />
            <div className="">
              <a className="hover:opacity-75 duration-300" href="tel:01353777909">Tel: 01353 777909</a> | Fax: 01353 777590 <br/>
              <a className="hover:opacity-75 duration-300 mb-2 block" href="mailto:info@sidbibby.co.uk">Email: info@sidbibby.co.uk</a>
              <p className="text-xs leading-5"><strong>Registered Office:</strong> <br/>
                60 Station Road
                Haddenham
                Ely
                Cambridgeshire
                CB6 3XD
              </p>
            </div>
          </div>  
          <div className="w-full lg:flex-1 flex flex-col lg:items-end">
            <div className="mb-10">
            <Socials twitter="https://twitter.com/SidBibbyTurf" facebook="https://www.facebook.com/sidbibbylandscaping/" instagram="https://www.instagram.com/sidbibby_landscaping/" />
            </div>
            <FooterMenu menu={menu}/>
            <p className="lg:text-right max-w-2xl">Sid Bibby Turf and Landscaping Ltd, <br/>
            Rose Barn, Ely Road, Sutton, <br/>
            Cambridgeshire, CB62AB </p>
          </div>
        </div>
      </div>
      <div className="lg:flex flex-wrap justify-between text-xs max-w-screen-2xl mx-auto py-4 md:py-8 w-full">
        <div className="mb-4 lg:mb-0">
          © 2019 SID BIBBY TURF AND LANDSCAPING LTD <span className="px-2 hidden md:inline-block">|</span> <span className="block md:inline-block">DESIGNED BY <span className="pl-2 font-bold text-secondary">VOLLEY.DIGITAL</span></span>
        </div>
        <div>
          <Link to="/privacy-policy">PRIVACY POLICY</Link><span className="px-2">|</span><Link to="/terms-and-conditions">TERMS & CONDITIONS</Link><span className="px-2">|</span><Link to="/enviro-policy">ENVIRO POLICY</Link>
        </div>
      </div>
    </footer>
    <div className="footer__bg absolute bg-gray w-full bottom-0"/>
  </div>
);

export default Footer;