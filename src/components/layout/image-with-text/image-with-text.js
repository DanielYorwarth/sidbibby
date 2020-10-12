import React from 'react';
import Img from 'gatsby-image';

const ImageWithText = ({text, image , image2 , maxWidth, align, noMargin}) => (
  <div className={`flex flex-wrap ${align ? align : 'items-center'} ${maxWidth} mx-auto px-4 md:px-8 ${noMargin ? '' : 'mb-12 md:mb-24' } leading-relaxed`}>
    <div className="w-full md:w-2/5 mb-8 md:mb-0">
      {image && <Img className="w-full" fluid={image} /> }
      {image2 && <Img className="w-full mt-10" fluid={image2} /> }
    </div>
    <div className="w-full md:w-3/5 md:pl-8 lg:pl-16">
      {text}
    </div>
  </div>
); 

export default ImageWithText;