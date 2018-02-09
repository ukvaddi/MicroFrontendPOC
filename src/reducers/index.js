import { combineReducers } from 'redux';

import ProductsReducer from './reducer_products';
import ActiveProduct from './reducer_active_product'    ;
import permission from './reducer_getpermissions'    ;
import userpermissions from './reducer_addpermissions'    ;

import {loginSubmitLoading,userDetails,isAuthenticated} from './reducer_authentication';

const rootReducer = combineReducers({
    products:ProductsReducer,
    activeProduct:ActiveProduct,
    permission: permission,
    userpermissions: userpermissions,
    loginSubmitLoading:loginSubmitLoading,
    
    isAuthenticated:isAuthenticated,
    userDetails:userDetails
});

export default rootReducer;
