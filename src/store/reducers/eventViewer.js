import * as actionTypes from '../actions/actionTypes';


const initialState={
	storyIds:[]
};


const reducer = (state=initialState, action) =>{

	switch(action.type){

		case actionTypes.STORE_IDS_FROM_SEVER:
		return {
			...state,
			storyIds: [...action.payload]
		};

		default:
		return state;
	}


	return state;
};

export default reducer;