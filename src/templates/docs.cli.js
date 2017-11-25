import React from 'react';
import Link from 'gatsby-link';

import "../styles/docs-cli.scss";

class DocsCliTemplate extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { data, pathContext } = this.props;
    const { markdownRemark } = data;
    const { html, frontmatter } = markdownRemark;
    return (
      <div className="docs--cli">
        <div className="docs--cli--column docs--cli--main">
          <h1>{frontmatter.title}</h1>
          <div className="" dangerouslySetInnerHTML={{ __html: html }} />
        </div>
        <div className="docs--cli--column docs--cli--sidemenu">
          {pathContext.cliPath.map(node => {
            return (
              <Link to={node.path}>
                {node.title}
              </Link>
            );
          })}
        </div>
      </div>
    )
  }
}

export default DocsCliTemplate;

export const pageQuery = graphql`
  query DocsCliPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`;
