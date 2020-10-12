import React from 'react';

const ListItem = ({text}) => (
  <div className="flex items-start mb-6">
    <svg className="mr-3" id="tick" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
      <circle id="Ellipse_2" data-name="Ellipse 2" cx="11" cy="11" r="11" transform="translate(0 0)" fill="#59b325"/>
      <path id="Path_11" data-name="Path 11" d="M69.371,58.373a11.032,11.032,0,0,1-11,11,10.824,10.824,0,0,1-8.594-4.125,10.853,10.853,0,0,0,6.875,2.406,11.032,11.032,0,0,0,11-11,10.853,10.853,0,0,0-2.406-6.875A10.824,10.824,0,0,1,69.371,58.373Z" transform="translate(-47.371 -47.373)" fill="#54a227"/>
      <path id="Path_12" data-name="Path 12" d="M109.854,123.184l-7.15,7.838a1.174,1.174,0,0,1-1.788,0l-3.025-3.369A1.216,1.216,0,1,1,99.679,126l2.131,2.406,6.256-6.806a1.206,1.206,0,0,1,1.719-.069A1.185,1.185,0,0,1,109.854,123.184Z" transform="translate(-92.872 -115.347)" fill="#fff"/>
    </svg>
    <div className="flex-1">
      {text}
    </div>
  </div>
);

export default ListItem;