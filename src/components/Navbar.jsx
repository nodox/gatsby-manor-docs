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
      { path: '/themes',
        title: 'Themes',
      },
      { path: '/contribute',
        title: 'Contribute',
      },
      { path: '/pricing',
        title: 'Pricing',
      },
    ]

    var isHomePage = (location.pathname === "/") ? true : false;
    let navBarSideMenuButtonClasses = classNames({
      'navbar--sidemenu--button': true,
      '-hidden': isHomePage,
    });

    return (
      <nav className="navbar navbar-dark">
        <a href="/" className="navbar-brand">Gatsby Manor</a>
        <ul className="navbar-nav">
          {links.map((obj, idx) => {
            if (location.pathname === '/') {
              return;
            } else {
              return (
                <li className="nav-item" key={idx}>
                  <Link className="nav-link" to={obj.path}>{obj.title}</Link>
                </li>
              );
            }
          })}
        </ul>
        <div className={navBarSideMenuButtonClasses} onClick={() => this.props.enableSideMenu(true)}>&#9776;</div>
      </nav>
    );
  }

}

export default Navbar;
