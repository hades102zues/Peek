
import React,{ Component }from 'react';
import styles from './EventViewer.module.css';
import Event from './Event/Event';
import axios from '../../../axios_instance/axios';



class EventViewer extends Component{

	
  constructor(props){
  	super(props);
  	this.state={
  		storyIds:[]
  	};
  }
  

  componentDidMount(){
  	let idList=[];


	//this gets a list of stories ids and then truncates them,
	//then gets the stories for each id
	axios.get('/newstories.json')
	      //gets the id list and store it
		 .then((response)=>{
		 	idList=response.data.slice(0,19);//total of 20 ids
		 	this.setState({storyIds:idList});
		 })
		 .catch((error)=>console.log(error))
	 ;
  }
   
   //parameter is the Id of a specific story
   onCloserClickedHandler = (storyId) =>{
       //copy the state into a new array and filter out the incoming storyId
      const currentStoryIds = [...this.state.storyIds]
                        .filter((id)=>(
                            storyId!==id
                        ));
      this.setState({storyIds : currentStoryIds});
  }

  render(){
  	const storyIds = [...this.state.storyIds];

    const events = storyIds.map( id =>(
    	<Event key={id} 
            storyId={id} 
            closerClicked = {this.onCloserClickedHandler}
      />
    ));


  	return (
      <div className={styles.EventViewer}>
          
         {events}

      </div>
	);
  }
	
}

export default EventViewer;