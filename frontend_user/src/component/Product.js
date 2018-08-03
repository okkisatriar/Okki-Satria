import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

class Product extends Component 
{
    render() 
    {
        return (
                    <div>
                        <Header />
                        <div className="product-model">	 
                            <div className="container">
                                <h2>Our Products</h2>			
                                <div className="col-md-9 product-model-sec">
                                    <div className="product-grid">
                                        <Link to="/Single">
                                        <div className="more-product"><span> </span></div>						
                                            <div className="product-img b-link-stripe b-animate-go  thickbox">
                                                <img src="images/RH1.jpg" className="img-responsive" alt style={{width: 250, height: 150}} />
                                                <div className="b-wrapper">
                                                    <h4 className="b-animate b-from-left  b-delay03">							
                                                    <button><span className="glyphicon glyphicon-zoom-in" aria-hidden="true" />Quick View</button></h4>
                                                </div>
                                            </div></Link>				
                                        <div className="product-info simpleCart_shelfItem">
                                            <div className="product-info-cust prt_name">
                                                <h4>Lights #1</h4>								
                                                <span className="item_price">Rp. 13 Miliar</span>
                                                <div className="ofr">
                                                    <p className="pric1"><del>Rs 280</del></p>
                                                    <p className="disc">[12% Off]</p>
                                                </div>
                                                    <input type="text" className="item_quantity" defaultValue={1} />
                                                    <input type="button" className="item_add items" defaultValue="ADD" />
                                                <div className="clearfix"></div>
                                            </div>												
                                        </div>
                                    </div>	
                                    <div className="product-grid">
                                        <Link to="/Single">
                                        <div className="more-product"><span> </span></div>						
                                            <div className="product-img b-link-stripe b-animate-go  thickbox">
                                                <img src="images/RH2.jpg" className="img-responsive" alt style={{width: 250, height: 150}} />
                                                <div className="b-wrapper">
                                                    <h4 className="b-animate b-from-left  b-delay03">							
                                                    <button><span className="glyphicon glyphicon-zoom-in" aria-hidden="true" />Quick View</button></h4>
                                                </div>
                                            </div></Link>					
                                        <div className="product-info simpleCart_shelfItem">
                                            <div className="product-info-cust prt_name">
                                                <h4>Lights #1</h4>								
                                                <span className="item_price">Rp. 15 Miliar</span>	
                                                <div className="ofr">
                                                    <p className="pric1"><del>Rs 280</del></p>
                                                    <p className="disc">[12% Off]</p>
                                                </div>
                                                    <input type="text" className="item_quantity" defaultValue={1} />
                                                    <input type="button" className="item_add items" defaultValue="ADD" />
                                                <div className="clearfix"> </div>
                                            </div>						
                                        </div>
                                    </div>
                                    <div className="product-grid">
                                        <Link to="/Single">
                                        <div className="more-product"><span> </span></div>						
                                            <div className="product-img b-link-stripe b-animate-go thickbox">
                                                <img src="images/RH3.jpg" className="img-responsive" style={{width: 250, height: 150}} />
                                                <div className="b-wrapper">
                                                    <h4 className="b-animate b-from-left  b-delay03"><button><span className="glyphicon glyphicon-zoom-in" aria-hidden="true" />Quick View</button></h4>
                                                </div>
                                            </div></Link>					
                                        <div className="product-info simpleCart_shelfItem">
                                            <div className="product-info-cust prt_name">
                                                <h4>Lights #1</h4>								
                                                <span className="item_price">Rp. 11 Miliar</span>	
                                                <div className="ofr">
                                                    <p className="pric1"><del>Rs 280</del></p>
                                                    <p className="disc">[12% Off]</p>
                                                </div>
                                                    <input type="text" className="item_quantity" defaultValue={1} />
                                                    <input type="button" className="item_add items" defaultValue="ADD" />
                                                <div className="clearfix"> </div>
                                            </div>						
                                        </div>
                                    </div>
                                    <div className="product-grid">
                                        <Link to="/Single">
                                        <div className="more-product"><span> </span></div>						
                                            <div className="product-img b-link-stripe b-animate-go thickbox">
                                                <img src="images/RH4.jpg" className="img-responsive" style={{width: 250, height: 150}} />
                                                <div className="b-wrapper">
                                                    <h4 className="b-animate b-from-left  b-delay03">							
                                                    <button><span className="glyphicon glyphicon-zoom-in" aria-hidden="true" />Quick View</button></h4>
                                                </div>
                                            </div></Link>						
                                        <div className="product-info simpleCart_shelfItem">
                                            <div className="product-info-cust prt_name">
                                                <h4>Lights #1</h4>								
                                                <span className="item_price">Rp. 6 Miliar</span>	
                                                <div className="ofr">
                                                    <p className="pric1"><del>Rs 280</del></p>
                                                    <p className="disc">[12% Off]</p>
                                                </div>
                                                    <input type="text" className="item_quantity" defaultValue={1} />
                                                    <input type="button" className="item_add items" defaultValue="ADD" />
                                                <div className="clearfix"> </div>
                                            </div>						
                                        </div>
                                    </div>
                                    <div className="product-grid">
                                        <Link to="/Single">
                                        <div className="more-product"><span> </span></div>						
                                        <div className="product-img b-link-stripe b-animate-go  thickbox">
                                            <img src="images/RH5.jpg" className="img-responsive" style={{width: 250, height: 150}} />
                                            <div className="b-wrapper">
                                                <h4 className="b-animate b-from-left  b-delay03">							
                                                <button><span className="glyphicon glyphicon-zoom-in" aria-hidden="true" />Quick View</button></h4>
                                            </div>
                                        </div></Link>						
                                        <div className="product-info simpleCart_shelfItem">
                                            <div className="product-info-cust prt_name">
                                                <h4>Lights #1</h4>								
                                                <span className="item_price">Rp. 8 Miliar</span>	
                                                <div className="ofr">
                                                    <p className="pric1"><del>Rs 280</del></p>
                                                    <p className="disc">[12% Off]</p>
                                                </div>
                                                    <input type="text" className="item_quantity" defaultValue={1} />
                                                    <input type="button" className="item_add items" defaultValue="ADD" />
                                                <div className="clearfix"> </div>
                                            </div>						
                                        </div>
                                    </div>
                                    <div className="product-grid">
                                        <Link to="/Single">
                                        <div className="more-product"><span> </span></div>						
                                        <div className="product-img b-link-stripe b-animate-go  thickbox">
                                            <img src="images/RH6.jpg" className="img-responsive" style={{width: 250, height: 150}} />
                                            <div className="b-wrapper">
                                                <h4 className="b-animate b-from-left  b-delay03">							
                                                <button><span className="glyphicon glyphicon-zoom-in" aria-hidden="true" />Quick View</button></h4>
                                            </div>
                                        </div></Link>						
                                        <div className="product-info simpleCart_shelfItem">
                                            <div className="product-info-cust prt_name">
                                                <h4>Lights #1</h4>								
                                                <span className="item_price">Rp. 10 Miliar</span>	
                                                <div className="ofr">
                                                    <p className="pric1"><del>Rs 280</del></p>
                                                    <p className="disc">[12% Off]</p>
                                                </div>
                                                    <input type="text" className="item_quantity" defaultValue={1} />
                                                    <input type="button" className="item_add items" defaultValue="ADD" />
                                                <div className="clearfix"> </div>
                                            </div>						
                                        </div>
                                    </div>
                                    <div className="product-grid">
                                        <Link to="/Single">
                                        <div className="more-product"><span> </span></div>						
                                        <div className="product-img b-link-stripe b-animate-go  thickbox">
                                            <img src="images/RH7.jpg" className="img-responsive" style={{width: 250, height: 150}} />
                                            <div className="b-wrapper">
                                                <h4 className="b-animate b-from-left  b-delay03">							
                                                <button><span className="glyphicon glyphicon-zoom-in" aria-hidden="true" />Quick View</button></h4>
                                            </div>
                                        </div></Link>						
                                        <div className="product-info simpleCart_shelfItem">
                                            <div className="product-info-cust prt_name">
                                                <h4>Lights #1</h4>								
                                                <span className="item_price">Rp. 10 Miliar</span>	
                                                <div className="ofr">
                                                    <p className="pric1"><del>Rs 280</del></p>
                                                    <p className="disc">[12% Off]</p>
                                                </div>
                                                    <input type="text" className="item_quantity" defaultValue={1} />
                                                    <input type="button" className="item_add items" defaultValue="ADD" />
                                                <div className="clearfix"> </div>
                                            </div>						
                                        </div>
                                    </div>
                                    <div className="product-grid">
                                        <Link to="/Single">
                                        <div className="more-product"><span> </span></div>						
                                        <div className="product-img b-link-stripe b-animate-go  thickbox">
                                            <img src="images/RH8.jpg" className="img-responsive" style={{width: 250, height: 150}} />
                                            <div className="b-wrapper">
                                                <h4 className="b-animate b-from-left  b-delay03">							
                                                <button><span className="glyphicon glyphicon-zoom-in" aria-hidden="true" />Quick View</button></h4>
                                            </div>
                                        </div></Link>						
                                        <div className="product-info simpleCart_shelfItem">
                                            <div className="product-info-cust prt_name">
                                                <h4>Lights #1</h4>								
                                                <span className="item_price">Rp. 5 Miliar</span>	
                                                <div className="ofr">
                                                    <p className="pric1"><del>Rs 280</del></p>
                                                    <p className="disc">[12% Off]</p>
                                                </div>
                                                    <input type="text" className="item_quantity" defaultValue={1} />
                                                    <input type="button" className="item_add items" defaultValue="ADD" />
                                                <div className="clearfix"> </div>
                                            </div>						
                                        </div>
                                    </div>
                                    <div className="product-grid">
                                        <Link to="/Single">
                                        <div className="more-product"><span> </span></div>						
                                        <div className="product-img b-link-stripe b-animate-go  thickbox">
                                            <img src="images/RH9.jpg" className="img-responsive" style={{width: 250, height: 150}} />
                                            <div className="b-wrapper">
                                                <h4 className="b-animate b-from-left  b-delay03">							
                                                <button><span className="glyphicon glyphicon-zoom-in" aria-hidden="true" />Quick View</button></h4>
                                            </div>
                                        </div></Link>						
                                        <div className="product-info simpleCart_shelfItem">
                                            <div className="product-info-cust prt_name">
                                                <h4>Lights #1</h4>								
                                                <span className="item_price">Rp. 3 Miliar</span>	
                                                <div className="ofr">
                                                    <p className="pric1"><del>Rs 280</del></p>
                                                    <p className="disc">[12% Off]</p>
                                                </div>
                                                    <input type="text" className="item_quantity" defaultValue={1} />
                                                    <input type="button" className="item_add items" defaultValue="ADD" />
                                                <div className="clearfix"> </div>
                                            </div>						
                                        </div>
                                    </div>
                                    <div className="product-grid">
                                        <Link to="/Single">
                                        <div className="more-product"><span> </span></div>						
                                        <div className="product-img b-link-stripe b-animate-go  thickbox">
                                            <img src="images/p10.jpg" className="img-responsive" style={{width: 250, height: 150}} />
                                            <div className="b-wrapper">
                                                <h4 className="b-animate b-from-left  b-delay03">							
                                                <button><span className="glyphicon glyphicon-zoom-in" aria-hidden="true" />Quick View</button></h4>
                                            </div>
                                        </div></Link>						
                                        <div className="product-info simpleCart_shelfItem">
                                            <div className="product-info-cust prt_name">
                                                <h4>Lights #1</h4>								
                                                <span className="item_price">Rp. Miliar</span>	
                                                <div className="ofr">
                                                    <p className="pric1"><del>Rs 280</del></p>
                                                    <p className="disc">[12% Off]</p>
                                                </div>
                                                    <input type="text" className="item_quantity" defaultValue={1} />
                                                    <input type="button" className="item_add items" defaultValue="ADD" />
                                                <div className="clearfix"> </div>
                                            </div>						
                                        </div>
                                    </div>
                                    <div className="product-grid">
                                        <Link to="/Single">
                                        <div className="more-product"><span> </span></div>						
                                        <div className="product-img b-link-stripe b-animate-go  thickbox">
                                            <img src="images/p11.jpg" className="img-responsive" style={{width: 250, height: 150}} />
                                            <div className="b-wrapper">
                                                <h4 className="b-animate b-from-left  b-delay03">							
                                                <button><span className="glyphicon glyphicon-zoom-in" aria-hidden="true" />Quick View</button></h4>
                                            </div>
                                        </div></Link>						
                                        <div className="product-info simpleCart_shelfItem">
                                            <div className="product-info-cust prt_name">
                                                <h4>Lights #1</h4>								
                                                <span className="item_price">Rp. Miliar</span>	
                                                <div className="ofr">
                                                    <p className="pric1"><del>Rs 280</del></p>
                                                    <p className="disc">[12% Off]</p>
                                                </div>
                                                    <input type="text" className="item_quantity" defaultValue={1} />
                                                    <input type="button" className="item_add items" defaultValue="ADD" />
                                                <div className="clearfix"> </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-grid">
                                        <Link to="/Single">
                                        <div className="more-product"><span> </span></div>						
                                        <div className="product-img b-link-stripe b-animate-go  thickbox">
                                            <img src="images/p12.jpg" className="img-responsive" style={{width: 250, height: 150}} />
                                            <div className="b-wrapper">
                                                <h4 className="b-animate b-from-left  b-delay03">							
                                                <button><span className="glyphicon glyphicon-zoom-in" aria-hidden="true" />Quick View</button></h4>
                                            </div>
                                        </div></Link>						
                                        <div className="product-info simpleCart_shelfItem">
                                            <div className="product-info-cust prt_name">
                                                <h4>Lights #1</h4>								
                                                <span className="item_price">Rp. Miliar</span>	
                                                <div className="ofr">
                                                    <p className="pric1"><del>Rs 280</del></p>
                                                    <p className="disc">[12% Off]</p>
                                                </div>
                                                    <input type="text" className="item_quantity" defaultValue={1} />
                                                    <input type="button" className="item_add items" defaultValue="ADD" />
                                                <div className="clearfix"> </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="rsidebar span_1_of_left">
                                    <section className="sky-form">
                                        <div className="product_right">
                                            <h4 className="m_2"><span className="glyphicon glyphicon-minus" aria-hidden="true" />Categories</h4>
                                            <div className="tab1">
                                                <ul className="place">								
                                                    <li className="sort">Jual</li>
                                                    <li className="by"><img src="images/do.png" alt /></li>
                                                    <div className="clearfix"> </div>
                                                </ul>
                                                <div className="single-bottom">						
                                                    <Link to="#"><p>Lanterns</p></Link>
                                                    <Link to="#"><p>Wall Lamps</p></Link>
                                                    <Link to="#"><p>Table Lamps</p></Link>
                                                    <Link to="#"><p>Selling Lamps</p></Link>
                                                </div>
                                            </div>						  
                                            <div className="tab2">
                                                <ul className="place">								
                                                    <li className="sort">Beli</li>
                                                    <li className="by"><img src="images/do.png" alt /></li>
                                                    <div className="clearfix"> </div>
                                                </ul>
                                                <div className="single-bottom">						
                                                    <Link to="#"><p>Lanterns</p></Link>
                                                    <Link to="#"><p>Disco Lights</p></Link>									
                                                </div>
                                            </div>
                                            <div className="tab3">
                                                <ul className="place">								
                                                    <li className="sort">Rumah</li>
                                                    <li className="by"><img src="images/do.png" alt /></li>
                                                    <div className="clearfix"> </div>
                                                </ul>
                                                <div className="single-bottom">						
                                                    <Link to="#"><p>Lights &amp; Lamps</p></Link>
                                                </div>
                                            </div>
                                            <div className="tab4">
                                                <ul className="place">								
                                                    <li className="sort">Apartemen</li>
                                                    <li className="by"><img src="images/do.png" alt /></li>
                                                    <div className="clearfix"> </div>
                                                </ul>
                                                <div className="single-bottom">						
                                                    <Link to="#"><p>Standing Lamps</p></Link>
                                                    <Link to="#"><p>Lamps</p></Link>
                                                    <Link to="#"><p>Led Lamps</p></Link>
                                                </div>
                                            </div>
                                            <div className="tab5">
                                                <ul className="place">								
                                                    <li className="sort">Tanah</li>
                                                    <li className="by"><img src="images/do.png" alt /></li>
                                                    <div className="clearfix"> </div>
                                                </ul>
                                                <div className="single-bottom">						
                                                    <Link to="#"><p>Car Lights</p></Link>
                                                    <Link to="#"><p>Stick Lights</p></Link>
                                                    <Link to="#"><p>Thread Lights</p></Link>
                                                </div>
                                            </div>					 
                                        </div>
                                    </section>
                            </div>
                        <Footer />
                    </div>
                    </div>
                    </div>
                );
    }
}
export default Product;