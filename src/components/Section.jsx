import React from 'react';


const Section = (props) => {
  const { children } = props;

  return (
    <div>
      <div>
        {children}
      </div>
    </div>
  );
}

export default Section;
