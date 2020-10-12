import React from 'react';

import ListItem from '../list-item/list-item';

const List = ({title, listItems, layout}) => {
  return (
    <ul>
      {title && <h5 className="font-semibold text-lg mb-5">{title}</h5>}
      <div className="flex flex-wrap">
        {listItems && listItems.map((listItem, i) => (
          <div className="w-full md:w-1/2 pr-8" key={i}>
            <ListItem text={listItem} />
          </div>
        ))}
      </div>
    </ul>
  );
}

export default List;