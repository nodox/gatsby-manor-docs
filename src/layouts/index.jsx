import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';

import '../styles/index.scss'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Navbar />
    <div className="">
      {children()}
    </div>
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
