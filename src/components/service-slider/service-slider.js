import React, {useRef, useEffect} from 'react';
import Glide from '@glidejs/glide'

import ServiceItem from './service-item/service-item';

const ServiceSlider = ({services}) => {
  
  let slider = useRef(null)

  useEffect(() => {
    if (slider.current) {
      new Glide(slider.current,  { 
        //type: 'carousel',
        startAt: 1,
        autoplay: 6000,
        perView: 3,
        peek: {
          before: 0,
          after: 230
        },
        bound: true,
        animationTimingFunc: 'ease-in-out',
        breakpoints: {
          1450: {
            peek: {
              before: 0,
              after: 0
            },
          },
          1200: {
            peek: {
              before: 0,
              after: 100
            },
            perView: 2
          },
          1024: {
            peek: {
              before: 100,
              after: 100
            },
            perView: 2
          },
          600: {
            peek: {
              before: 50,
              after: 50
            },
            perView: 1
          }
          ,
          350: {
            peek: {
              before: 40,
              after: 40
            },
            perView: 1
          }
        }
      }).mount()
    }
  }, [])

  return (
    <div ref={slider} className="glide">
      <div data-glide-el="track" className="glide__track">
        <ul className="glide__slides">
          {services && services.map((service, i) => (
            <li key={i} className="glide__slide">
              <ServiceItem {...service}/>
            </li>
          ))}      
        </ul>
      </div>
      <div className="relative lg:absolute flex justify-between" data-glide-el="controls">
        <div className="px-10 cursor-pointer duration-300 hover:opacity-50 py-3" data-glide-dir="<">
          <svg xmlns="http://www.w3.org/2000/svg" width="33.667" height="23.673" viewBox="0 0 33.667 23.673">
            <path id="next" d="M11,5.03a1.194,1.194,0,0,1,1.7,1.68l-8.6,8.6h28.39A1.182,1.182,0,0,1,33.667,16.5a1.2,1.2,0,0,1-1.188,1.2H4.089l8.6,8.587a1.218,1.218,0,0,1,0,1.7,1.189,1.189,0,0,1-1.7,0L.356,17.351a1.168,1.168,0,0,1,0-1.68Z" transform="translate(0 -4.674)" fill="#192821"/>
          </svg>
        </div>
        <div  className="px-10 cursor-pointer duration-300 hover:opacity-50 py-3" data-glide-dir=">">
          <svg xmlns="http://www.w3.org/2000/svg" width="33.667" height="23.673" viewBox="0 0 33.667 23.673">
            <path id="next" d="M22.671,5.03a1.194,1.194,0,1,0-1.7,1.68l8.6,8.6H1.188A1.182,1.182,0,0,0,0,16.5a1.2,1.2,0,0,0,1.188,1.2h28.39l-8.6,8.587a1.218,1.218,0,0,0,0,1.7,1.189,1.189,0,0,0,1.7,0l10.64-10.64a1.168,1.168,0,0,0,0-1.68Z" transform="translate(0 -4.674)" fill="#192821"/>
          </svg>
        </div>
      </div>
    </div>
  )
};

export default ServiceSlider;