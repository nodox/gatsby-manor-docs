import React from 'react';
import Link from 'gatsby-link';
import { Jumbotron, Button } from 'reactstrap';

const GMJumbotron = (props) => {
  const { data } = props;

  let ActionButton = null;

  // CallTAction present?
  if(!!data.lead.callToAction) {
    ActionButton = (
      <p className="lead">
        <Link to={data.lead.callToAction.path} color="primary">{data.lead.callToAction.text}</Link>
      </p>
    );
  }

  return (
    <Jumbotron className="gm--jumbotron">
      <h1 className="display-3">{data.lead.title}</h1>
      <p className="lead">
        <span>{data.lead.partOne}</span>
        <br/>
        <span>{data.lead.partTwo}</span>
      </p>
      {ActionButton}
    </Jumbotron>
  );
};

export default GMJumbotron;
