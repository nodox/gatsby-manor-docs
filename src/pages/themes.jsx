import React from 'react'
import Link from 'gatsby-link'
import Jumbotron from '../components/Jumbotron'
import Card from '../components/Card'
import Img from "gatsby-image";

import '../styles/themes.scss';

export default class Themes extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const data = {
      themes: [
        {
          title: 'Massively',
          path: "/themes/massively",
          image: this.props.data.massivelyImage,
        },
        {
          title: 'Lens',
          path: "/themes/lens",
          image: this.props.data.lensImage,
        },
        {
          title: 'Photon',
          path: "/themes/photon",
          image: this.props.data.photonImage,
        },
        {
          title: 'Identity',
          path: "/themes/identity",
          image: this.props.data.identityImage,
        },
        {
          title: 'Dimension',
          path: "/themes/dimension",
          image: this.props.data.dimensionImage,
        },
        {
          title: 'Tessellate',
          path: "/themes/tessellate",
          image: this.props.data.tessellateImage,
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
        {data.themes.map((obj, idx) => {
          return (
            <div className="themes-items" key={idx}>
              <div className="themes-card">
                <Link to={obj.path}>
                  <Img
                    title="Theme image"
                    alt="title theme"
                    sizes={obj.image.sizes}
                  />
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

export const pageQuery = graphql`
  query ThemeImagesQuery {
    massivelyImage: imageSharp(id: { regex: "/massively/" }) {
      sizes(maxWidth: 1670 ) {
        ...GatsbyImageSharpSizes
      }
    },
    identityImage: imageSharp(id: { regex: "/identity/" }) {
      sizes(maxWidth: 1670 ) {
        ...GatsbyImageSharpSizes
      }
    },
    dimensionImage: imageSharp(id: { regex: "/dimension/" }) {
      sizes(maxWidth: 1670 ) {
        ...GatsbyImageSharpSizes
      }
    },
    photonImage: imageSharp(id: { regex: "/photon/" }) {
      sizes(maxWidth: 1670 ) {
        ...GatsbyImageSharpSizes
      }
    },
    tessellateImage: imageSharp(id: { regex: "/tessellate/" }) {
      sizes(maxWidth: 1670 ) {
        ...GatsbyImageSharpSizes
      }
    },
    lensImage: imageSharp(id: { regex: "/lens/" }) {
      sizes(maxWidth: 1670 ) {
        ...GatsbyImageSharpSizes
      }
    },
  }
`
