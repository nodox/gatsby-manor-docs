import React from 'react';
import Link from 'gatsby-link';

import massivelyDesktopImage from '../images/massively.jpg'
import "../styles/_card.scss";

const Card = (props) => {
  const { data } = props;
  return (
    <div className="card">
      <img className="card--img" src={massivelyDesktopImage} alt="Card image cap" />
      <div className="card--body">
        <span className="card--title">{data.title}</span>
        <Link to={data.path} className="card--action">Get Theme</Link>
      </div>
    </div>
  );
};

export default Card;
