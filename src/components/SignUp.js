import React, { Component } from 'react';

class SignUp extends Component {
    render() {
        return (
            <div className="SignUp">
                <h1 className="primary-heading">Sign Up</h1>

                <p className="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                <a href="#0" className="btn btn-dark-blue">Continue with BankID</a>
                <a href="#0" className="btn btn-fb-blue">Continue with Facebook</a>

                <div>
                    <form className="form">
                        <div className="u-margin-top-bottom-small">
                            <h2 className="secondary-heading">
                                Sign up using email
                            </h2>
                        </div>

                        <div className="form__group">
                            <input id="name" type="text" className="form__input" placeholder="Full Name" required />
                            <label for="name" className="form__label">First & Last Name</label>
                        </div>

                        <div className="form__group">
                            <input id="email" type="email" className="form__input" placeholder="Email" required />
                            <label for="email" className="form__label">Email</label>
                        </div>

                        <div className="form__group">
                            <input id="password" type="password" className="form__input" placeholder="Password" required />
                            <label for="password" className="form__label">Password</label>
                        </div>

                        <div className="form__group">
                            <input id="terms" type="checkbox" className="form__checkbox" required />
                            <label for="terms" className="">
                                I have read and I accept the  
                                <a href="#0">Terms and conditions</a>
                            </label>
                        </div>

                        <div className="u-margin-top-bottom-small">
                            <a className="btn btn-light-blue" href="#0">Create Account</a>
                        </div>
                    </form>    
                </div> 
            </div>
        );
    }
}

export default SignUp;
