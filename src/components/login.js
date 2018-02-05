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


            <TextField
            hintText="Enter username"
            floatingLabelText="Username :" name="userName"
            /><br />

            <TextField
            hintText="Enter password"
            floatingLabelText="Password :" name="password"
            /><br />

            <RaisedButton label="Default" type="submit" style={{marginTop:'30px'}}/>   


        </form>
        </MuiThemeProvider>   
    );
}

export default LoginComponent;