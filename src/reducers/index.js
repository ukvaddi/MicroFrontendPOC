import { combineReducers } from 'redux';

<<<<<<< HEAD
import ProductsReducer from './reducer_products';
import ActiveProduct from './reducer_active_product'    ;
import permission from './reducer_getpermissions'    ;
import userpermissions from './reducer_addpermissions'    ;
=======
 import ProductsReducer from './reducer_products';
 import ActiveProduct from './reducer_active_product';
>>>>>>> 0d3a19b979bbf801d9702dc1b307365ad870113c

import {loginSubmitLoading,userDetails,isAuthenticated} from './reducer_authentication';

const rootReducer = combineReducers({
<<<<<<< HEAD
    products:ProductsReducer,
    activeProduct:ActiveProduct,
    permission: permission,
    userpermissions: userpermissions
=======
    loginSubmitLoading:loginSubmitLoading,
     products:ProductsReducer,
     activeProduct:ActiveProduct,
    
    isAuthenticated:isAuthenticated,
    userDetails:userDetails

>>>>>>> 0d3a19b979bbf801d9702dc1b307365ad870113c
});

export default rootReducer;
