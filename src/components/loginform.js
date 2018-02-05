import React, { Component } from 'react';
import Header from './header';
import Main from './main';


export default class SignInForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {isAuthenticated: false};
  
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
      this.setState({isAuthenticated: true});
      event.preventDefault();
      fetch('http://test-container.hyd.ftd.com:6090/apis/getrole/', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          password:  event.target.password.value,
          userName: event.target.username.value,
        })
      }) .then((response) => response.json())
      .then((responseJson) => {
        console.log('-->',responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
    console.log('-->', event.target.username.value);
    console.log('-->', event.target.password.value);
    }
  
    render() {
      return (
    <div>
     
      
     {!this.state.isAuthenticated? 
     <form onSubmit={this.handleSubmit}>
           <br />
           <label>
           UserName:
           <input type="text" name="username" />
         </label>
         <br />
         <label>
           Password:
           <input type="text" name="password" />
         </label>
         <br />
          <input type="submit" value="Submit" />
        </form>
    :null}
        
{this.state.isAuthenticated ? 
  <div>
   <Header/>
   <Main />
   </div>
    : null
  }
       </div>
      );
    }
  }