export default function(state = null,action){
    
    switch(action.type){
        case 'BOOK_SELECTED':
            return action.payLoad;
    }
    
    return state;
    
}