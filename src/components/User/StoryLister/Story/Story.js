import React from 'react';
import styles from './Story.module.css';

const story = (props) =>{
	return (
		
		<a href={props.url} target="_blank" rel="noopener noreferrer" style={{textDecoration:'none'}}>
		  <div className={styles.Story}>	
			<p>{props.title}</p> 
		  </div>
		</a>
		
	);
};

export default story;