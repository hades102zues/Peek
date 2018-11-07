import React from 'react';
import styles from './Closer.module.css';

const closer =(props) =>(
	<div 
	  className={styles.Closer}
	  onClick={ ()=>{
	  		props.clicked(props.storyId)
	   }
	  }
	>
	  x
	</div>
);


export default closer;