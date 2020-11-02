import React, {useEffect} from 'react';
import SimpleLightbox from "simplelightbox";

import Heading from '../heading/heading';
import Work from '../work/work';
import Button from '../button/button';

const WorkIntro = ({title, text, works, button}) => {
  useEffect(() => {
    let lightbox = new SimpleLightbox(`.workgallery a`, { /* options */ });
  }, [])
  return (
    <div className="max-w-screen-2xl mx-auto mb-12 md:mb-24">
      <div className="text-center mb-10 px-4 sm:px-8">
        {title && 
          <Heading 
            className="mb-5"
            title={title}
            text={text ? text : null}
          />
        }
      </div>
      {works &&
        <div className="workgallery flex flex-wrap mb-10">
          {works.map((work, i) => (
            <div key={i} className="w-full md:w-1/3 px-4 sm:px-8 mb-2 md:mb-0">
              <Work {...work} />
            </div>
          ))}
        </div>
      }
      {button && 
        <div className="text-center">
          <Button text={button.text} link={button.to} internal />
        </div>
      }
    </div>
  );
}

export default WorkIntro;
