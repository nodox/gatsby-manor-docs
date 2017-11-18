import React from 'react';

const SectionTitle = (props) => {
  const { children } = props;

  return (
    <div className='gm--section--title'>
      <h4>{children}</h4>
    </div>
  );
}

export default SectionTitle;
