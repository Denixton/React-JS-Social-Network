import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { required } from '../../utils/validators/validators';
import { FormControl } from '../Common/FormsControls/FormsControls';
import { login } from '../../redux/auth-reducer';
import { Navigate } from 'react-router-dom';

const LoginForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<div>
				<Field placeholder={'Email'} name={'email'} component={FormControl} validate={[required]} type={'input'}/>
			</div>
			<div>
				<Field placeholder={'Password'} name={'password'} component={FormControl} validate={[required]} type={'input'} />
			</div>
			<div>
				<Field component={'input'} name={'rememberMe'} type={'checkbox'} /> remember me
			</div>
			<div>
				<button>
					login
				</button>
			</div>
		</form>
	)
}

const LoginReduxForm = reduxForm({
	form: 'login'
})(LoginForm)

const Login = (props) => {
	const onSubmit = (formData) => {
		props.login(formData.email, formData.password, formData.rememberMe);
	}

	if (props.isAuth) {
		return <Navigate to={'/profile'} />
	}

	return <div>
			<h1>Login</h1>
			<LoginReduxForm onSubmit={onSubmit} />
		</div>
}

const mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);