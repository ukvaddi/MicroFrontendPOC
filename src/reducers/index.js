import { combineReducers } from 'redux';

import ProductsReducer from './reducer_products';
import ActiveProduct from './reducer_active_product'    ;
import permission from './reducer_getpermissions'    ;
import userpermissions from './reducer_addpermissions'    ;


const rootReducer = combineReducers({
    products:ProductsReducer,
    activeProduct:ActiveProduct,
    permission: permission,
    userpermissions: userpermissions
});

export default rootReducer;
