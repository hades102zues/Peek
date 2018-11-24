import React from 'react';
import styles from './LoginCard.module.css';

/*components*/
import LoginForm from '../../containers/LoginForm/LoginForm';




const loginCard = () =>(
	<div className={styles.LoginCard}>
		  <h1>Portal</h1>
		  <LoginForm/>
	</div>
);


export default loginCard;