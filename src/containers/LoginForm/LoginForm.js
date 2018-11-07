import React, {Component} from 'react';



import Button from '../../UI/Button/Button';
import Input from '../../components/Input/Input';
import styles from './LoginForm.module.css';

class LoginForm extends Component{

	constructor(props){
		super(props);
		this.state={
			form: {
				email : {
					inputtype : 'input',
					elementConfig: {
						type:'email',
						placeholder : 'Email'
					}
				},
				password: {
					inputtype: 'input',
					elementConfig:{
						type:'text',
						placeholder: 'Password'
					}
				}
			}
		};
	}

	render(){

		const form = {...this.state.form};

		let formThings = [];

		for(let key in form){
			formThings.push(key);
		}

		return(
		 <form className={styles.Form}>
			  
		 	  {
		 	  	formThings.map(key=>(
		 	  		<Input 
		 	  		  key={key}
		 	  		  inputtype={form[key].inputtype}
		 	  		 elementConfigs={{...form[key].elementConfig}}
		 	  		/>
		 	  	))
		 	  }
			  <Button name="Login"/>
		  </form>
		);
	}
}


export default LoginForm;