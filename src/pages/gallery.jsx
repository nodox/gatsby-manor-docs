import React from 'react'
import Link from 'gatsby-link'
import Jumbotron from '../components/Jumbotron';
import Grid from '../components/Grid';

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
      <Jumbotron data={data.hero} />
      <Grid />
    </div>
  )
}

export default Gallery
