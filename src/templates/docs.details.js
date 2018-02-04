import React from 'react';
import Link from 'gatsby-link';

import "../styles/docs-details.scss";

class DocsDetailsTemplate extends React.Component {
  constructor(props) {
    super(props);

    this.quickStartDocs = this.props.pathContext.docs.filter((obj) => {
      return obj.path.includes('/docs/quick-start');
    });

    this.cliDocs = this.props.pathContext.docs.filter((obj) => {
      return obj.path.includes('/docs/cli');
    });

    this.contributeDocs = this.props.pathContext.docs.filter((obj) => {
      return obj.path.includes('/docs/contribute');
    });

    this.tutorialDocs = this.props.pathContext.docs.filter((obj) => {
      return obj.path.includes('/docs/tutorials');
    });

  }

  render() {
    const { data } = this.props;
    const { markdownRemark } = data;
    const { html, frontmatter } = markdownRemark;

    return (
      <div className="docs--details">
        <div className="docs--details--column docs--details--main">
          <h1>{frontmatter.title}</h1>
          <div className="" dangerouslySetInnerHTML={{ __html: html }} />
        </div>
        <div className="docs--details--column docs--details--sidemenu">
          <div>
            <h3>Quick Start</h3>
            {this.quickStartDocs.map((item, idx) => {
              return <Link key={idx} to={item.path}>{item.title}</Link>
            })}
          </div>
          <div>
            <h3>Tutorials</h3>
            {this.tutorialDocs.map((item, idx) => {
              return <Link key={idx} to={item.path}>{item.title}</Link>
            })}
          </div>
          <div>
            <h3>Contributing</h3>
            {this.contributeDocs.map((item, idx) => {
              return <Link key={idx} to={item.path}>{item.title}</Link>
            })}
          </div>
          <div>
            <h3>Reference</h3>
            {this.cliDocs.map((item, idx) => {
              return <Link key={idx} to={item.path}>{item.title}</Link>
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default DocsDetailsTemplate;

export const pageQuery = graphql`
  query DocsDetailsPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`;
