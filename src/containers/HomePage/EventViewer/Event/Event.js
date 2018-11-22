import React,{ Component } from 'react';
import styles from './Event.module.css';

/*Components*/
import Closer from '../../../../UI/Closer/Closer';
import ProfilePic from '../../../../components/ProfilePic/ProfilePic';
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

			 	
			 	this.props.getDetails({
			 		id: response.data.id,
			 		title: response.data.title
			 	});

			 	//save the story object inside the details state
			 	this.setState({details:response.data, loaded:true});
			 })
			 //come back
			 .catch((error)=>{});
		 ;
 	}
 
  render(){
    
  	//we know that we will not get our data on the first render
    let loadedEvent = ( 
    	  <div className={styles.Event}>
    		<h1>Loading....</h1>
    	  </div>

    	);

    	//once we do get out data..
        if (this.state.loaded){

        	const details = {...this.state.details};
  	        //console.log(details);

        	loadedEvent= (
        	<div className={styles.Event}>
		        <div className={styles.EventContainer}>
		       	  
		       	     <h5>{details.by}</h5>
				     <Closer 
				         clicked={this.props.closerClicked}
				         storyId={this.props.storyId}
                     />
				     <div className={styles.TopLine}></div>

				     <ProfilePic  storyId={details.id} />
				     <div className={styles.Aid} >   
					 	 
					 	<h3>{details.title}</h3>
				     </div>
				  
				   <div className={styles.BotLine}></div>
		 			<h5>date</h5>
		 		   
		 		   	<a href={details.url} 
		 		   	   target="_blank"
		 		   	   rel="noopener noreferrer"
		 		   	>
		 		   	  <Button name="View"/>
		 		   	</a>
		 		   	<Button 
		 		   	      clicked={this.props.addClicked}
		 		   	        name="Add" 
		 		   	        color="#44a28a" 
		 		   	        eventDetails={{...details}}
		 		   	/>
		 		   
		 		   
		       </div>

			</div>
        	);

        }

	  return loadedEvent

  }
		
}


export default Event;

