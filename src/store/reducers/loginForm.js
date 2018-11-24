import {
	AUTH_START,
	AUTH_SUCCESS,
	AUTH_FAIL,
	LOGOUT

} from '../actions/actionTypes';

const initialState = {
	loading: false,
	userId: null,
    idToken: null,
    expirationTime: null,
    error:null
};


const reducer = (state=initialState,  action) =>{
	switch(action.type){
		
		case AUTH_START:
		  return{
		  	...state,
		  	loading: !state.loading
		  };

		case AUTH_SUCCESS:
		return {
			...state,
			userId:action.userId,
			idToken: action.idToken,
			expirationTime: action.expirationTime
		};

		case AUTH_FAIL:
		return{
		  	...state,
		  	error:action.error
		  };

		case LOGOUT:
		return {
			...state,
			userId: null,
		    idToken: null,
		    expirationTime: null,
		    error:null
		};


		default:
		return state;
	}

};

export default reducer;