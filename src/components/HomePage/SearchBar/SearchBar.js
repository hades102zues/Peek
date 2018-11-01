import React from 'react';
import styles from './SearchBar.module.css';

const searchBar=()=>(
   <form className={styles.Form} style={{textAlign:'center'}}>

   		<input className={styles.Search} type='text' name='search' placeholder='' />

   		<button className={styles.Button} type='submit'>
   		  <i className="fas fa-search"></i>
   		 </button>

   </form>
);

export default searchBar;