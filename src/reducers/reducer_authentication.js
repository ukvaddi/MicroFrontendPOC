
export function loginSubmitLoading(state = false,action){
    switch(action.type){
        case 'AUTH_LOGIN_SUBMIT_LOADING' :
            return action.loginSubmitLoading;
        default :
            return state;
    }
}

export function isAuthenticated(state = null,action){
    switch(action.type){
        case 'AUTH_LOGIN_STATUS':
            return action.isAuthenticated;
        default :
            return state;

    }

}

export function userDetails(state = {},action){
    switch(action.type){
        case 'USER_DETAILS':
            return action.userDetail;
        default :
            return state;
    }
}