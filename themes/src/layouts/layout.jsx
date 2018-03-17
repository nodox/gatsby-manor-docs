import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';

import '../styles/_reboot.scss'
import '../styles/_reset.scss'
import styles from '../styles/layout.module.scss'

class Layout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    var location = this.props.layoutLocation;

    return (
      <div className={styles['site']}>
        <Helmet
          title="Gatsby Manor, themes for GatsbyJS"
          meta={[
            { property: 'og:image', content: 'https://storage.googleapis.com/gatsby_manor_assets/gatsbymanor_og_image.jpg' },
            { property: 'og:url', content: 'https://gatsbymanor.com' },
            { property: 'og:title', content: 'Themes for GatsbyJS' },
            { property: 'og:description', content: 'Browse our gallery of themes. Use the theme with GatsbyJS.' },
          ]}
        />
        <Navbar location={location} />
        <div className={styles['main']}>
          {this.props.children}
        </div>
        <Footer path={location.pathname}/>
      </div>
    );
  }
}

export default Layout
