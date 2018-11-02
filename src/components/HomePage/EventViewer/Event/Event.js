import React,{ Component } from 'react';
import styles from './Event.module.css';

/*Components*/
import Closer from '../../../../UI/Closer/Closer';
import ProfilePic from '../../../ProfilePic/ProfilePic';
import Button from '../../../../UI/Button/Button';

/*data fetchers*/
import axios from '../../../../axios_instance/axios.js';


class Event extends Component{
 
    constructor(props){
    	super(props);
    	this.state={
    		details:{}, //houses the info from the server
    		loaded:false //specifies that the data came back
    	};
    }

 	componentDidMount(){
     //convert story id to a string
	   const idString = this.props.storyId.toString();
     //create the url
	   const url = `item/${idString}/.json`;

     //get the data from the server 
		 axios.get(url)
			 .then((response)=>{
			 	console.log(response.data);
			 	//save the story object inside the details state
			 	this.setState({details:response.data, loaded:true});
			 })
			 //come back
			 .catch((error)=>{});
		 ;
 	}
 
  render(){
    
  	//we know that we will not get our data on the first render
    let loadedEvent = <h1></h1>;

    	//once we do get out data..
        if (this.state.loaded){

        	const details = {...this.state.details};
  	        //console.log(details);

        	loadedEvent= (
        	<div className={styles.Event}>
		        <div className={styles.EventContainer}>
		       	  
		       	     <h5>{details.by}</h5>
				     <Closer />
				     <div className={styles.TopLine}></div>

				     <div className={styles.Aid} >   
					 	<ProfilePic /> 
					 	<h3>{details.title}</h3>
				     </div>
				  	<p>
				  	 Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
				  	 sed do eiusmod tempor incididunt ut labore et dolore magna 
				  	 aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
				  	 laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.
				  	</p>
				   <div className={styles.BotLine}></div>
		 			<h5>date</h5>
		 		   
		 		   	<Button name="View"/>
		 		   
		       </div>

			</div>
        	);

        }

	  return loadedEvent

  }
		
}


export default Event;

