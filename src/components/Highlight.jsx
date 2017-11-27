import React from 'react';

const Highlight = (props) => {
  const { data } = props;

  return (
    <div className="highlight--item">
      <h4 className="highlight--item--title">{data.headline}</h4>
      <p className="highlight--item--body">{data.content}</p>
    </div>
  );
}

export default Highlight;
