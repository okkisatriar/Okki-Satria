import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
class Userprofile extends Component 
{
    render() 
    {
        return (
                    <div>
                        <Header />
                        <div className="main-content">
                            <div className="container">
                                <h3 className="site-title">My Profile</h3>
                                <div className="row">
                                    <div className="col-md-9">
                                        <div className="row">
                                            <div className="panel">
                                                <div className="panel-body" style={{color: 'black'}}>
                                                    <div className="col-md-5">
                                                        <center>
                                                            <img className="img-responsive" src="http://www.pvhc.net/img240/uyttxprhsqycyximpzjb.png" style={{width: '30%'}} />
                                                            <i className="fa fa-wrench"> Edit</i>
                                                        </center>
                                                        <div className=" clearfix">
                                                            <center>
                                                                <h3>Abhinav Bhattacharya </h3>
                                                                <div className="profile-ratings" />
                                                                <h4>You are a Free Member</h4>
                                                                <button type="button" className="btn btn-success btn-md pull-center">Upgrade now</button>
                                                            </center>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-7">
                                                        <div className="profile-block">
                                                            <ul className="list-group">
                                                                <li className="list-group-item">Vehicles Lifted <span className="badge">12</span></li>
                                                                <li className="list-group-item">WishList <span className="badge">5</span></li>
                                                                <li className="list-group-item">Notifications <span className="badge">3</span></li>
                                                                <li className="list-group-item">Notifications <span className="badge">3</span></li>
                                                                <li className="list-group-item">Notifications <span className="badge">3</span></li>
                                                                <li className="list-group-item">Notifications <span className="badge">3</span></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="panel">
                                                <div className="panel-body" style={{color: 'black'}}>
                                                    <div className="col-md-12">
                                                        <ul className="list-inline">
                                                            <li><h5><strong>Interested in: <a href="#"><i className="fa fa-wrench"> Edit</i></a> </strong> </h5> </li>
                                                            <li>Maruti, Suzuki, Nissan, Skoda, BMW, Mercedez, Skoda, Honda, Toyota, Hyundai</li>
                                                        </ul>
                                                        <ul className="list-inline">
                                                            <li><h5><strong>Preferred Buying Location: <a href="#"><i className="fa fa-wrench"> Edit</i></a></strong></h5></li>
                                                            <li>New Delhi, Jaipur, Haryana, UP, Bihar</li>
                                                        </ul>
                                                        <ul className="list-inline">
                                                            <li><h5><strong>My Bidding Limit:</strong></h5></li>
                                                            <li> Rs. 2,00000/- </li>
                                                        </ul>
                                                        <hr />
                                                    </div>
                                                </div>	
                                            </div>
                                        </div>
                                    </div>  
                                </div> 
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
export default Userprofile;