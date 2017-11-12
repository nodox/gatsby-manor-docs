import React from 'react';
import {
Container, Row, Col, Button,
Card, CardBody, CardTitle,
CardText, CardImg } from 'reactstrap';

import Link from 'gatsby-link';

import massivelyDesktopImage from '../images/massively-desktop.png'

const GMCard = (props) => {
  const { data } = props;
  return (
    <Col className='gallery--grid--cell' key={data.idx}>
      <Card className="gallery--grid--card">
        <CardImg top width="100%" className="img-fluid" src={massivelyDesktopImage} alt="Card image cap" />
        <CardBody className="gallery--grid--card-body">
          <span className="gallery--grid--card-title">{data.obj}</span>
          <Link to="/" color="primary">Get Theme</Link>
        </CardBody>
      </Card>
    </Col>
  )
};

export default GMCard;
