/*The left nav for the header*/
import React from 'react';

/*css object*/
import styles from './NavigationItemsL.module.css';

/*components*/
import NavigationItem from '../NavigationItem/NavigationItem';

const navigationItemsL = () => (

   <nav className={styles.NavigationItemsL}>
     <ul>
         <NavigationItem>Home</NavigationItem>
     </ul>
   </nav>
	
);


export default navigationItemsL;