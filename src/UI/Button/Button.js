import React from 'react';
import styles from './Button.module.css';

const button = (props)=>{

    let finalStyle= [];
    finalStyle.push(styles.Button);
    finalStyle.push(props.floatType);

	return (
		<button className={finalStyle.join(' ')}>View</button>
	);
};

export default button;