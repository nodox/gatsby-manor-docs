import React from 'react';
import Link from 'gatsby-link';
import classNames from 'classnames';


const Jumbotron = (props) => {
  const { data, center } = props;

  let ActionButton = null;

  // CallTAction present?
  if(!!data.lead.callToAction) {
    ActionButton = (
      <p className="lead">
        <Link to={data.lead.callToAction.path} color="primary">{data.lead.callToAction.text}</Link>
      </p>
    );
  }

  let jumbotronClassses = classNames({
    'jumbotron': true,
    '-center': center ? true : false,
  });


  return (
    <div className={jumbotronClassses}>
      <h1 className="title">{data.lead.title}</h1>
      <p className="lead">
        <span>{data.lead.partOne}</span>
        <br/>
        <span>{data.lead.partTwo}</span>
      </p>
      {ActionButton}
    </div>
  );
};

export default Jumbotron;
