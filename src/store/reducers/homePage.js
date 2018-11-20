import * as actionTypes from '../actions/actionTypes';
const initialState = {
	searchInput:'', //holds what is captured in search bar
	isUserSearching: false, //specifies wheter user is searching
    didUserBackspace: false, //specifies if the user had done a backspace
    searchingCompleted: false
};


const reducer = (state=initialState, action) =>{
	switch(action.type){
		case actionTypes.SEARCH_VALUE_INPUTTED:
			return {
				...state,
				searchInput: action.payload
			};
			

		case actionTypes.USER_IS_SEARCHING:
			return{
				...state,
				isUserSearching: action.payload
			};
		case actionTypes.BACKSPACE_OCCURED:
			return {
				...state,
				didUserBackspace: action.payload

			};
		case actionTypes.SEARCH_STATUS_UPDATE:
			return {
				...state,
				searchingCompleted: action.payload

			};


	   default:
		return state;
	}

};

export default reducer;