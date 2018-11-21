import * as actionTypes from './actionTypes';
import axios from 'axios';



export const authStart = () =>{
	return {
	   type:actionTypes.AUTH_START
	}; 
};


export const authSuccess = (userId, idToken, expirationTime) =>{
  return {
    type: actionTypes.AUTH_SUCCESS,
    userId,
    idToken,
    expirationTime
  };
};

export const authFail = (error) =>{
  return{
    type:actionTypes.AUTH_FAIL,
    error
  };
}


export const logout = () =>{

  //clear local storage 
    localStorage.removeItem('userId');
    localStorage.removeItem('idToken');
    localStorage.removeItem('expirationDate');

  //clear state auth details
  return {
    type: actionTypes.LOGOUT
  };
};

//this function is used to auto logout the user
  export const autoLogoutUser = (expirationTime)=>{
    
    return dispatch => {
      setInterval(()=>{dispatch(logout())}, expirationTime);
    };
  };


//this function contacts the auth server and stores the auth data

export const authenticateUser = (email, password, authState) => dispatch => {
  //enter the loading phase
    dispatch(authStart());

  //this variable is used to target the post to the correct url
  //we initially expect the authsate to be at login 

  let state='verifyPassword';

  if(authState === 'signup')
    state='signupNewUser';


  axios.post(`https://www.googleapis.com/identitytoolkit/v3/relyingparty/${state}?key=AIzaSyAyiUB4QKasmTqRPVakfJWdEmlUBDdjHFc`, {
  	email,
  	password,
  	returnSecureToken : true
  })
  .then(response => {
  	
    //exit the loading phase
    dispatch(authStart());

    //set an auto logout
    dispatch(autoLogoutUser(Number(response.data.expiresIn) * 1000)); //seconds

    //store the auth data
  	dispatch(authSuccess(response.data.localId, response.data.idToken, Number(response.data.expiresIn)));
    
    //store auth data in a persistent manner
    const expirationDate = new Date(new Date().getTime() + Number(response.data.expiresIn) * 1000);
    localStorage.setItem('userId', response.data.localId);
    localStorage.setItem('idToken', response.data.idToken);
    localStorage.setItem('expirationDate', expirationDate);
  })
  .catch( err => {
    //exit the loading phase
    dispatch(authStart());
    dispatch(authFail(err.response.data.error));
    
  });
  //send the request with email and password

};

//depending on what auth details are stored locally,
//the user is either auto logged in or logged out
export const checkAuthState = ()=>{
    return dispatch =>{
       
        if(localStorage.getItem('userId')){ //if auth details exist 

            const expirationDate = new Date( localStorage.getItem('expirationDate'));
            if(new Date() > expirationDate){
               //log out
               dispatch(logout());
            }
            else{
              
              const newExpirationTime= expirationDate.getSeconds() - new Date().getSeconds();
              
              //log in
              dispatch( authSuccess(localStorage.getItem('userId'), 
                                    localStorage.getItem('idToken'),
                                    newExpirationTime
                          
               ));


              // //reset the auto logout              
              // dispatch(autoLogoutUser(newExpirationTime*1000));
            }

        }
    };
}