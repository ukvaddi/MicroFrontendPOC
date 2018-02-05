import React,{Component} from 'react';

import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

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
            name:'W',
            price:'R',
            sku:'R',
            status:'R',
            code:'W',
            decs:'R'
        };

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
                        <TextField
                            hintText="Enter product name"
                            floatingLabelText="Name"
                            value={this.state.productDetails.name}
                            
                        /><br />

                        <TextField
                        hintText="Enter product price"
                        floatingLabelText="Price"
                        /><br />

                        <TextField
                        hintText="Enter product SKU"
                        floatingLabelText="SKU"
                        /><br />

                        <TextField
                        hintText="Enter product status"
                        floatingLabelText="Status"
                        /><br />

                        <TextField
                        hintText="Enter product code"
                        floatingLabelText="Code"
                        /><br />

                        <TextField
                        hintText="Enter product description"
                        floatingLabelText="Description"
                        /><br />

                        <RaisedButton label="Default" style={style}/>    
                        
                    </form>
                </MuiThemeProvider>
        );
    }
}