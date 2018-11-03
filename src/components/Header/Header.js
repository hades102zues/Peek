/*This provides the site's header*/

import React from 'react';
import styles from './Header.module.css';
import Container from '../../Hoc/Container/Container';
import NavigationItems from './NavigationItems/NavigationItems';
import NavigationItemsL from './NavigationItemsL/NavigationItemsL';



const header = () => {
	return (
		<header className={styles.Header}>
			<Container>
				
				<NavigationItems/>
			</Container>
				
		</header>
	);
}



export default header;