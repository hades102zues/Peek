import * as actionTypes from './actionTypes';


export const searchValueInputed = (searchValue) =>{
	return {
		type:actionTypes.SEARCH_VALUE_INPUTTED,
		payload: searchValue //input in the search bar
	}
};

export const userIsSearching = (searchStatus) =>{
	return {
		type:actionTypes.USER_IS_SEARCHING,
		payload: searchStatus
	};
};


export const backspaceOccured = (status) =>{
	return {
		type:actionTypes.BACKSPACE_OCCURED,
		payload: status
	};
};

export const searchStatusUpdate = (status)=>{
	return {
		type:actionTypes.SEARCH_STATUS_UPDATE,
		payload: status
	};
};

