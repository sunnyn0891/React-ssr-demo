import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import loginRequest from './actions';
import { Form, Button } from 'react-bootstrap'
import './login.scss';

// If you were testing, you'd want to export this component
// so that you can test your custom made component and not
// test whether or not Redux and Redux Form are doing their jobs
class Login extends Component {
	// Pass the correct proptypes in for validation
	static propTypes = {
		handleSubmit: PropTypes.func,
		loginRequest: PropTypes.func,
		login: PropTypes.shape({
			requesting: PropTypes.bool,
			successful: PropTypes.bool,
			messages: PropTypes.array,
			errors: PropTypes.array,
		}),
	}

	// Remember, Redux Form passes the form values to our handler
	// In this case it will be an object with `email` and `password`
	submit = (values) => {
		debugger;
		this.props.loginRequest(values)
	}

	render() {
		const {
			handleSubmit, // remember, Redux Form injects this into our props
		} = this.props
		return (
			<div className="login-container">
				<article className="login-content">
					<section className="login">
						<div className="form-container">
							<h1 className="text-muted">Log in to your account</h1>
							<Form onSubmit={handleSubmit(this.submit)}>
								<Form.Group className="general-class" controlId="formBasicEmail">
									<Form.Label className="text-muted">Email address</Form.Label>
									<Form.Control type="text" placeholder="Enter username" />
								</Form.Group>

								<Form.Group className="general-class" controlId="formBasicPassword">
									<Form.Label className="text-muted">Password</Form.Label>
									<Form.Control type="password" placeholder="Password" />
								</Form.Group>
								<div className="button-container">
									<Button variant="primary" type="submit">
										Submit
  								</Button>
								</div>

							</Form>
						</div>
					</section>
				</article>
			</div>
		)
	}
}

// Grab only the piece of state we need
const mapStateToProps = state => ({
	login: state.login,
})

// make Redux state piece of `login` and our action `loginRequest`
// available in this.props within our component
const connected = connect(mapStateToProps, { loginRequest })(Login)

// in our Redux's state, this form will be available in 'form.login'
const LoginForm = reduxForm({
	form: 'login',
})(connected)

// Export our well formed login component
export default LoginForm;