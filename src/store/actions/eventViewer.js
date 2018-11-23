import * as actionTypes from './actionTypes';
import axios from '../../axios_instance/axios';
import axiosServer from 'axios';





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


//save story added by user to server
export const saveUserEvent = (record, userId) => dispatch=> {

console.log(record);
	axiosServer.patch(`https://peek-5bc2a.firebaseio.com/${userId}/events/${record.eventId}.json`, {
		title: record.title,
		url: record.url,
		user:record.user
		
	})
	.then( response =>{console.log('success')})
	.catch(err =>{console.log(err)});

};