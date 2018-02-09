
import authenticate from '../actions/authenticate';

const ROOT_URL='http://test-container.hyd.ftd.com:6090/apis/getrole';


/*action creator which returns action ooj*/
export default function authenticate(user){
 
    const request=axios.post(ROOT_URL, {
      userName:  user.username,
      password: user.password
    })
    .then((response) =>{
        console.log(response);;
        authenticate(repsonse.data);
    });
    

    fetch('http://test-container.hyd.ftd.com:6090/apis/getrole/', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({password: user.password, userName: user.username})
      })
      .then((response) => response.json()).then((responseJson) => {

        return {
            type: 'AUTH_SUCCESS',
            payload: responseJson
        }

      })
      .catch((error) => {
        return {
            type: 'AUTH_FAILED',
            payload: responseJson
        }
      });

}