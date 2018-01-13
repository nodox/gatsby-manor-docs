import React from 'react'
import Link from 'gatsby-link'
import Jumbotron from '../components/Jumbotron'
import Card from '../components/Card'

import massivelyImage from '../images/massively.jpg'
import dimensionImage from '../images/dimension.jpg'
import photonImage from '../images/photon.jpg'
import lensImage from '../images/lens.jpg'
import identityImage from '../images/identity.jpg'
import tessellateImage from '../images/tessellate.jpg'


import etherealImage from '../images/ethereal.png'
import fortyImage from '../images/forty.png'
import heliosImage from '../images/helios.png'
import parallelismImage from '../images/parallelism.png'
import blackPlaceholderImage from '../images/blackplaceholder.png'


import '../styles/themes.scss';

export default class Themes extends React.Component {

  constructor() {
    super();
  }

  render() {

    const data = {
      themes: [
        {
          title: 'Massively',
          path: "/themes/massively",
          image: massivelyImage,
        },
        {
          title: 'Lens',
          path: "/themes/lens",
          image: lensImage,
        },
        {
          title: 'Photon',
          path: "/themes/photon",
          image: photonImage,
        },
        {
          title: 'Identity',
          path: "/themes/identity",
          image: identityImage,
        },
        {
          title: 'Dimension',
          path: "/themes/dimension",
          image: dimensionImage,
        },
        {
          title: 'Tessellate',
          path: "/themes/tessellate",
          image: tessellateImage,
        },
      ],
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
        <Jumbotron center data={data.hero} />
        {data.themes.map(obj => {
          return (
            <div className="themes-items">
              <div className="themes-card">
                <Link to={obj.path}>
                  <img className="card--img" src={obj.image} alt="Card image cap" />
                  <div className="theme-card--name">
                    <div className="name">{obj.title}</div>
                  </div>
                </Link>
              </div>
            </div>
          )})
        }
      </div>
    )

  }

}
