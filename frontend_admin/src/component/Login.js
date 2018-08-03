import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom';

class Login extends Component 
{
    render() 
    {
        return (
                <div>
                  <div className="container">
                    <div className="row">
                      <div className="col-md-4 col-md-offset-4">
                        <div className="panel panel-default">
                          <center>
                            <div className="panel-heading">
                              <h3 className="panel-title">Dashboard Rumahouse.com</h3>
                            </div>
                          </center>
                          <div className="panel-body">
                            <form role="form">
                              <fieldset>
                                <div className="form-group">
                                  <input className="form-control" placeholder="E-mail" name="email" type="email" Value="purwadhika.okki@gmail.com" />
                                </div>
                                <div className="form-group">
                                  <input className="form-control" placeholder="Password" name="password" type="password" Value="Purwadhika" />
                                </div>
                                <Link to="./Dashboard" type="button" className="btn btn-danger btn-block">Login</Link>
                                <p>New Member? <Link to="./Dashboard" className="">Sign up</Link></p>
                              </fieldset>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                );
    }
}
export default Login;