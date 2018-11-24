import React from 'react';
import styles from './User.module.css';
import StoryLister from './StoryLister/StoryLister';


const user = () =>{
	return (
		//banner/
		//somecomponent
		<React.Fragment>
			<div className={styles.Banner}><h2>Saved Stories</h2></div>
			<StoryLister />
		</React.Fragment>
	);
};

export default user;