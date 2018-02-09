import React, { Component } from 'react';

import Header from './header';
import Main from './main';
import SignInForm from '../containers/loginform';

export default class Root extends Component {
  constructor(props) {
    super(props);
    this.state = {isAuthenticated: false};
  }

  render() {
    return (
      
      <div>
        <div>
        <SignInForm/>      
       </div>
      </div>
    );
  }
}
