import React from 'react';
import styles from './Button.module.css';

const button = (props)=>{
	
 
	return (
		<button 
		  className={styles.Button}
		  style={{backgroundColor:props.color}}
		  disabled={props.disable}
		  onClick={ ()=> props.click(props.eventDetails) }
		 >
		{props.name}
		</button>
	);
};

export default button;