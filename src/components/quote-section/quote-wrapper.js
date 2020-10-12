import React from 'react';
import BackgroundImage from 'gatsby-background-image'
import QuoteBlock from './quote-block';

const QuoteWrapper = ({bgImage, quotes}) => (
  <BackgroundImage
  Tag="section"
  className="relative"
  fluid={bgImage}
>
  <div className="flex flex-wrap items-center max-w-6xl mx-auto py-12 md:py-24 relative z-10 px-2 md:px-4">
    {quotes && quotes.map((quote, i) => (
      <div key={i} className={`w-full sm:w-1/2 px-2 md:px-4 ${i !== quotes.length - 1 && 'mb-10'} sm:mb-0`}>
        <QuoteBlock {...quote}/>
      </div>
    ))}
  </div>
  <div className="bg-primary-darker inset-0 opacity-75 absolute" />
</BackgroundImage>
);

export default QuoteWrapper;