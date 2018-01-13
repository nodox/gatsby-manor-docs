import React from 'react';
import Link from 'gatsby-link';
import classNames from 'classnames';


import "../styles/_sidenav.scss";

class SideNav extends React.Component {
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

    let sideMenuClasses = classNames({
      'sidenav--menu': true,
      '-open': this.props.displayMenu,
    });

    let sideNavBackgroundClasses = classNames({
      'sidenav--background': true,
      '-active': this.props.displayMenu,
    });

    return (
      <div>
        <div className={sideNavBackgroundClasses}></div>
        <nav className={sideMenuClasses}>
          <div className="sidenav--close--button" onClick={() => this.props.enableSideMenu(false)}>&times;</div>
          <span className="sidenav--brand">Gatsby Manor</span>
          <ul className="sidenav--list">
            {links.map((obj, idx) => {
              if (location.pathname === '/') {
                return;
              } else {
                return (
                  <li className="sidenav--list--item" key={idx} onClick={() => this.props.enableSideMenu(false)}>
                    <Link className="" to={obj.path}>{obj.title}</Link>
                  </li>
                );
              }
            })}
          </ul>
        </nav>
      </div>
    );
  }

}

export default SideNav;
