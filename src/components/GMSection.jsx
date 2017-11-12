import React from 'react';
import { Container, Row, } from 'reactstrap';


const GMSection = (props) => {
  const { children } = props;

  return (
    <Container>
      <Row>
        {children}
      </Row>
    </Container>
  );
}

export default GMSection;
