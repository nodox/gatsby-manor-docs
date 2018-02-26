import React from 'react';
import classNames from 'classnames';
import Img from "gatsby-image";

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
              sizes={frontmatter.themesMasterImage.childImageSharp.sizes}
            />
          </div>
          <div className="theme--details--img--large">
            <Img
              title="Theme details image"
              alt="title theme"
              sizes={frontmatter.themesDetailImage.childImageSharp.sizes}
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
  query ThemeDetailsDataQueryByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        themesMasterImage {
          childImageSharp {
            sizes(maxWidth: 1200) {
              ...GatsbyImageSharpSizes
            }
          }
        }
        themesDetailImage {
          childImageSharp {
            sizes(maxWidth: 1200) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
`;
