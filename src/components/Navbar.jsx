import React from 'react';
import Link from 'gatsby-link';

const Navbar = (props) => {
  const { data } = props;
  const links = [
    { path: '/',
      title: 'Home',
    },
    { path: '/themes',
      title: 'Themes',
    },
    { path: '/docs',
      title: 'Docs',
    },
    { path: '/community',
      title: 'Community',
    },
    { path: '/github',
      title: 'Github',
    },
  ]

  return (
    <nav className="navbar navbar-dark">
      <a href="/" className="navbar-brand">Gatsby Manor</a>
      <ul className="navbar-nav navbar-overflow">
        {links.map((obj, idx) => {
          return (
            <li className="nav-item" key={idx}>
              <Link className="nav-link" to={obj.path}>{obj.title}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
