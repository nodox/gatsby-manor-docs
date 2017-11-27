import React from 'react';
import classNames from 'classnames';

import "../styles/footer.scss";

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      enableSticky: false,
      path: this.props.path,
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState((prevState, nextProps) => {
      let enable = nextProps.path.includes('/docs/cli/')
                    || nextProps.path.includes('/docs')
                    || nextProps.path.includes('/community');

      return {
        path: nextProps.path,
        enableSticky: false,
      };
    });
  }

  render() {
    let footerClass = classNames({
      'footer--container': true,
      'footer--container--sticky': this.state.enableSticky,
    });

    return (
      <div className={footerClass}>
        <span className="footer--copyright">Copyright © 2017 Gatsby Manor</span>
      </div>
    );
  }


}
