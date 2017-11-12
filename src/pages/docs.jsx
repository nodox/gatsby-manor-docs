import React from 'react'
import Link from 'gatsby-link'
import { Container, Row, Col, Button } from 'reactstrap';

import GMJumbotron from '../components/GMJumbotron';

const Docs = () => {
  const data = {
    productDescription: {
      sectionOne: '',
      sectionTwo: '',
      sectionThree: ''
    },

    hero: {
      lead: {
        title: 'Theme Gallery',
        partOne: 'Developers deserve beautiful designs.',
        partTwo: 'Find a theme. Let Jay do the rest.',
        callToAction: '',
      },
    },

  }

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <div>
              <h4>Theme Management</h4>
              <p>{data.productDescription.sectionOne}</p>
            </div>
          </Col>
        </Row>
        <Row>
          <div>
            <h4>Deploy your fist theme today!</h4>
            <p className="lead">
              <Button color="primary">View gallery</Button>
            </p>
          </div>
        </Row>
      </Container>

    </div>
  )
}

export default Docs
