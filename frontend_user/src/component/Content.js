import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
class Content extends Component
{
    render() 
    {
        return (
                    <div>
                        <Header />
                        <div>
                            <div className="slider">
                                <div className="callbacks_container">
                                    <ul className="rslides" id="slider">
                                        <li>
                                            <div className="banner1">				  
                                                <div className="banner-info">
                                                    <h3>Morbi lacus hendrerit efficitur.</h3>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. consectetur adipiscing elit. consectetur adipiscing elit.</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="banner2">
                                                <div className="banner-info">
                                                    <h3>Phasellus elementum tincidunt.</h3>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. consectetur adipiscing elit. consectetur adipiscing elit.</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="banner3">
                                                <div className="banner-info">
                                                    <h3>Maecenas interposuere volutpat.</h3>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. consectetur adipiscing elit. consectetur adipiscing elit.</p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="items">
                                <div className="container">
                                    <div className="items-sec">
                                        <div className="col-md-4 feature-grid">
                                            <Link to="/Product">
                                            <img src="images/RH1.jpg" alt style={{height: 200}} />	
                                            <div className="arrival-info">
                                                <h4>Lighting #1</h4>
                                                <p>Rs 12000</p>
                                                <span className="pric1"><del>Rs 18000</del></span>
                                                <span className="disc">[12% Off]</span>
                                            </div></Link>
                                            <div className="viw">
                                                <Link to="/Product">
                                                <span className="glyphicon glyphicon-eye-open" aria-hidden="true" />View</Link>
                                            </div>
                                        </div>
                                        <div className="col-md-4 feature-grid">
                                            <Link to="/Product">
                                            <img src="images/RH2.jpg" alt style={{height: 200}} />	
                                            <div className="arrival-info">
                                                <h4>Lighting #1</h4>
                                                <p>Rs 10000</p>
                                                <span className="pric1"><del>Rs 14000</del></span>
                                                <span className="disc">[14% Off]</span>
                                            </div></Link>
                                            <div className="viw">
                                                <Link to="/Product">
                                                <span className="glyphicon glyphicon-eye-open" aria-hidden="true" />View</Link>
                                            </div>
                                        </div>
                                        <div className="col-md-4 feature-grid">
                                            <Link to="/Product">
                                            <img src="images/RH3.jpg" alt style={{height: 200}} />	
                                            <div className="arrival-info">
                                                <h4>Lighting #1</h4>
                                                <p>Rs 8500</p>
                                                <span className="pric1"><del>Rs 9500</del></span>
                                                <span className="disc">[10% Off]</span>
                                            </div></Link>
                                            <div className="viw">
                                                <Link to="/Product">
                                                <span className="glyphicon glyphicon-eye-open" aria-hidden="true" />View</Link>
                                            </div>
                                        </div>
                                        <div className="col-md-4 feature-grid">
                                            <Link to="/Product"><img src="images/RH4.jpg" alt style={{height: 200}} />	
                                            <div className="arrival-info">
                                                <h4>Lighting #1</h4>
                                                <p>Rs 12000</p>
                                                <span className="pric1"><del>Rs 18000</del></span>
                                                <span className="disc">[12% Off]</span>
                                            </div></Link>
                                            <div className="viw">
                                                <Link to="/Product">
                                                <span className="glyphicon glyphicon-eye-open" aria-hidden="true" />View</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="items-sec btm-sec">
                                        <div className="col-md-4 feature-grid">
                                            <Link to="/Product">
                                            <img src="images/RH5.jpg" alt style={{height: 200}} />	
                                            <div className="arrival-info">
                                                <h4>Lighting #1</h4>
                                                <p>Rs 500</p>
                                                <span className="pric1"><del>Rs 650</del></span>
                                                <span className="disc">[8% Off]</span>
                                            </div></Link>
                                            <div className="viw">
                                                <Link to="/Product">
                                                <span className="glyphicon glyphicon-eye-open" aria-hidden="true" />View</Link>
                                            </div>
                                        </div>
                                        <div className="col-md-4 feature-grid">
                                            <Link to="/Product">
                                            <img src="images/RH6.jpg" alt style={{height: 200}} />	
                                            <div className="arrival-info">
                                                <h4>Lighting #1</h4>
                                                <p>Rs 400</p>
                                                <span className="pric1"><del>Rs 750</del></span>
                                                <span className="disc">[12% Off]</span>
                                            </div></Link>
                                            <div className="viw">
                                                <Link to="/Product">
                                                <span className="glyphicon glyphicon-eye-open" aria-hidden="true" />View</Link>
                                            </div>
                                        </div>
                                        <div className="col-md-4 feature-grid">
                                            <Link to="/Product">
                                            <img src="images/RH7.jpg" alt style={{height: 200}} />	
                                            <div className="arrival-info">
                                                <h4>Lighting #1</h4>
                                                <p>Rs 800</p>
                                                <span className="pric1"><del>Rs 1200</del></span>
                                                <span className="disc">[12% Off]</span>
                                            </div></Link>
                                            <div className="viw">
                                                <Link to="/Product">
                                                <span className="glyphicon glyphicon-eye-open" aria-hidden="true" />View</Link>
                                            </div>
                                        </div>
                                        <div className="col-md-4 feature-grid">
                                            <Link to="/Product">
                                            <img src="images/RH8.jpg" alt style={{height: 200}} />	
                                            <div className="arrival-info">
                                                <h4>Lighting #1</h4>
                                                <p>Rs 600</p>
                                                <span className="pric1"><del>Rs 1200</del></span>
                                                <span className="disc">[50% Off]</span>
                                            </div></Link>
                                        </div>
                                        <div className="viw">
                                            <Link to="/Product">
                                            <span className="glyphicon glyphicon-eye-open" aria-hidden="true" />View</Link>
                                        </div>
                                    </div>
                                    <div className="col-md-4 feature-grid">
                                        <Link to="/Product">
                                        <img src="images/RH9.jpg" alt style={{height: 200}} />	
                                        <div className="arrival-info">
                                            <h4>Lighting #1</h4>
                                            <p>Rs 600</p>
                                            <span className="pric1"><del>Rs 1200</del></span>
                                            <span className="disc">[50% Off]</span>
                                        </div></Link>
                                        <div className="viw">
                                            <Link to="/Product">
                                            <span className="glyphicon glyphicon-eye-open" aria-hidden="true" />View</Link>
                                        </div>
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
                        </div>
                        <Footer />
                    </div>
                );
    }
}
export default Content;