import { combineReducers } from 'redux';

import ProductsReducer from './reducer_products';
import ActiveProduct from './reducer_active_product'    ;


const rootReducer = combineReducers({
    products:ProductsReducer,
    activeProduct:ActiveProduct
});

export default rootReducer;
