import { combineReducers } from 'redux';

 import ProductsReducer from './reducer_products';
 import ActiveProduct from './reducer_active_product';

import {loginSubmitLoading,userDetails,isAuthenticated} from './reducer_authentication';

const rootReducer = combineReducers({
    loginSubmitLoading:loginSubmitLoading,
     products:ProductsReducer,
     activeProduct:ActiveProduct,
    
    isAuthenticated:isAuthenticated,
    userDetails:userDetails

});

export default rootReducer;
