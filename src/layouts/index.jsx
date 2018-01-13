import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Navbar from '../components/Navbar'
import SideNav from '../components/SideNav'
import Footer from '../components/Footer';

import '../styles/index.scss'

class TemplateWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displaySideMenu: false,
    }
  }

  setSideMenuState(menuState) {
    this.setState({
      displaySideMenu: menuState,
    });
  }

  render() {
    return (
      <div>
        <Helmet
          title="Gatsby Default Starter"
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />
        <Navbar
          location={this.props.location}
          enableSideMenu={(state) => this.setSideMenuState(state)} />
        <div className="">
          {this.props.children()}
        </div>
        <SideNav
          location={this.props.location}
          displayMenu={this.state.displaySideMenu}
          enableSideMenu={(state) => this.setSideMenuState(state)} />
        <Footer path={this.props.location.pathname}/>
      </div>
    );
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
