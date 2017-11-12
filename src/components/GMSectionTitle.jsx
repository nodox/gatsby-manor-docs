import React from 'react';

const GMSectionTitle = (props) => {
  const { children } = props;

  return (
    <div className='gm--section--title'>
      <h4>{children}</h4>
    </div>
  );
}

export default GMSectionTitle;
