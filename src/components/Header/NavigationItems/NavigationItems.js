/*The right nav for the header*/

/*css object*/
import styles from './NavigationItems.module.css';
import React from 'react';
import NavigationItem from '../NavigationItem/NavigationItem';

const navigationItems = (props) => {

	let navLinks=[];
	navLinks.push(<NavigationItem to="/login" >Login/SignUp</NavigationItem>);

	if(props.userId){
		navLinks=[];
		navLinks.push(<NavigationItem key="Profile" to="/profile" >Profile</NavigationItem>);
		navLinks.push(<NavigationItem key="Logout" to="/logout" >Logout</NavigationItem>);
	}
	
	return (
		 <nav className={styles.NavigationItems}>
		     <ul>
		         <NavigationItem to="/">Home</NavigationItem>
		         {navLinks}
		     </ul>
   		</nav>
	);
};


	



export default navigationItems;