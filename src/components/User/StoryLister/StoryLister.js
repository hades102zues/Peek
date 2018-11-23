import React, { Component } from 'react';
import Story from './Story/Story';
import styles from './StoryLister.module.css';
import { connect } from 'react-redux';


import { getUserStoriesFromServer } from '../../../store/actions/index';


class StoryLister extends Component{


	componentDidMount(){
		//if the user is authenticated
		if(this.props.userId){
			this.props.getStories(this.props.userId);
		}
	}


	render(){
		return(
		<div className={styles.StoryLister}>
		  <Story 
		  	url
		  	title
		  />
		  <Story />
		  <Story />
		  <Story />
		</div>
		
		);
	}
	
}

const mapStateToProps = state =>{
	return {
		userId: state.loginForm.userId
	};
};

const mapDispatchToProps = dispatch =>{
	return {
		getStories : (uId)=>dispatch(getUserStoriesFromServer(uId)) 
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(StoryLister);