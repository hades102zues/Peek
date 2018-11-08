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
					},
					value:'',
					validationRules:{
						required:true
					},
					isValid: false

				},
				password: {
					inputtype: 'input',
					elementConfig:{
						type:'text',
						placeholder: 'Password'
					},
					value:'',
					validationRules:{
						required:true
					},
					isValid: false
				},
				
			},
			isFormValid:false
		};
	}


	checkValidity = (value, rules) =>{

		let isValid = false;

		if(rules.required){
			isValid = value.trim() !== '';
		}

		return isValid;
	}

	onInputChangeHandler = (event, inputIdentifier) =>{
		const form = {...this.state.form}; //form
		const deepForm = {...form[inputIdentifier]}; //email {}

		

		//store the value and validate the inputIdentifier
		deepForm.value = event.target.value // value : x
		deepForm.isValid = this.checkValidity(event.target.value, deepForm.validationRules);
		
		//produce an uptodate form
		form[inputIdentifier] = deepForm; //form.key = new {}
         
		//check the overall form valid via the updated form. Key here is having true
		let isFormValid = true; //this allows us to always capture the first truth value
								//and reuse the variable in the cascade

		 for(let key in form){
		 	isFormValid = form[key].isValid && isFormValid; //
		 }


		this.setState({form, isFormValid});
	}


	render(){

		const form = {...this.state.form};

		let formThings = [];

		for(let key in form){
			formThings.push(key);
		}

		console.log(this.state);
		return(

		 <form className={styles.Form}>
			  
		 	  {
		 	  	formThings.map(key=>(
		 	  		<Input 
		 	  		  value={form[key].value}
		 	  		  key={key}
		 	  		  inputtype={form[key].inputtype}
		 	  		  elementConfigs={{...form[key].elementConfig}}
		 	  		  change={(event)=>{this.onInputChangeHandler(event, key)}}
		 	  		  valid={form[key].isValid}
		 	  		/>
		 	  	))
		 	  }
			  <Button disable={!this.state.isFormValid} name="Login"/>
		  </form>
		);
	}
}


export default LoginForm;