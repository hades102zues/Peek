import 
{ 
  STARTING_PULL,
  STORE_USER_EVENTS_FROM_DOWNLOAD,
  STORING_ERROR
} from './actionTypes';

import axios from 'axios';


export const pullStart = () =>{
	return {
		type: STARTING_PULL
	};
};

export const storyUserEventsFromDownload = (stories) =>{

	return{
		type: STORE_USER_EVENTS_FROM_DOWNLOAD,
		stories
	};
};

export const storeError = (error)=>{
	return{
		type: STORING_ERROR,
		error
	};
};	

export const getUserStoriesFromServer = (userId)=>dispatch=>{

	dispatch(pullStart());

	axios.get(`https://peek-5bc2a.firebaseio.com/${userId}/events.json`)
	.then(reponse =>{

		dispatch(pullStart());

		const storiesData = reponse.data;//{}
		const storiesArr = Object.keys(storiesData)
							.map( storyId =>{
								return {
									id: storyId ,
									title: storiesData[storyId].title,
									url: storiesData[storyId].url,
								};
							});
		dispatch(storyUserEventsFromDownload (storiesArr));
	})
	.catch(err=>{
		dispatch(pullStart());
		dispatch(storeError(err.response.data));
	});
};