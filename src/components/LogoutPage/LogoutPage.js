import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logout } from '../../store/actions/index';
import { Redirect } from 'react-router-dom';

class LogoutPage extends Component {

	componentDidMount(){
		this.props.logoutUserOut();
	}
	

	render(){
		return <Redirect to='/'/>;
	}
	
}


const mapDispatchToProps = dispatch => {
	return {
		logoutUserOut: ()=>dispatch(logout())
	};
};
export default connect(null, mapDispatchToProps)(LogoutPage);