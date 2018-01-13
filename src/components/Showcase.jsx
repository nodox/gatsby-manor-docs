import React from 'react';
import Link from 'gatsby-link';
import classNames from 'classnames';
import Img from "gatsby-image";

import "../styles/_showcase.scss";

import lensImg from '../images/lens.jpg'
import parallelismImg from '../images/parallelism.jpg'
import heliosImg from '../images/helios.jpg'
import identityImg from '../images/identity.jpg'

const Showcase = (props) => {
  const { data, images } = props;

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

  var imagesArray = [];
  Object.keys(images).forEach(key => {
    imagesArray = [...imagesArray, key];
  });

  var imageToMount = imagesArray[Math.floor(Math.random() * imagesArray.length)];

  return (
    <div className={showcaseClassses}>
      <div className="showcase--images">
        <div className="showcase--gradient">
          <Img
            className="showcase--img"
            title="Theme image"
            alt="title theme"
            sizes={images[imageToMount].sizes}
          />
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
