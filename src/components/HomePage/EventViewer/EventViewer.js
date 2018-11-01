import React from 'react';
import styles from './EventViewer.module.css';
import Event from './Event/Event';


const eventViewer = () =>{
	return (
      <div className={styles.EventViewer}>
          
         <Event />
         <Event />
         <Event />
         <Event />
         <Event />
         <Event />
      </div>
	);
};

export default eventViewer;