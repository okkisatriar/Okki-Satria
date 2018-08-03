import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
class Account extends Component 
{
    render() 
    {
        return (
                    <div>
                        <Header />
                        <div className="container">
                            <div className="registration">
                                <div className="registration_left">
                                <h2>new user? <span> create an account </span></h2>
                                <div className="registration_form">
                                    <form>
                                    <div>
                                        <label>
                                        <input placeholder="first name" type="text" tabIndex={1} />
                                        </label>
                                    </div>
                                    <div>
                                        <label>
                                        <input placeholder="last name" type="text" tabIndex={2} />
                                        </label>
                                    </div>
                                    <div>
                                        <label>
                                        <input placeholder="email address" type="email" tabIndex={3} />
                                        </label>
                                    </div>
                                    <div>
                                        <label>
                                        <input placeholder="Mobile" type="email" tabIndex={3} />
                                        </label>
                                    </div>					
                                    <div className="sky_form1">
                                        <ul>
                                        <li><label className="radio left"><input type="radio" name="radio" defaultChecked /><i />Male</label></li>
                                        <li><label className="radio"><input type="radio" name="radio" /><i />Female</label></li>								
                                        </ul>
                                        <div className="clearfix" />
                                    </div>					
                                    <div>
                                        <label>
                                        <input placeholder="password" type="password" tabIndex={4} />
                                        </label>
                                    </div>						
                                    <div>
                                        <label>
                                        <input placeholder="retype password" type="password" tabIndex={4} />
                                        </label>
                                    </div>	
                                    <div>
                                        <input type="submit" defaultValue="create an account" id="register-submit" />
                                    </div>
                                    <div className="sky-form">
                                        <label className="checkbox"><input type="checkbox" name="checkbox" /><i />i agree Terms &amp; conditions &nbsp;<a className="terms" href="#"> terms of service</a> </label>
                                    </div>
                                    </form>&gt;
                                </div>
                                </div>
                                <div className="registration_left">
                                <h2>existing user</h2>
                                <div className="registration_form">
                                    <form>
                                    <div>
                                        <label>
                                        <input placeholder="email" type="email" tabIndex={3} required />
                                        </label>
                                    </div>
                                    <div>
                                        <label>
                                        <input placeholder="password" type="password" tabIndex={4} required />
                                        </label>
                                    </div>						
                                    <div>
                                        <input type="submit" defaultValue="sign in" />
                                    </div>
                                    <div className="forget">
                                        <a href="#">forgot your password</a>
                                    </div>
                                    </form>
                                </div>
                                </div>
                                <div className="clearfix" />
                            </div>
                        </div>
                        <Footer />
                    </div> 
                );
    }
}
export default Account;