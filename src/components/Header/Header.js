/*This provides the site's header*/

import React,{ Component } from 'react';
import styles from './Header.module.css';
import NavigationItems from './NavigationItems/NavigationItems';

import { withRouter } from 'react-router-dom';


import { connect } from 'react-redux';


class Header extends Component{

	render(){
		return (
			<header className={styles.Header}>
					<NavigationItems userId={this.props.userId}/>					
			</header>
		);
	}
} 


const mapStateToProps = state =>{
	return {
		userId: state.loginForm.userId
	};
};

export default withRouter(connect(mapStateToProps)(Header));