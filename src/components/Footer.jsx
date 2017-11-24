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

  componentDidMount() {
    this.setState({
      enableSticky: this.shouldBeSticky()
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState((prevState, nextProps) => {
      return {
        path: nextProps.path,
        enableSticky: this.shouldBeSticky(),
      };
    });
  }

  offset(el) {
    var rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
  }

  shouldBeSticky() {
    let footer = document.querySelector('.footer--container');
    let bottomEdge = this.offset(footer).top + footer.getBoundingClientRect().height;
    var isSticky =  bottomEdge < window.outerHeight ? true : false;
    return isSticky;
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
