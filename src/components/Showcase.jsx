import React from 'react';
import Link from 'gatsby-link';
import classNames from 'classnames';

import "../styles/_showcase.scss";

import massivelyImg from '../images/massively.png';
import dimensionImg from '../images/dimension.png';
import fortyImg from '../images/forty.png';
import identityImg from '../images/identity.png';
import etherealImg from '../images/ethereal.png';
import parallelismImg from '../images/parallelism.png'
import lensImg from '../images/lens.png'
import heliosImg from '../images/helios.png'



const Showcase = (props) => {
  const { data, } = props;

  let ActionButton = null;

  if(!!data.lead.callToAction) {
    ActionButton = (
      <p className="showcase--lead">
        <Link to={data.lead.callToAction.path} className="showcase--lead--action -primary">
          {data.lead.callToAction.text}
        </Link>
      </p>
    );
  }

  let showcaseClassses = classNames({
    'showcase': true,
  });


  return (
    <div className={showcaseClassses}>
      <div className="showcase--images">
        <div className="showcase--gradient">
          <img className="showcase--img" src={lensImg} />
          <img className="showcase--img" src={parallelismImg} />
          <img className="showcase--img" src={heliosImg} />
          <img className="showcase--img" src={identityImg} />
        </div>
      </div>

      <div className="showcase--cta">
        <span className="showcase--title">{data.lead.title}</span>
        <p className="showcase--lead">
          <span>{data.lead.partOne}</span>
        </p>
        {ActionButton}
      </div>
    </div>
  );
};

export default Showcase;
