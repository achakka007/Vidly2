import React, { Component } from 'react';
import Joi from "joi-browser";
import Form from './form';

class LoginForm extends Form {
    // username = React.createRef();
    state = {
        data: {
            username: "",
            password: ""
        },
        errors: {
            // username: "",
            // password: ""
        }
    }

    schema = {
        username: Joi.string().required().label('Username'),
        password: Joi.string().required().label('Password')
    };

    // componentDidMount() {
    //     this.username.current.focus();
    // }



    doSubmit = () => {
        // Call Server
        console.log('Submitted');
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput("username", "Username")}
                    {this.renderInput("password", "Password", "password")}
                    {this.renderButton("Login")}
                </form>
            </div>
        );
    }
}

export default LoginForm;