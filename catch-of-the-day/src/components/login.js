import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Login extends Component {

  static propTypes = {
    authenticate: PropTypes.func.isRequired
  };

  render() {
    return (
      <div>
        <nav className="login">
          <h2>Inventory</h2>
          <p>Sign in to manage</p>
          <button className="github" onClick={() => this.props.authenticate('Github')}>Login with github</button>
          <button className="facebook" onClick={() => this.props.authenticate('Facebook')}>Login with facebook</button>
          <button className="twitter" onClick={() => this.props.authenticate('Twitter')}>Login with twitter</button>
        </nav>
      </div>
    )
  }
};
