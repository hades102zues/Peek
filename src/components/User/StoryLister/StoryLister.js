import React, { Component } from 'react';
import Story from './Story/Story';
import styles from './StoryLister.module.css';
import { connect } from 'react-redux';


import { getUserStoriesFromServer } from '../../../store/actions/index';


class StoryLister extends Component{


	componentDidMount(){
		//if the user is authenticated
		if(localStorage.getItem('userId')){
			this.props.getStories(localStorage.getItem('userId'));
		}
	}






	render(){
		let stories=null;

		if(this.props.stories){
			stories = this.props.stories.map( storyObject=>{
			return <Story 
						key={storyObject.id}
						title={storyObject.title}
						url={storyObject.url}
			 		/>;
		    });
		}


		if (this.props.isLoading){
			stories = <p>Loading....</p>
		}


		return(
		<div className={styles.StoryLister}>
		  {stories}
		</div>
		
		);
	}
	
}

const mapStateToProps = state =>{
	return {
		userId: state.loginForm.userId,
		stories: state.storyLister.userStories,
		error: state.storyLister.error,
		isLoading: state.storyLister.loading !== false
	};
};

const mapDispatchToProps = dispatch =>{
	return {
		getStories : (uId)=>dispatch(getUserStoriesFromServer(uId)) 
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(StoryLister);