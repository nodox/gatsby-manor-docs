import React from 'react'
import Link from 'gatsby-link'
import GMCard from './GMCard'
import { Container, Row, Col, Button } from 'reactstrap';

export default class GMGrid extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      themes: [
        'Massively',
        'Etheral',
        'Exasper',
        'Dimensions',
        'Stellar',
        'West',
        'Apple'
      ],
    }
  }

  render() {
    const data = {
      themes: this.state.themes
    }

    return (
      <Container>
        {data.themes.map((obj, idx) => {
          let tileData = {obj, idx}
          return (
            <Row key={idx}>
              <GMCard data={tileData} />
            </Row>
          );
        })}
      </Container>
    );
  }
}
