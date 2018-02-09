import React,{Component} from 'react';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

const LoginComponent = (props) => {
    const style={
        border:'1px solid #ccc',
        padding:'50px',
        margin:'20% auto',
        width:'50%'
    };
    return (
        <MuiThemeProvider>   
        
        <form onSubmit={ (event) => props.submitHandler(event) } style={style}>
            {props.loginSubmitLoading?<h1>Fetching the user details....</h1>:''}
            {props.loginStatus == false?<h1>Invalid  user details....</h1>:''}    
           
            <TextField
            hintText="Enter username"
            floatingLabelText="Username :" name="username"
            /><br />

            <TextField
            hintText="Enter password"
            floatingLabelText="Password :" name="password"
            /><br />

            <RaisedButton label="Submit" type="submit" style={{marginTop:'30px'}}/>   
        </form>
        </MuiThemeProvider>   
    );
}

export default LoginComponent;
