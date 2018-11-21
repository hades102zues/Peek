import React, { Component } from 'react';
import './App.css';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux'; 


/*Components*/
import Layout from './Hoc/Layout/Layout.js';
import HomePage from './containers/HomePage/HomePage';
import Login from './components/Login/Login';
import LogoutPage from './components/LogoutPage/LogoutPage';

import { checkAuthState } from './store/actions/index';


class App extends Component {

	componentDidMount(){
		//do a locall check for auth details and move appropriately
		this.props.localAuthCheck();
	}



  render() {
    return (
	       <Layout> 
	          <Route path="/" exact component={HomePage} />
	          <Route path="/login" component={Login} />
	          <Route path="/logout" component={LogoutPage}/>
	       </Layout>
    );
  }
}


const mapDispatchToProps = dispatch =>{
	return {
		localAuthCheck: ()=> dispatch(checkAuthState())
	};
};
export default withRouter(connect(null, mapDispatchToProps)(App));
