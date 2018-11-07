import React from 'react';
import styles from './Input.module.css';

const input = (props) =>{
	let output = null;

	switch(props.elementType){

		case 'input':
		  output=<input className={styles.Input} {...props.elementConfigs} />
		  break;

		default :
		output=<input className={styles.Input} {...props.elementConfigs} />
	}

	return (
		<div className={styles.InitalWidth}>
			{output}
		</div>

	);

};


export default input;