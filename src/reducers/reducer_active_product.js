import { GET_USER_PERMISSIONS, PRODUCT_SELECTED } from '../constants/ActionTypes'

export default function(state = {},action){
    
    switch(action.type){
        case PRODUCT_SELECTED:
            return action.payLoad;
    }
    
    return state;
    
}