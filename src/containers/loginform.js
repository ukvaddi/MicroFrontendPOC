import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Header from '../components/header';
import Main from '../components/main';

import LoginComponent from '../components/login';
import {loginSubmitLoading,fetchUserDetails} from '../actions/authenticate';


 class SignInForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    
    console.log('-->', event.target.username.value);
    console.dir(this.props);
    
    const data={
      username:event.target.username.value,
      password:event.target.password.value
    }
    this.props.submitFormHndlr(data);
  }

  render() {

    const jsx = (<div>
                  <Header />
                  <Main />
                </div>);

    
    return (
      <div>
        {this.props.isAuthenticated? 
            jsx
          : <LoginComponent submitHandler={this.handleSubmit} loginSubmitLoading={this.props.loginSubmitLoading} loginStatus={this.props.isAuthenticated}/>}
      </div>
    );
  }
}


function mapStatetoProps(state){
  //whatever returned will show up as props of this class i.e productsList
  return {
    userDetails:state.userDetails,
    loginSubmitLoading:state.loginSubmitLoading,
    isAuthenticated:state.isAuthenticated
  };
}



const mapDispatchToProps = (dispatch) => {
  return {
    submitFormHndlr : (user) => dispatch(fetchUserDetails(user))
  };
};


//anything which is returned from this function will end up as props  on the this container
/* function mapDispatchToProps(dispatch){
  //whenever Authenticate action is called,the result should be passed to  all reducers
  return bindActionCreators({authentication:authentication},dispatch);
} */

export default connect(mapStatetoProps,mapDispatchToProps)(SignInForm);