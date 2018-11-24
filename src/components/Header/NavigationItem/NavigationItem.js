import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavigationItem.module.css';

const navigationItem = (props) =>(
	<li	className={styles.Li}>
	  <NavLink to={props.to}  
	    activeClassName={styles.Active}
	    exact 
	  >
	    {props.children}
	  </NavLink>
	</li>
	
);

export default navigationItem;