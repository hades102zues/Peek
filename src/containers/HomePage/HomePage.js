import React,{ Component } from 'react';
import EventViewer from './EventViewer/EventViewer';
import styles from './HomePage.module.css';
import SearchBar from '../../components/SearchBar/SearchBar';
import Container from '../../Hoc/Container/Container';


class HomePage extends Component{
 
  constructor(props){
  	super(props);
  	this.state={
  		searchInput:'', //holds what is captured in search bar
  		isUserSearching: false, //specifies wheter user is searching
      didUserBackspace: false, //specifies if the user had done a backspace
  	  searchingCompleted: false //necessary to stop use from running matchfinder unecessarily and causing an infinite loop on render()
    };
  }

  //this function captures whats in the search bar
  onSearchInputHandler = (event) =>{

    let isUserSearching=null;
   
    //if search value is atleast 1 character then the user is searching
    if (event.target.value.length) {
      isUserSearching= true;

      if(this.state.searchingCompleted){
        //console.log('Entering new search, searchingCompleted will go to false');
        this.searchingCompletedReseter ();
      }
    }
    else{
       isUserSearching= false;
       
    }

    
    //determines if user did a backspace
    let didUserBackspace =  (event.target.value.length < this.state.searchInput.length) ? true : false;
    //console.log('user backspaced?', didUserBackspace);

    //search bar not empty
    if(isUserSearching){
      this.setState({searchInput:event.target.value,
    				   isUserSearching,
               didUserBackspace

    				});
    }
    //searchbar empty
    else{//we should reset the searchInput to empty string since there is nothing in search bar
      this.setState({searchInput:'',  
               isUserSearching,
               didUserBackspace: false
            });
    }

  }

  //function resets the state
  userBackspaceReset = () =>{
    this.setState({didUserBackspace:!this.state.didUserBackspace});
  }

  //
  searchingCompletedReseter = () =>{
    //console.log('searching completed searchingCompleted will reset to true');
    this.setState({searchingCompleted: !this.state.searchingCompleted});
  }

  render(){

  	return (
		<div className={styles.HomePage}>
		  <Container>
			<SearchBar searching = {this.onSearchInputHandler}/>
		    <EventViewer 
		    	searchInput={this.state.searchInput}
		    	isUserSearching={this.state.isUserSearching}

          searchingCompleted = {this.state.searchingCompleted}
          searchingCompletedReseter = {this.searchingCompletedReseter}

          didUserBackspace={this.state.didUserBackspace}
          userBackspaceReset={this.userBackspaceReset}
		    />
		  </Container>
		</div>
 	
	);

  }
}




export default HomePage;