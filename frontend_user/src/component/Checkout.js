import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
class Checkout extends Component 
{
    render() 
    {
        return (
                    <div>
                        <Header />                        
                        <div className="container">
                            <div className="check-sec">	 
                                <div className="col-md-3 cart-total">
                                    <a className="continue" href="product.html">Continue to basket</a>
                                    <div className="price-details">
                                        <h3>Price Details</h3>
                                        <span>Total</span>
                                        <span className="total1">6200.00</span>
                                        <span>Discount</span>
                                        <span className="total1">10%(Festival Offer)</span>
                                        <span>Delivery Charges</span>
                                        <span className="total1">150.00</span>
                                        <div className="clearfix" />	
                                        <ul className="total_price">
                                            <li className="last_price"> <h4>TOTAL</h4></li>	
                                            <li className="last_price"><span>6150.00</span></li>			   
                                        </ul> 
                                        <div className="clearfix" />
                                        <Link to="/Invoice" className="order" >Place Order</Link>
                                        <div className="total-item">
                                            <h3>OPTIONS</h3>
                                            <h4>COUPONS</h4>
                                            <a className="cpns" href="#">Apply Coupons</a>
                                        </div>
                                    </div>
                                    <div className="col-md-9 cart-items">
                                        <h1>My Shopping Bag (2)</h1>
                                            <div className="cart-header">
                                                <div className="close1"> </div>
                                                <div className="cart-sec simpleCart_shelfItem">
                                                    <div className="cart-item cyc">
                                                        <img src="images/p4.jpg" className="img-responsive" alt />
                                                    </div>
                                                    <div className="cart-item-info">
                                                        <h3><a href="single.html">Rock Light Emergency Lights</a><span>Model No: RL-5511S</span></h3>
                                                        <ul className="qty">
                                                            <li><p>Size : 5</p></li>
                                                            <li><p>Qty : 1</p></li>
                                                        </ul>
                                                        <div className="delivery">
                                                            <p>Service Charges : Rs.100.00</p>
                                                            <span>Delivered in 2-3 bussiness days</span>
                                                            <div className="clearfix" />
                                                        </div>								
                                                    </div>
                                                    <div className="clearfix" />
                                                </div>
                                            </div>
                                            <div className="cart-header2">
                                                <div className="close2"> </div>
                                                <div className="cart-sec simpleCart_shelfItem">
                                                    <div className="cart-item cyc">
                                                        <img src="images/p3.jpg" className="img-responsive" alt />
                                                    </div>
                                                    <div className="cart-item-info">
                                                        <h3><a href="single.html">Show Lights</a><span>Model No: SL-3578</span></h3>
                                                        <ul className="qty">
                                                            <li><p>Size : 5</p></li>
                                                            <li><p>Qty : 1</p></li>
                                                        </ul>
                                                        <div className="delivery">
                                                            <p>Service Charges : Rs.100.00</p>
                                                            <span>Delivered in 2-3 bussiness days</span>
                                                            <div className="clearfix" />
                                                        </div>							
                                                    </div>
                                                    <div className="clearfix" />					
                                                </div>
                                            </div>		
                                    </div>
                                    <div className="clearfix"> </div>
                                </div>
                            </div>
                        </div>
                        <Footer />
                    </div>       
                );
    }
}
export default Checkout;