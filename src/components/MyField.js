
import React,{Component} from 'react';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

const MyField= (props) => {
   
    const textProps={
        hintText:props.hintText,
        floatingLabelText:props.floatingLabelText,
        name:props.name
        
    }
    const isVisible=props.permission!='H'?true:false;
    const isDisabled=props.permission!='W'?true:false;;
    if(!isVisible){
        return (<div style={{'display':'none'}}></div>);
    }
    
    return(
        <TextField {...textProps} disabled={isDisabled}/>
    );
};


export default MyField;