import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom';

class Footer extends Component 
{
    render() 
    {
        return (
                <div>
                    <div className="footer">
                        <div className="container">
                            <div className="footer-grids">
                                <div className="col-md-3 about-us">
                                    <h3>About Us</h3>
                                    <p>Maecenas nec auctor sem. Vivamus porttitor tincidunt elementum nisi a, euismod rhoncus urna. Curabitur scelerisque vulputate arcu eu pulvinar. Fusce vel neque diam</p>
                                </div>
                                <div className="col-md-3 ftr-grid">
                                        <h3>Information</h3>
                                        <ul className="nav-bottom">
                                            <li><a href="#">Track Order</a></li>
                                            <li><a href="#">New Products</a></li>
                                            <li><a href="#">Location</a></li>
                                            <li><a href="#">Our Stores</a></li>
                                            <li><a href="#">Best Sellers</a></li>	
                                        </ul>					
                                </div>
                                <div className="col-md-3 ftr-grid">
                                        <h3>More Info</h3>
                                        <ul className="nav-bottom">
                                            <li><a href="login.html">Login</a></li>
                                            <li><a href="#">FAQ</a></li>
                                            <li><a href="contact.html">Contact</a></li>
                                            <li><a href="#">Shipping</a></li>
                                            <li><a href="#">Membership</a></li>	
                                        </ul>					
                                </div>
                                <div className="col-md-3 ftr-grid">
                                        <h3>Categories</h3>
                                        <ul className="nav-bottom">
                                            <li><a href="#">Car Lights</a></li>
                                            <li><a href="#">LED Lights</a></li>
                                            <li><a href="#">Decorates</a></li>
                                            <li><a href="#">Wall Lights</a></li>
                                            <li><a href="#">Protectors</a></li>	
                                        </ul>					
                                </div>
                                <div className="clearfix"></div>
                            </div>
                        </div>
                    </div>
                    <div className="copywrite">
                        <div className="container">
                            <div className="copy">
                                <p>© 2015 Lighting. All Rights Reserved | Design by  <a href="http://w3layouts.com/" target="_blank">W3layouts</a> </p>
                            </div>
                            <div className="social">							
                                    <a href="#"><i className="facebook"></i></a>
                                    <a href="#"><i className="twitter"></i></a>
                                    <a href="#"><i className="dribble"></i></a>	
                                    <a href="#"><i className="google"></i></a>	
                                    <a href="#"><i className="youtube"></i></a>	
                            </div>
                            <div className="clearfix"></div>
                        </div>
                    </div>   
                </div>
                );
    }
}
export default Footer;