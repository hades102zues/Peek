import React,{ Component } from 'react';
import EventViewer from './EventViewer/EventViewer';
import styles from './HomePage.module.css';
import SearchBar from '../../components/SearchBar/SearchBar';
import Container from '../../Hoc/Container/Container';

/*redux*/
import { connect } from 'react-redux';

/*actionCreators*/
import * as actions from '../../store/actions/index';

class HomePage extends Component{
 


  //this function captures whats in the search bar
  onSearchInputHandler = (event) =>{

    let isUserSearching=null;
   
    //if search value is atleast 1 character then the user is searching
    if (event.target.value.length) {
      isUserSearching= true;

      if(this.props.searchStatus){
        //console.log('Entering new search, searchingCompleted will go to false');
        this.searchingCompletedReseter ();
      }
    }
    else{
       isUserSearching= false;
       
    }

    
    //determines if user did a backspace
    if((event.target.value.length < this.props.input.length)){
        this.props.userBackspaced(true);
    }
   

    //search bar not empty
    if(isUserSearching){
      this.props.onSearchInputed(event.target.value);
      this.props.userSearching(isUserSearching);
    }

    //searchbar empty
    else{//we should reset our variables since nothing is in the search bar, once again
      this.props.onSearchInputed('');
      this.props.userSearching(isUserSearching);
      this.props.userBackspaced(false);

    }

  }

  //function resets the state
  userBackspaceReset = () =>{
    this.props.userBackspaced(!this.props.backspace);
  }

  //
  searchingCompletedReseter = () =>{
    //console.log('searching completed searchingCompleted will reset to true');
    this.props.searchCompleted(!this.props.searchStatus);
  }

  render(){

  	return (
		<div className={styles.HomePage}>
		  <Container>
			<SearchBar searching = {this.onSearchInputHandler}/>
		    <EventViewer 
		    	searchInput={this.props.input}
		    	isUserSearching={this.props.isUserSearching}

          searchingCompleted = {this.props.searchStatus}
          searchingCompletedReseter = {this.searchingCompletedReseter}

          didUserBackspace={this.props.backspace}
          userBackspaceReset={this.userBackspaceReset}
		    />
		  </Container>
		</div>
 	
	);

  }
}


const mapStateToProps = state =>{
  return {
      input: state.homePage.searchInput,
      backspace : state.homePage.didUserBackspace,
      isUserSearching: state.homePage.isUserSearching,
      searchStatus: state.homePage.searchingCompleted
  };
};

const mapDispatchToProps = dispatch =>{
  return {
    onSearchInputed : (value)=> dispatch(actions.searchValueInputed(value)),
    userSearching : (status)=> dispatch(actions.userIsSearching(status)),
    userBackspaced : (status)=>dispatch(actions.backspaceOccured(status)),
    searchCompleted: (status)=>dispatch(actions.searchStatusUpdate(status))

  };
};

export default connect(mapStateToProps, mapDispatchToProps )(HomePage);