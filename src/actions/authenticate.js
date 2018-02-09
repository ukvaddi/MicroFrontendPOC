
export function loginSubmitLoading(submitFlag){
  debugger;
  return {
    type:"AUTH_LOGIN_SUBMIT_LOADING",
    loginSubmitLoading: submitFlag
  }
};

export function loginStatus(isAuthenticated){
  return {
    type:"AUTH_LOGIN_STATUS",
    isAuthenticated
  }
};

export function fetchUserDetails(user) {
  debugger;
  
  return (dispatch) => {

    dispatch(loginSubmitLoading(true));
    dispatch(loginStatus(null));

      fetch('http://test-container.hyd.ftd.com:6090/apis/getrole/',{
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({password: user.password, userName: user.username})
      })
          .then((response) => {
              if (!response.ok) {
                  throw Error(response.statusText);
              }
              
              dispatch(loginSubmitLoading(false));

              return response;
          })
          .then((response) =>  response.json() )
          .then(userDetail => {
            
            const status = userDetail.status == "success"?true:false;

            dispatch(loginStatus(status));
            
            dispatch({
              type:"USER_DETAILS",
              userDetail:{
                ...userDetail,
                isAuthenticated:status
              }
            });
              
            
         
          })
           .catch(() => dispatch(loginStatus(false)));
  };
};

