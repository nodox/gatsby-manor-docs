import React from 'react';
import Link from 'gatsby-link';

import massivelyDesktopImage from '../images/massively-desktop.png'

const Card = (props) => {
  const { data } = props;
  return (
    <div className="gallery--grid--card"  key={data.idx}>
      <img top width="100%" className="img-fluid" src={massivelyDesktopImage} alt="Card image cap" />
      <div className="gallery--grid--card-body">
        <span className="gallery--grid--card-title">{data.obj}</span>
        <Link to="/" color="primary">Get Theme</Link>
      </div>
    </div>
  );
};

export default Card;
