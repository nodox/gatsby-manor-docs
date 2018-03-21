import React from 'react';
import Link from 'gatsby-link';
import classNames from 'classnames';

import "../styles/_navbar.scss";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const { data, location } = this.props;
    const links = [
      {
        path: 'https://gatsbymanor.com/themes',
        title: 'Themes',
      },
    ]

    return (
      <nav className="navbar navbar-dark">
        <a href="https://gatsbymanor.com" className="navbar-brand">Gatsby Manor</a>
        <ul className="navbar-nav">
          {links.map((obj, idx) => {
            return (
              <li className="nav-item" key={idx}>
                <a className="nav-link" href={obj.path}>{obj.title}</a>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }

}

export default Navbar;
