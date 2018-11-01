import React from 'react';
import styles from './Event.module.css';

/*Components*/
import Closer from '../../../../UI/Closer/Closer';
import ProfilePic from '../../../ProfilePic/ProfilePic';
import Button from '../../../../UI/Button/Button';


const event = () => {


 return (
    <div className={styles.Event}>
       <div className={styles.EventContainer}>

       	  <h5>Employee Title /$/</h5>
		  <Closer />
		  <div className={styles.TopLine}></div>

		  <div className={styles.Aid} >   
		 	<ProfilePic /> 
		 	<h3>New Take on RestAPIs</h3>
		  </div>
		  	<p>
		  	 Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
		  	 sed do eiusmod tempor incididunt ut labore et dolore magna 
		  	 aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
		  	 laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.
		  	</p>
		   <div className={styles.BotLine}></div>
 			
 		   <span>Date</span>
 		   		<Button floatType="" />
 		   
       </div>

	</div>

 );
		
};


export default event;

