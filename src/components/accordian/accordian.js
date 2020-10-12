import React, { useEffect } from 'react';
import PropTypes from "prop-types";

import './accordian.style.scss'

const Accordian = ({questions}) => {
  useEffect(() => {
    let acc = document.getElementsByClassName("accordion");
    let i;

    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");
        /* Toggle between hiding and showing the active panel */
        let panel = this.nextElementSibling;
        
        let open = this.querySelector('.accordion__open');
        let close = this.querySelector('.accordion__close');
        if (open) open.classList.toggle('accordion__icon--active');
        if (close) close.classList.toggle('accordion__icon--active');

        if (panel.style.display === "block") {
          panel.style.display = "none";
        } else {
          panel.style.display = "block";
        }
      });
    }
  }, []) 

  return (
    <div className="text-left">
      {questions && questions.map((question, i) => (
        <div key={i}>
          <button className="text-lg font-bold text-white text-left accordion bg-primary mb-2 p-6 flex flex-wrap items-center justify-between">
            {question.title}
            <div>
            <svg className="accordion__icon--active accordion__open hidden" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
              <line id="Line_5" data-name="Line 5" x2="30" transform="translate(0 15)" fill="none" stroke="#fff" stroke-width="3"/>
              <line id="Line_6" data-name="Line 6" x2="30" transform="translate(15) rotate(90)" fill="none" stroke="#fff" stroke-width="3"/>
            </svg>
            <svg className="accordion__close hidden" xmlns="http://www.w3.org/2000/svg" width="30" height="3" viewBox="0 0 30 3">
              <line id="Line_5" data-name="Line 5" x2="30" transform="translate(0 1.5)" fill="none" stroke="#fff" stroke-width="3"/>
            </svg>
            </div>
          </button>
          <div className="panel bg-gray p-4 md:p-8 mb-2">
            <p>{question.text}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
export default Accordian;