
import React,{ Component }from 'react';
import styles from './EventViewer.module.css';
import Event from './Event/Event';
import axios from '../../../axios_instance/axios';

import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';




class EventViewer extends Component{

	
  constructor(props){
  	super(props);
  	this.state={
      totalIdsExpecting: 50,//total number of ids app will generate from
      matchingTerms:[], // contains a list of event ids that might correspond to some event the user is looking for
      totalEventDeatilsGot: 0, //counts the total amount of id-titles upon app initiation
      eventDetails:[], //holds the title and id of each event within a {}
    };
  }
  

  componentDidMount(){
    console.log('mounted');
    this.props.fetchIds(this.state.totalIdsExpecting);


  	//this gets a list of stories ids and then truncates them,
  	//then gets the stories for each id
  	// axios.get('/newstories.json')
  	//       //gets the id list and store it
  	// 	 .then((response)=>{
  	// 	 	idList=response.data.slice(0, this.state.totalIdsExpecting);
  	// 	 	this.setState({storyIds:idList});
  	// 	 })
  	// 	 .catch((error)=>console.log(error))
  	//  ;

  }
   


   //parameter is the Id of a specific story
   onCloserClickedHandler = (storyId) =>{
       //copy the state into a new array and filter out the incoming storyId
      const currentStoryIds = [...this.props.storyIds]
                        .filter((id)=>(
                            storyId!==id
                        ));
      this.props.storeIds(currentStoryIds);
      //this.setState({storyIds : currentStoryIds});
  }


  //stores event details
  eventDetailsStorer = (details) =>{

   if(this.state.totalEventDeatilsGot!==this.state.totalIdsExpecting){
       let eventDetails = [...this.state.eventDetails]; //copy the state
            eventDetails.push(details); //add the details

       let totalEventDeatilsGot = this.state.totalEventDeatilsGot;
       totalEventDeatilsGot++;
     
        this.setState({eventDetails, totalEventDeatilsGot}); //update the state
      }
   }


  //determines if an element exists in an array
   isElementInArray = (ele, arr ) =>{
      let isElementFound = false;

      arr.forEach( arrEle =>{
          if(ele===arrEle)
            isElementFound = true;

      });

      return isElementFound;
   }


    
   //this function compares the contents of two array to determine
   //if they are equal

   isArraysTheSame = (currentMatchingTermsArr, stateArr) =>{

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
    const stateArr = [...this.state.matchingTerms];

    const matchingTerms = eventDetails.reduce((incre, detail)=>{
        
        //get the title in lower case
        const titleInLowerCase = detail.title.toLowerCase();
        
        //check if the search input is a substring of the above
        if(titleInLowerCase.includes(this.props.searchInput.toLowerCase())){
          incre.push(detail.id);
          return incre;

        }
        else
          return incre;
        

      }, []
    );

   
    
    // console.log('matchingTerms', matchingTerms);
    // console.log('currentTerms in state', this.state.matchingTerms);
    // console.log('are arrays same:', this.isArraysTheSame(matchingTerms));
    
    if(this.props.didUserBackspace){
      // console.log('updating cause user backspace');
      this.props.userBackspaceReset();
      this.setState({matchingTerms});
      return;
    }

    //if user enters new search term or did then update
    if(!this.isArraysTheSame(matchingTerms, stateArr)){
      // console.log('STATE UPDATED');
       this.setState({matchingTerms});
       // console.log('backspace', this.props.didUserBackspace );
     }

     // console.log('Completed search so going true');
     this.props.searchingCompletedReseter();

  }

  //this is necessary to prevent the app from going into an infinite loop
  //since we updating state within componentDidUpdate
  //if the matchingTerms are not the same then we should update state


  componentDidUpdate(){
    if(this.props.isUserSearching && !this.props.searchingCompleted){
      this.matchFinder();
    }
    
  }

  
  render(){
  	const storyIds = [...this.props.storyIds];
    const matchingTerms = [...this.state.matchingTerms];
    let finalOutput =  null; //this is what will be rendered

    //creates all the components from the ids received from server
    let events = storyIds.map( id =>(
            <Event key={id} 
                  storyId={id} 
                  closerClicked = {this.onCloserClickedHandler}
                  getDetails = {this.eventDetailsStorer}
            />
    ));

    //console.log('render', this.state.totalEventDeatilsGot);

    //this ensures that only those events that are relevant to search
    //criteria are displayed

    if(matchingTerms.length>=1){//if the user is searching
    
        finalOutput = events.reduce( (incre, eventComponent) => {
           
            //check if the component's id is one of the terms in 
            //the matchingTerm's list of ids and if so add it to the new list
            if( this.isElementInArray(eventComponent.props.storyId, matchingTerms)){
               incre.push(eventComponent);
               return incre;
            }
            else //otherwise don't touch the list and carry on to the next item
              return incre;
         }, []);
    }
    
    else //Otherwise simply display all events
      finalOutput = [...events];


  	return (
      <div className={styles.EventViewer}>
          
         {finalOutput}

      </div>
	);
  }
	
}

const mapStateToProps = state =>{
    return {
      storyIds: state.eventViewer.storyIds
    };
};


const mapDispatchToProps = dispatch =>{
  return {
    fetchIds: (idTotal)=>dispatch(actions.fetchIdsFromServer(idTotal)),
    storeIds: (idList)=>dispatch(actions.storeIdsFromSever(idList))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(EventViewer);