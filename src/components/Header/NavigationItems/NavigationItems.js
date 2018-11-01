/*The right nav for the header*/

/*css object*/
import styles from './NavigationItems.module.css';
import React from 'react';
import NavigationItem from '../NavigationItem/NavigationItem';

const navigationItems = () => (

   <nav className={styles.NavigationItems}>
     <ul>
         <NavigationItem>Home</NavigationItem>
         <NavigationItem>Login/SignUp</NavigationItem>
     </ul>
   </nav>
	
);


export default navigationItems;