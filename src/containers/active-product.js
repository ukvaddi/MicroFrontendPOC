import React ,{Component} from 'react';
import {connect} from 'react-redux';

class ProductDetail extends Component{

    render(){
        if(!this.props.product){
             return (
                <div>
                    Product Detail Container:
                    <h3>   Select Product pls </h3>
                </div>
            );
        }
        
        return (
            <div>
                Product Detail Container:
                <h3>   {this.props.product.title} </h3>
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