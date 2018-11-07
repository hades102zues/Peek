import React, {Component} from 'react';



import Button from '../../UI/Button/Button';
import Input from '../../components/Input/Input';
import styles from './LoginForm.module.css';

class LoginForm extends Component{

	constructor(props){
		super(props);
		this.state={
			form: {}
		};
	}

	render(){
		return(
		 <form className={styles.Form}>
			  <Input />
			  <Input />
			  <Button name="Login"/>
		  </form>
		);
	}
}


export default LoginForm;