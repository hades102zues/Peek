import React, { Component } from 'react';
import './App.css';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'; 


/*Components*/
import Layout from './Hoc/Layout/Layout.js';
import HomePage from './containers/HomePage/HomePage';
import Login from './components/Login/Login';
import LogoutPage from './components/LogoutPage/LogoutPage';
import UserPage from './components/User/User';

import { checkAuthState } from './store/actions/index';


class App extends Component {

	componentDidMount(){
		//do a locall check for auth details and move appropriately
		this.props.localAuthCheck();
	}



  render() {
	  	let routes = 
	  	  <Switch>
		    <Route path="/login" component={Login} />
		    <Route path="/" exact component={HomePage} />
		    <Redirect to="/" />
		  </Switch>;

		if(this.props.isUserAuthenticated){
			routes=<Switch>
				      <Route path= "/profile" component={UserPage}/>
				      <Route path="/logout" component={LogoutPage}/>
				      <Route path="/" exact component={HomePage} />
				      <Route path="/login" component={Login} />
				      <Redirect to="/" />
				      
		    	   </Switch>;
		}

    return (
	       <Layout> 
	       	{routes}
	       </Layout>
    );
  }
}

const mapStateToProps = state =>{
	return{
		isUserAuthenticated: state.loginForm.userId !== null
	};
};

const mapDispatchToProps = dispatch =>{
	return {
		localAuthCheck: ()=> dispatch(checkAuthState())
	};
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
