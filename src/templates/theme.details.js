import React from 'react';
import classNames from 'classnames';

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
      displayImage = massivelyFullImage;
      displayImageSmall = massivelyImage;
    } else if (location.pathname.includes('dimension')) {
      displayImage = dimensionImage;
      displayImageSmall = dimensionImage;
    } else if (location.pathname.includes('lens')) {
      displayImage = lensImage;
      displayImageSmall = lensImage;
      useDarkOpenMenuClass = true;
    } else if (location.pathname.includes('photon')) {
      displayImage = photonFullImage;
      displayImageSmall = photonImage;
    } else if (location.pathname.includes('identity')) {
      displayImage = identityImage;
      displayImageSmall = identityImage;
    } else if (location.pathname.includes('tessellate')) {
      displayImage = tessellateFullImage;
      displayImageSmall = tessellateImage;
    }

    let openMenuButtonClasses = classNames({
      'theme--details--main--open': true,
      '-dark': useDarkOpenMenuClass,
    });


    return (
      <div className="theme--details">
        <div className={themeDetailsMainClasses}>
          <div className={openMenuButtonClasses} onClick={() => this.toggleSidemenu()}>&#9776;</div>
          <img className="theme--details--img--small" src={displayImageSmall} alt="Card image cap" />
          <img className="theme--details--img--large" src={displayImage} alt="Card image cap" />
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
  query ThemeDetailsPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`;
