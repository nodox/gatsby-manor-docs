import React from 'react';
import Link from 'gatsby-link';
import classNames from 'classnames';
import "../styles/_jumbotron.scss";


const Jumbotron = (props) => {
  const { data, center } = props;

  let ActionButton = null;

  if(!!data.lead.callToAction) {
    ActionButton = (
      <p className="jumbotron--lead">
        <Link to={data.lead.callToAction.path} className="jumbotron--lead--action -primary">{data.lead.callToAction.text}</Link>
      </p>
    );
  }

  let jumbotronClassses = classNames({
    'jumbotron': true,
    '-center': center ? true : false,
  });


  return (
    <div className={jumbotronClassses}>
      <h1 className="jumbotron--title">{data.lead.title}</h1>
      <p className="jumbotron--lead">
        <span>{data.lead.partOne}</span>
        <br/>
        <span>{data.lead.partTwo}</span>
      </p>
      {ActionButton}
    </div>
  );
};

export default Jumbotron;
