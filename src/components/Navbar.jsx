import React from 'react';
import Link from 'gatsby-link';

import "../styles/_navbar.scss";

const Navbar = (props) => {
  const { data, location } = props;
  const links = [
    { path: '/themes',
      title: 'Themes',
    },
    { path: '/contribute',
      title: 'Contribute',
    },
    { path: '/donate',
      title: 'Donate',
    },
  ]

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
    </nav>
  );
}

export default Navbar;
