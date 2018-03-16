import React from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Navbar from '../components/Navbar'
import SideNav from '../components/SideNav'
import Footer from '../components/Footer';
import Layout from '../layouts/layout'
import "../styles/home.scss";

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Layout layoutLocation={this.props.location}>
        <div> Hello World! Welcome to Index of Docs!</div>
      </Layout>
    );
  }
}


export default IndexPage
