import React, {Component} from 'react';
import Header from './header';
import Main from './main';

import LoginComponent from './login';

export default class SignInForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      isAuthenticated: true
    });
   
	
    // fetch('http://test-container.hyd.ftd.com:6090/apis/getrole/', {
    //   method: 'POST',
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({password: event.target.password.value, userName: event.target.username.value})
    // })
    // .then((response) => response.json()).then((responseJson) => {
    //   console.log('-->', responseJson);
    //   this.setState({
    //     isAuthenticated: true,
    //     ...responseJson
    //   });
    // })
    // .catch((error) => {
    //   console.error(error);
    // });


    console.log('-->', event.target.username.value);
    console.log('-->', event.target.password.value);

  }

  render() {
    const jsx = <div>
      <Header {...this.state}/>
      <Main {...this.state}/>
    </div>;
    return (
      <div>
        {this.state.isAuthenticated
          ? jsx
          : <LoginComponent submitHandler={this.handleSubmit}/>}
      </div>
    );
  }
}