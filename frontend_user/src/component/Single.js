import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

class Single extends Component 
{
    render() 
    {
        return (
                    <div>
                        <Header />
                        <div className="product">
                            <div className="container">				
                                <div className="product-price1">
                                    <div className="top-sing">
                                        <div className="col-md-7 single-top">	
                                            <div className="flexslider">
                                                <ul className="slides">
                                                    <li data-thumb="images/si.jpg">
                                                        <div className="thumb-image">
                                                            <img src="images/RH1.jpg" data-imagezoom="true" className="img-responsive" alt /> 
                                                        </div>
                                                    </li>
                                                    <li data-thumb="images/si2.jpg">
                                                        <div className="thumb-image"> 
                                                            <img src="images/IN 1.jpeg" data-imagezoom="true" className="img-responsive" alt /> 
                                                        </div>
                                                    </li>
                                                    <li data-thumb="images/si3.jpg">
                                                        <div className="thumb-image"> 
                                                            <img src="images/IN 2.jpg" data-imagezoom="true" className="img-responsive" alt /> 
                                                        </div>
                                                    </li> 
                                                </ul>
                                            </div>					 					 
                                        </div>	
                                        <div className="col-md-5 single-top-in simpleCart_shelfItem">
                                            <div className="single-para ">
                                                <h4>AMPERA, BENOA TOWN HOUSE </h4>							
                                                <h5 className="item_price">Rp. 13 Miliar</h5>							
                                                <p className="para">Townhouse baru di kawasan Jakarta Selatan dengan lokasi yang sangat strategis dekat dengan pusat perbelanjaan, sekolah international, rumah sakit maupun pusat perkantoran dikawasan TB Simatupang &amp; Kemang. Akses yang sangat mudah menuju kawasan Cilandak Town Square, Kemang Village Mall,Nederland International School, High Scope Indonesia, Australia International School, Rumah Sakit Kemang Medical , Rumah SakitBrawijaya Women &amp; Children, Talavera Office Park. 
                                                Serta didukung dengan fasilitas yang sangat lengkap dan eksklusif</p>
                                                <div className="prdt-info-grid">
                                                    <ul>
                                                        <li>- Tipe : Rumah Dijual</li>
                                                        <li>- Sertifikat : Hak Milik</li>
                                                        <li>- Luas Bangunan &amp; Tanah : 370 m² &amp; 186 m²</li>
                                                        <li>- Listrik : 4400 KVA</li>
                                                        <li>- Keamanan : 24 Jam Post Security + CCTV Camera</li>
                                                    </ul>
                                                </div>
                                                <div className="check">
                                                    <p><span className="glyphicon glyphicon-map-marker" aria-hidden="true" />Enter pin code for delivery &amp; availability</p>
                                                    <form className="navbar-form">
                                                        <div className="form-group">
                                                            <input type="text" className="form-control" placeholder="Enter Pin code" />
                                                        </div>
                                                        <button type="submit" className="btn btn-default">Verify</button>
                                                    </form>
                                                </div>
                                                <a href="#" className="add-cart item_add">ADD TO CART</a>							
                                            </div>
                                        </div>
                                        <div className="clearfix"> </div>
                                    </div>
                                </div>
                                <div className="container" style={{marginBottom: 50}}>
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <a href="/Product">
                                            <img src="images/RH5.jpg" className="gambarsize" alt />
                                            <h4>Product#1</h4>
                                            <span>Rp. 8 Miliar</span></a>
                                        </div>
                                        <div className="col-sm-3">
                                            <a href="/Product">
                                            <img src="images/RH4.jpg" className="gambarsize" alt />
                                            <h4>Product#1</h4>
                                            <span>Rp. 10 Miliar</span></a>
                                        </div>
                                        <div className="col-sm-3">
                                            <a href="/Product">
                                                <img src="images/RH3.jpg" className="gambarsize" alt />
                                                <h4>Rumah Idaman Di Kelapa Gading</h4>
                                                <span>Rp. 15 Miliar</span></a>
                                        </div>
                                        <div className="col-sm-3">
                                            <a href="/Product">
                                            <img src="images/RH8.jpg" className="gambarsize" alt />
                                            <h4>Town House Di Tengah Kota</h4>
                                            <span>Rp. 11 Miliar</span></a>
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
                            </div>
                        </div>
                        <Footer />
                    </div>   
                );
    }
}
export default Single;