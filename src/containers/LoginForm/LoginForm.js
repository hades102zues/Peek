import React, {Component} from 'react';
import { connect } from 'react-redux';


import * as actions from '../../store/actions/index';


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
					isValid: false,
					touched:false

				},
				password: {
					inputtype: 'input',
					elementConfig:{
						type:'text',
						placeholder: 'Password'
					},
					value:'',
					validationRules:{
						required:true,
						length:6,
					},
					isValid: false,
					touched:false
				},
				
			},
			isFormValid:false,
			authState: 'login'
		};
	}


	checkValidity = (value, rules) =>{

		let isValid = false;

		//in some cases some of inputs will not have such
		//a rule and so it is obviously necessary to check that the rule exists befor we go
		//to check if the requirement is met

		if(rules.required){
			isValid = value.trim() !== '';
		}

		if(rules.length){
			isValid = value.length>=6 && isValid;
		}

		return isValid;
	}

	onInputChangeHandler = (event, inputIdentifier) =>{
		const form = {...this.state.form}; //form
		const deepForm = {...form[inputIdentifier]}; //email {}

		

		//store the value and validate the inputIdentifier
		deepForm.value = event.target.value // value : x
		deepForm.touched = true;
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

	formSubmitHandler = (event) =>{
		event.preventDefault();
		this.props.authenticate(
			this.state.form.email.value,
			this.state.form.password.value,
			this.state.authState
		);
	};

	authSwitchHandler = () =>{

		const authState = this.state.authState==='login' ? 'signup' : 'login';
		this.setState({authState});
	};

	render(){

		const form = {...this.state.form};

		let formThings = [];

		for(let key in form){
			formThings.push(key);
		}


		let button = <Button disable={!this.state.isFormValid} name="Login"/>;

		if(this.state.authState==='signup'){
			button = <Button disable={!this.state.isFormValid} name="SignUp"/>;
		}


		let p = 'SignUp';
		 
		if (this.state.authState==='signup'){
			p = 'Login';
		}


		//console.log(this.state);
		return(
		 <React.Fragment>
		 <form className={styles.Form} onSubmit ={this.formSubmitHandler}>
			  
		 	  {
		 	  	formThings.map(key=>(
		 	  		<Input 
		 	  		  value={form[key].value}
		 	  		  key={key}
		 	  		  inputtype={form[key].inputtype}
		 	  		  elementConfigs={{...form[key].elementConfig}}
		 	  		  change={(event)=>{this.onInputChangeHandler(event, key)}}
		 	  		  valid={form[key].isValid}
		 	  		  wasTouched={form[key].touched}
		 	  		/>
		 	  	))
		 	  }
			  {button}
		  </form>

		  <p
		  	style ={{
		  		textDecoration:'underline',
		  		cursor:'pointer'
		  	}}

		  	onClick= {this.authSwitchHandler}
		  >
		     {p}
		  </p>
		  
		  </React.Fragment>
		  
		);
	}
}

const mapDispatchToProps = dispatch =>{
	return {
		authenticate: (email, pass, authState)=> dispatch(actions.authenticateUser(email, pass, authState))
	};
};

export default connect(null, mapDispatchToProps)(LoginForm);