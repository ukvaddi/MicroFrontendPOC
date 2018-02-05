import React ,{Component} from 'react';
import {connect} from 'react-redux';

import {bindActionCreators} from 'redux';
import selectProduct from '../actions/index';

 class ProductsList extends Component{
    
    renderList(){
       console.dir(this.props.products);
        return this.props.products.map((product)=>{
            return (
                <li onClick={() => this.props.selectProduct(product) }
                    key={product.title} 
                    className="list-group-item">{product.title}</li>
            );
        });
    }
   
    render(){
        
       return (
           <ul className="list-group col-sm-4">
                {this.renderList()}
        
            </ul>   
        );
    }
}



function mapStatetoProps(state){
    //whatever returned will show up as props of this class i.e productsList
    return {
        products:state.products
    };
}

//anything which is returned from this function will end up as props  on the booklist container
function mapDispatchToProps(dispatch){
    //whenever selectBook action is called,the result should be passed to passed to all reducers
    return bindActionCreators({selectProduct:selectProduct},dispatch);
}

export default connect(mapStatetoProps,mapDispatchToProps)(ProductsList);