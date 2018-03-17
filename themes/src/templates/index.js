import React from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import Layout from '../layouts/layout'

import styles from "../styles/home.module.scss";


class IndexPage extends React.Component {
  constructor(props) {
    super(props)

    this.content = {
      cliCommands: {
        desc: 'Jay has a set of commands to get and load themes in a Gatsby project.',
        path: '/docs/cli',
      },
      gettingStarted: {
        desc: 'Getting started is quick and easy: init and develop.',
        path: '/docs/quick-start/getting-started',
      },
      contributing: {
        desc: 'Join our community driven project! Learn how to contribute a themes or make the project more reliable.',
        path: '/docs/contribute/how-to-contribute',
      },
      tutorials: {
        desc: 'The basic workflows for working with Jay and Gatsby.',
        path: '/docs/tutorials/theme-development',
      },
    }
  }

  render() {
    const { data } = this.props
    return (
      <Layout layoutLocation={this.props.location}>
        <div>
          <div className={styles['banner']}>
            <h1 className={styles['title']}>Gatsby Manor</h1>
            <p className={styles['description']}>A collection of documentation on themes for Gatsby</p>
          </div>
          <div className={styles['grid']}>
            {Object.keys(data).map((key, idx) => {
              const header = data[key].edges[0].node.frontmatter.section
              return (
                <Link key={idx} className={styles['card']} to={this.content[key].path}>
                  <h4 className={styles['header']}>{header}</h4>
                  <p className={styles['description']}>{this.content[key].desc}</p>
                  <p>Read more</p>
                </Link>
              )
            })}
          </div>
        </div>
      </Layout>
    );
  }
}


export default IndexPage

export const pageQuery = graphql`
  query DocsIndexQuery {
    cliCommands: allMarkdownRemark(
      filter: {
        frontmatter: { section: { eq: "CLI commands" }}
    	}
    ) {
      edges {
        node {
          html
          frontmatter {
            path
            title
            section
          }
        }
      }
    },
    gettingStarted: allMarkdownRemark(
      filter: {
        frontmatter: { section: { eq: "Getting Started" }}
    	}
    ) {
      edges {
        node {
          html
          frontmatter {
            path
            title
            section
          }
        }
      }
    },
    contributing: allMarkdownRemark(
      filter: {
        frontmatter: { section: { eq: "Contributing" }}
    	}
    ) {
      edges {
        node {
          html
          frontmatter {
            path
            title
            section
          }
        }
      }
    },
    tutorials: allMarkdownRemark(
      filter: {
        frontmatter: { section: { eq: "Tutorials" }}
    	}
    ) {
      edges {
        node {
          html
          frontmatter {
            path
            title
            section
          }
        }
      }
    }
  }
`
