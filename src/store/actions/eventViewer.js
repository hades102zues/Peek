import * as actionTypes from './actionTypes';
import axios from '../../axios_instance/axios';





export const storeIdsFromSever = (idList)=>{
	return {
		type: actionTypes.STORE_IDS_FROM_SEVER,
		payload: [...idList]
	};
};

export const fetchIdsFromServer = (totalIdsExpecting)=>{
	return dispatch=>{

		let idList=[];


		//this gets a list of stories ids and then truncates them,
		//then gets the stories for each id
		axios.get('/newstories.json')
		      //gets the id list and store it
			 .then((response)=>{
			 	idList=response.data.slice(0, totalIdsExpecting);
			 	dispatch(storeIdsFromSever(idList));
			 	
			 })
			 .catch((error)=>console.log(error));
	};
}