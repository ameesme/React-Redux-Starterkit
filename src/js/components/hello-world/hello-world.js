import React, { Component } from 'react';
import { Link } from 'react-router';

export default class HelloWorld extends Component {
  render() {
    return (
      <div className="soft">
        <h1>Hello world!</h1>
        <p>
          <Link to="/">
            <li>Home</li>
          </Link>
        </p>
      </div>
    );
  }
}

