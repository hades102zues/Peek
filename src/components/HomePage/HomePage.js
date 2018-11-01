import React from 'react';
import EventViewer from './EventViewer/EventViewer';
import styles from './HomePage.module.css';
import SearchBar from './SearchBar/SearchBar';
import Container from '../../Hoc/Container/Container';


const homePage = () =>(
	<div className={styles.HomePage}>
	  <Container>
		<SearchBar />
	    <EventViewer />
	  </Container>
	</div>
 	
);

export default homePage;