import React from 'react';
import styles from './Button.module.css';

const button = (props)=>{
	
	return (
		<button 
		  className={styles.Button}
		  style={{backgroundColor:props.color}}
		>
		{props.name}
		</button>
	);
};

export default button;