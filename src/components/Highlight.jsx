import React from 'react';

const Highlight = (props) => {
  const { data } = props;

  return (
    <div className="home--highlight--item">
      <h4>{data.headline}</h4>
      <p>{data.content}</p>
    </div>
  );
}

export default Highlight;
