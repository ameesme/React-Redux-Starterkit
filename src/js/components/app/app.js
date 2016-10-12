import React, { Component, PropTypes } from 'react';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.node
  }

  render() {
    const { children } = this.props;
    return (
      <div id="application">
        <div className="main grid">
          <div className="content column soft--large">
            {children}
          </div>
        </div>
      </div>
    );
  }
}
