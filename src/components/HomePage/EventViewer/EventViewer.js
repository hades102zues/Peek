import React from 'react';
import styles from './EventViewer.module.css';
import Event from './Event/Event';


const eventViewer = () =>{
	return (
      <div className={styles.EventViewer}>
          
         <Event />
         <p>Event</p>
         <p>Event</p>
         <p>Event</p>
      </div>
	);
};

export default eventViewer;