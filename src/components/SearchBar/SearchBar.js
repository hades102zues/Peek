import React from 'react';
import styles from './SearchBar.module.css';

const searchBar=(props)=>(
   <form className={styles.Form} style={{textAlign:'center'}}>

   		<input onChange={props.searching} className={styles.Search} type='text' name='search' placeholder='' />

   		<button className={styles.Button} 
   		 type='submit'
   		 onClick={(event)=>{event.preventDefault();}}
   		 >
   		  <i className="fas fa-search"></i>
   		 </button>

   </form>
);

export default searchBar;