import React from 'react'
import Link from 'gatsby-link'
import Jumbotron from '../components/Jumbotron'
import Img from "gatsby-image";

import '../styles/themes.scss';

export default class Themes extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {
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
        <Jumbotron center data={data.hero} />
        <div className="themes">
          {this.props.data.allMarkdownRemark.edges.map((obj, idx) => {
            return (
              <div className="themes-card" key={idx}>
                <Link to={obj.node.frontmatter.path} className="">
                  <Img
                    title="Theme image"
                    alt="title theme"
                    sizes={obj.node.frontmatter.themesMasterImage.childImageSharp.sizes}
                  />
                  <div className="theme-card--name">
                    <div className="name">{obj.node.frontmatter.title}</div>
                  </div>
                </Link>
              </div>
            )})
          }
        </div>
      </div>
    )

  }

}

export const pageQuery = graphql`
  query ThemesGalleryQuery {
    allMarkdownRemark(filter: {
      id: {
        regex: "/themes/"
      }
    }) {
      edges {
        node {
          id
          frontmatter {
            title
            path
            themesMasterImage {
              childImageSharp {
                sizes(maxWidth: 1200) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    }
  }
`;
