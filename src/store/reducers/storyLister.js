import * as actionTypes from '../actions/actionTypes';
const initialState = {
	loading:false,
	userStories: null,
	error:null
};


const reducer = (state=initialState, action)=>{

	switch(action.type){

		case actionTypes.STARTING_PULL:
			return {
				...state,
				loading: !state.loading
			};
		case actionTypes.STORING_ERROR:
			return{
				...state,
				error:action.error
			};

		case actionTypes.STORE_USER_EVENTS_FROM_DOWNLOAD:
			return{
				...state,
				userStories: action.stories
			};

		default:
			return state;

	}
};

export default reducer;