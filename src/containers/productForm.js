import React,{Component} from 'react';

import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import MyField from '../components/MyField';

export default class ProductForm extends Component{

    constructor(props){
        super(props);

        this.productDetails={
            name:'Rose',
            price:12,
            sku:123,
            status:'Active',
            code:'R123',
            decs:'This is description'
        };
        
        this.permissions={
            name:'H',
            price:'R',
            sku:'R',
            status:'R',
            code:'W',
            decs:'R'
        }

        this.state={
            productDetails:this.productDetails,
            permissions:this.permissions
        };
       
    }
    
    render(){
        
        const style={
            margin:12
        }

        return (
                <MuiThemeProvider>            
                    <form className="mb-4">
                        <MyField  hintText="Enter product name"
                            floatingLabelText="Name"
                            value={this.state.productDetails.name} permission={this.state.permissions.name}/>
                            <br/>

                        <MyField  hintText="Enter product price"
                        floatingLabelText="Price"
                        value={this.state.productDetails.price} permission={this.state.permissions.price}/>
                        <br/>

                      
                        <MyField
                        hintText="Enter product SKU"
                        floatingLabelText="SKU"
                        value={this.state.productDetails.sku} permission={this.state.permissions.sku}
                        /><br />

                        <MyField
                        hintText="Enter product status"
                        floatingLabelText="Status"
                        value={this.state.productDetails.status} permission={this.state.permissions.status}
                        /><br />

                        <TextField
                        hintText="Enter product code"
                        floatingLabelText="Code"
                        value={this.state.productDetails.code} permission={this.state.permissions.code}
                        /><br />

                        <TextField
                        hintText="Enter product description"
                        floatingLabelText="Description"
                        value={this.state.productDetails.decs} permission={this.state.permissions.decs}
                        /><br />

                        <RaisedButton label="Default" style={style}/>    
                        
                    </form>
                </MuiThemeProvider>
        );
    }
}