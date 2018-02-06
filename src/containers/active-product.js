import React ,{Component} from 'react';
import {connect} from 'react-redux';

import ProductForm from './ProductForm';
import GenericForm from './generic-form';

class ProductDetail extends Component{
    
   

    render(){
      
        const style={
            border:'1px solid #ccc',
            padding:'10px'
        };

        if(!this.props.product){
             return (
                <div>
                    Product Detail Container:
                    <h3>   Select Product pls </h3>
                </div>
            );
        }
        
        return (

            <div className="panel panel-default col-sm-8" style={style}>
                <div className="panel-heading"> Product Detail Container</div>
                <div className="panel-body">
                    <h3>   {this.props.product.title} </h3>
                    <ProductForm/>
                </div>
            </div>

    
        );
    }
}

function mapStateToProps(state){
    return {
        product:state.activeProduct
    }
}

export default connect(mapStateToProps)(ProductDetail);