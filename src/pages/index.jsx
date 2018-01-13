import React from 'react';
import Link from 'gatsby-link';
import Highlight from '../components/Highlight';
import Showcase from '../components/Showcase';
import CodeSnippet from '../components/CodeSnippet';

import "../styles/home.scss";

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const data = {
      hero: {
        lead: {
          title: 'Themes for GatsbyJS',
          partOne: 'Easy to setup. Easy to customize. Easy to deploy.',
          callToAction: {
            text: 'View Themes',
            path: '/themes',
          },
        },
      },
      highlights: [
        {
          headline: 'Select a Theme',
          content: 'Browse our theme library with over 15 themes to choose from. \
                    Use Jay, our CLI tool, to download \
                    and mount your favorite theme...for free!',
        },
        {
          headline: 'Customize the template',
          content: 'Update the template with relevant information. Tweak the UI of \
                    the theme. Not satisfied? Use Jay to download another theme \
                    and start over.',
        },
        {
          headline: 'Deploy the website',
          content: 'All our themes are deployment ready. Use your favorite web hosting \
                    service to build and serve the website. \
                    Netfliy is our favorite.',
        },
      ],
    }

    return (
      <div>
        <Showcase data={data.hero} images={this.props.data}/>

        <div className="home-container">
          <div className="home--section">
            <h1>How it works</h1>
          </div>
          <div className="home--highlight">
            {data.highlights.map((obj, idx) => {
              return (
                <Highlight key={idx} data={obj} />
              );
            })}
          </div>
        </div>
      </div>
    );
  }

}

export default IndexPage

export const pageQuery = graphql`
  query ShowcaseThemeImagesQuery {
    parallelismImage: imageSharp(id: { regex: "/parallelism/" }) {
      sizes(maxWidth: 1670 ) {
        ...GatsbyImageSharpSizes
      }
    },
    identityImage: imageSharp(id: { regex: "/identity/" }) {
      sizes(maxWidth: 1670 ) {
        ...GatsbyImageSharpSizes
      }
    },
    heliosImage: imageSharp(id: { regex: "/helios/" }) {
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
