import React,{Component} from 'react';
import {connect} from 'react-redux';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import MyField from '../components/MyField';

class ProductForm extends Component{

    // constructor(props){
    //     super(props);

    //     // this.productDetails={
    //     //     name:'Rose',
    //     //     price:12,
    //     //     sku:123,
    //     //     status:'Active',
    //     //     code:'R123',
    //     //     decs:'This is description'
    //     // };
        
    //     // this.permissions={
    //     //     name:'H',
    //     //     price:'R',
    //     //     sku:'R',
    //     //     status:'R',
    //     //     code:'W',
    //     //     decs:'R'
    //     // }

    //     // this.state={
    //     //     productDetails:this.productDetails,
    //     //     permissions:this.permissions
    //     // };
       
    // }
    
    render(){
        
        const style={
            margin:12
        }

        console.dir(this.props.productDetails);
if(this.props.permission.name != undefined){
        return (
            
                <MuiThemeProvider>            
                    <form className="mb-4">
                        <MyField  hintText="Enter product name"
                            floatingLabelText="Name"
                            value={this.props.productDetails.name} permission={this.props.permission.name}/>
                            <br/>

                        <MyField  hintText="Enter product price"
                        floatingLabelText="Price"
                        value={this.props.productDetails.price} permission={this.props.permission.price}
                        />
                        <br/>

                      
                        <MyField
                        hintText="Enter product SKU"
                        floatingLabelText="SKU"
                        value={this.props.productDetails.sku} permission={this.props.permission.sku}
                        /><br />

                        <MyField
                        hintText="Enter product status"
                        floatingLabelText="Status"
                        value={this.props.productDetails.status} permission={this.props.permission.status}
                        /><br />

                        <TextField
                        hintText="Enter product code"
                        floatingLabelText="Code"
                        value={this.props.productDetails.code} permission={this.props.permission.code}
                        /><br />

                        <TextField
                        hintText="Enter product description"
                        floatingLabelText="Description"
                        value={this.props.productDetails.description} permission={this.props.permission.description}
                        /><br />

                        <RaisedButton label="Default" style={style}/>    
                        
                    </form>
                </MuiThemeProvider>
        );
    }else{
        return (
        <div></div>
        );
    }
    }
}

function mapStatetoProps(state){
    console.log(state.permission)
    //whatever returned will show up as props of this class i.e productsList
    return {
        productDetails: state.activeProduct,
        permission: state.permission
    };
}

export default connect(mapStatetoProps)(ProductForm);