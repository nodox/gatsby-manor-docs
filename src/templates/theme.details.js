import React from 'react';
import massivelyDesktopImage from '../images/massively-desktop.png'
import massivelyFullImage from '../images/massivelyfull.png'

import "../styles/themes-detail.scss";

class ThemeDetailsTemplate extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { data } = this.props;
    const { markdownRemark } = data;
    const { html, frontmatter } = markdownRemark;

    return (
      <div className="theme--details">
        <div className="theme--details--column theme--details--main">
          <img className="theme--details--img--small" src={massivelyDesktopImage} alt="Card image cap" />
          <img className="theme--details--img--large" src={massivelyFullImage} alt="Card image cap" />
        </div>
        <div className="theme--details--column theme--details--sidemenu">
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
