import React from 'react';
import styles from './Story.module.css';

const story = (props) =>{
	return (
		
		<a href={props.url} target="_blank" rel="noopener noreferrer" style={{textDecoration:'none'}}>
		  <div className={styles.Story}>	
			<h5>{props.title}</h5> 
		  </div>
		</a>
		
	);
};

export default story;