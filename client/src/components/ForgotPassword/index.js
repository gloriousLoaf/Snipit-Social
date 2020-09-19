//// Forgot Password ////
import React, { Component } from 'react';
import { Form, Button, Modal } from "react-bootstrap";
import './style.css';

export default class ForgotPassword extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
    };

    render() {
        return (
            <div className='auth-wrapper'>
                <div className='auth-inner'>
                    <form onSubmit={this.handleSubmit}>
                        <h3>Forgot Password</h3>
                        <div className='form-group'>
                            <label>Email</label>
                            <input
                                type='email'
                                className='form-control'
                                placeholder='Email'
                                onChange={(e) => (this.email = e.target.value)}
                            />
                        </div>
                        <div className='form-group'>
                            <label>New Password</label>
                            <input
                                type='password'
                                className='form-control'
                                placeholder='••••••'
                                onChange={(e) => (this.password = e.target.value)}
                            />
                        </div>
                        <Button className='modalSignin bg-m btn-rounded btn-dark'>Submit</Button>
                        <div className="options text-right">
                            &nbsp;
                                <p className="pt-1">
                                Already have an account?{" "}
                                <a href="/" className="mr-1 link">
                                    Log In
            </a>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}