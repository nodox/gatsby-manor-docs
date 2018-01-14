import React from 'react';
import classNames from 'classnames';
import Img from "gatsby-image";

import massivelyImage from '../images/massively.jpg'
import massivelyFullImage from '../images/massively_full.jpg'
import photonImage from '../images/photon.jpg'
import photonFullImage from '../images/photon_full.jpg'
import tessellateImage from '../images/tessellate.jpg'
import tessellateFullImage from '../images/tessellate_full.jpg'
import dimensionImage from '../images/dimension.jpg'
import lensImage from '../images/lens.jpg'
import identityImage from '../images/identity.jpg'


import "../styles/themes-detail.scss";

class ThemeDetailsTemplate extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      displaySidemenu: true,
    }
  }


  toggleSidemenu() {
    this.setState({
      displaySidemenu: !this.state.displaySidemenu
    });
  }

  render() {
    console.log(this.props);
    let sideMenuClasses = classNames({
      'theme--details--column': true,
      'theme--details--sidemenu': true,
    });

    let themeDetailsMainClasses = classNames({
      'theme--details--column': true,
      'theme--details--main': true,
      '-fullscreen': !this.state.displaySidemenu,
    });

    const { data, location } = this.props;
    const { markdownRemark } = data;
    const { html, frontmatter } = markdownRemark;

    var displayImage = null;
    var displayImageSmall = null;
    var useDarkOpenMenuClass = false;

    if (location.pathname.includes('massively')) {
      displayImage = data.massivelyFullImage.sizes;
      displayImageSmall = data.massivelyImage.sizes;
    } else if (location.pathname.includes('dimension')) {
      displayImage = data.dimensionImage.sizes;
      displayImageSmall = data.dimensionImage.sizes;
    } else if (location.pathname.includes('lens')) {
      displayImage = data.lensImage.sizes;
      displayImageSmall = data.lensImage.sizes;
      useDarkOpenMenuClass = true;
    } else if (location.pathname.includes('photon')) {
      displayImage = data.photonFullImage.sizes;
      displayImageSmall = data.photonImage.sizes;
    } else if (location.pathname.includes('identity')) {
      displayImage = data.identityImage.sizes;
      displayImageSmall = data.identityImage.sizes;
    } else if (location.pathname.includes('tessellate')) {
      displayImage = data.tessellateFullImage.sizes;
      displayImageSmall = data.tessellateImage.sizes;
    }

    let openMenuButtonClasses = classNames({
      'theme--details--main--open': true,
      '-dark': useDarkOpenMenuClass,
    });


    return (
      <div className="theme--details">
        <div className={themeDetailsMainClasses}>
          <div className={openMenuButtonClasses} onClick={() => this.toggleSidemenu()}>&#9776;</div>
          <div className="theme--details--img--small">
            <Img
              title="Theme details image"
              alt="title theme"
              sizes={displayImageSmall}
            />
          </div>
          <div className="theme--details--img--large">
            <Img
              title="Theme details image"
              alt="title theme"
              sizes={displayImage}
            />
          </div>
        </div>
        <div className={sideMenuClasses}>
          <div className="theme--details--sidemenu--close" onClick={() => this.toggleSidemenu()}>&times;</div>
          <h1 className="theme--details--sidemenu--title">{frontmatter.title}</h1>
          <div className="" dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </div>
    )
  }
}

export default ThemeDetailsTemplate;

export const pageQuery = graphql`
  query themeDetailImagesQueryAndThemeDetailsPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    },
    massivelyImage: imageSharp(id: { regex: "/massively/" }) {
      sizes(maxWidth: 1670 ) {
        ...GatsbyImageSharpSizes
      }
    },
    massivelyFullImage: imageSharp(id: { regex: "/massively_full/" }) {
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
    photonFullImage: imageSharp(id: { regex: "/photon_full/" }) {
      sizes(maxWidth: 1670 ) {
        ...GatsbyImageSharpSizes
      }
    },
    photonImage: imageSharp(id: { regex: "/photon/" }) {
      sizes(maxWidth: 1670 ) {
        ...GatsbyImageSharpSizes
      }
    },
    tessellateFullImage: imageSharp(id: { regex: "/tessellate_full/" }) {
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
  },
`;
