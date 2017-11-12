import React from 'react';
import { Container, Row, Col } from 'reactstrap';


const GMHighlight = (props) => {
  const { data } = props;

  return (
    <div>
      <h4>{data.headline}</h4>
      <p>{data.content}</p>
    </div>
  );
}

export default GMHighlight;
