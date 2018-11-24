import React from 'react';
import styles from './Input.module.css';

const input = (props) =>{
	let output = null;

	let classes = [];
	classes.push(styles.Input);

	if(!props.valid && props.wasTouched){
		classes.push(styles.Invalid);
	}
    
	switch(props.inputtype){

		case 'input':
		  output=(<input
		  			 value={props.value} 
		  			 className={classes.join(' ')} 
		  			 {...props.elementConfigs}
		  			 onChange={props.change} 

		  		/>);
		  break;

		default :
		output=(<input
		  			 value={props.value} 
		  			 className={classes.join(' ')} 
		  			 {...props.elementConfigs}
		  			 onChange={props.change}
		  		/>);
	}

	return (
		<div className={styles.InitalWidth}>
			{output}
		</div>

	);

};


export default input;