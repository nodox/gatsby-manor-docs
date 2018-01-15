import React from 'react';
import classNames from 'classnames';

import "../styles/footer.scss";

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let footerClass = classNames({
      'footer--container': true,
    });

    return (
      <div className={footerClass}>
        <span className="footer--copyright">Copyright © 2017-2018 Gatsby Manor</span>
      </div>
    );
  }
}
