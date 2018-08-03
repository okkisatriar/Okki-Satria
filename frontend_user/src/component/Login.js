import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

class Login extends Component 
{
    render() 
    {
        return (
                <div>
                  <Header /> 
                  <div className="login_sec">
                    <div className="container">
                      <h2>Login</h2>
                      <div className="col-md-6 log">			 
                        <p>Welcome, please enter the folling to continue.</p>
                        <p>If you have previously Login with us, <span>click here</span></p>
                        <form>
                          <h5>User Name</h5>	
                          <input type="text" defaultValue />
                          <h5>Password</h5>
                          <input type="password" defaultValue />					
                          <input type="submit" defaultValue="Login" />	
                          <a className="acount-btn" href="account.html">Create an Account</a>
                        </form>
                        <a href="#">Forgot Password ?</a>
                      </div>	
                      <div className="clearfix" />
                    </div>
                  </div>
                  <div className="subscribe">
                    <div className="container">
                      <h3>Newsletter</h3>
                      <form>
                        <input type="text" className="text" defaultValue="Email" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Email';}" />
                        <input type="submit" defaultValue="Subscribe" />
                      </form>
                    </div>
                  </div>
                  <Footer />
                </div>
                );
    }
}
export default Login;