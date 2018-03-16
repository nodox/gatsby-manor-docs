import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Navbar from '../components/Navbar'
import SideNav from '../components/SideNav'
import Footer from '../components/Footer';

import '../styles/index.scss'

class Layout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    var location = this.props.layoutLocation;

    return (
      <div>
        <Helmet
          title="Gatsby Manor, themes for GatsbyJS"
          meta={[
            { property: 'og:image', content: 'https://storage.googleapis.com/gatsby_manor_assets/gatsbymanor_og_image.jpg' },
            { property: 'og:url', content: 'https://gatsbymanor.com' },
            { property: 'og:title', content: 'Themes for GatsbyJS' },
            { property: 'og:description', content: 'Browse our gallery of themes. Use the theme with GatsbyJS.' },
          ]}
        />
        <Navbar
          location={location}
          enableSideMenu={(state) => this.setSideMenuState(state)} />
        <div className="">
          {this.props.children}
        </div>
        <Footer path={location.pathname}/>
      </div>
    );
  }
}

export default Layout
