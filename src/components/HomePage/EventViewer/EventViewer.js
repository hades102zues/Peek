
import React,{ Component }from 'react';
import styles from './EventViewer.module.css';
import Event from './Event/Event';
import axios from '../../../axios_instance/axios';



class EventViewer extends Component{

	
  constructor(props){
  	super(props);
  	this.state={
  		storyIds:[],  //contains all story ids retrieved from sever
      eventDetails:[], //holds the title and id of each event within a {}
      matchingTerms:[] // contains a list of event ids that might correspond to some event the user is looking for
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

  //stores event details
  eventDetailsStorer = (details) =>{
   let eventDetails = [...this.state.eventDetails]; //copy the state
        eventDetails.push(details); //add the details
 
    this.setState({eventDetails}); //update the state
  }

  //determines if an element exists in an array
   isElementInArray = (ele, currentMatchingTermsArr ) =>{
      let isElementFound = false;

      currentMatchingTermsArr.forEach( stateArrEle =>{
          if(ele===stateArrEle)
            isElementFound = true;

      });

      return isElementFound;
   }


    
   //this function compares the contents of two array to determine
   //if they are equal

   isArraysTheSame = (currentMatchingTermsArr) =>{


      const stateArr = [...this.state.matchingTerms];

      //this specifies if all terms in the state can be found in the 
      //list of possible matching terms

      let isAllElementsFound= true;

      if(stateArr.length<1)//not even possible for state to match
        return false; 

     stateArr.forEach(ele => {
      //if some element is not found then the arrays are not the same
          if(!this.isElementInArray(ele, currentMatchingTermsArr)){
             isAllElementsFound = false;
          }
      });

      
      return isAllElementsFound ;
   }




  //this function determines which events might match the user's input
  //by checking if the entered value is a substring of some event title 
  //and then stores a list of event ids which satify this criteria

  matchFinder = () =>{
    const eventDetails = [...this.state.eventDetails];


    const matchingTerms = eventDetails.reduce((incre, detail)=>{
        
        //get the title in lower case
        const titleInLowerCase = detail.title.toLowerCase();
        
        //check if the search input is a substring of the above
        if(titleInLowerCase.includes(this.props.searchInput.toLowerCase())){
          incre.push(detail.id);
          return incre

        }
        else
          return incre;
        

      }, []
    );

   
    
    console.log('matchingTerms', matchingTerms);
    console.log('currentTerms in state', this.state.matchingTerms);
    console.log('are arrays same:', this.isArraysTheSame(matchingTerms));
    
    if(!this.isArraysTheSame(matchingTerms)){
      console.log('STATE UPDATED');
       this.setState({matchingTerms});
     }
        

  }

  //this is necessary to prevent the app from going into an infinite loop
  //since we updating state within componentDidUpdate
  //if the matchingTerms are not the same then we should update state


  componentDidUpdate(){
    if(this.props.isUserSearching){
      this.matchFinder();
    }
    
  }


  render(){
    //contains all story ids retrieved from sever
  	const storyIds = [...this.state.storyIds];

    const matchingTerms = [...this.state.matchingTerms];

    let events = null;

    //if the matching terms is not empty, in other words the user is searching
    // then we need to display only those events
    //that fall in the search criteria. Otherwise simply display all events 

    //console.log('Latest matching terms in state', matchingTerms);
    if(matchingTerms.length){
        events = matchingTerms.map( id =>(
            <Event key={id} 
                  storyId={id} 
                  closerClicked = {this.onCloserClickedHandler}
                  getDetails = {this.eventDetailsStorer}
            />
          ));
    }else{
          events = storyIds.map( id =>(
          <Event key={id} 
                storyId={id} 
                closerClicked = {this.onCloserClickedHandler}
                getDetails = {this.eventDetailsStorer}
          />
        ));

    }


  	return (
      <div className={styles.EventViewer}>
          
         {events}

      </div>
	);
  }
	
}

export default EventViewer;