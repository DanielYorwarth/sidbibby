import React from 'react';

import Star from '../../images/star.svg';

const QuoteBlock = ({stars, title, name, text}) => {
  var starsArray = [];
  for (var i = 0; i < stars; i++) {
    starsArray.push(<img className="px-1" key={i} src={Star} alt="star" />);
  }
  return (
    <div className="text-white text-center">
      {stars && 
        <div className="flex flex-wrap justify-center mb-4">
          {starsArray && starsArray.map(star => star)}
        </div>
      }
      <h3 className="mb-4 text-xl font-extrabold">{title}</h3>
      <p className="mb-5">{text}</p>
      <span className="block w-20 h-1 bg-primary mx-auto mb-5"/>
      <span className="block font-light italic">{name}</span>
    </div>
  );
}

export default QuoteBlock;