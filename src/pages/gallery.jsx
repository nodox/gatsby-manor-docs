import React from 'react'
import Link from 'gatsby-link'
import { Container, Row, Col, Button } from 'reactstrap';

import GMJumbotron from '../components/GMJumbotron';
import GMGrid from '../components/GMGrid';

import '../styles/index.scss';

const Gallery = (props) => {
  const data = {
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
      <GMJumbotron data={data.hero} />
      <GMGrid />
    </div>
  )
}

export default Gallery
