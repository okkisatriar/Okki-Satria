import React, { Component } from 'react';
import {Link, Route } from 'react-router-dom';

class Header extends Component 
{
	render() 
	{
		return (
					<nav className="navbar navbar-inverse navbar-fixed-top">
						<div className="container-fluid">
							<div className="navbar-header">
								<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
								<span className="sr-only">Toggle nfboavigation</span>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
								</button>
								<a className="navbar-brand">RumaHouse</a>
							</div>
							<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
								<ul className="nav navbar-nav">
									<li className="hover"><Link to="/">Home <span className="sr-only">(current)</span></Link></li>
									<li className="dropdown"><Link to="/Product" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Products <span className="caret"></span></Link>
										<ul className="dropdown-menu">
											<li><Link to="/Product">Produk Baru</Link></li>
											<li><Link to="/Product">Hot Deal</Link></li>
											<li><Link to="/Product">Decorates</Link></li>
											<li role="separator" className="divider"></li>
											<li><Link to="/Login">Login</Link></li>
											<li role="separator" className="divider"></li>
											<li><Link to="/Product">Brands</Link></li>
										</ul>
									</li>
								</ul>
								<form className="navbar-form navbar-left">
									<div className="form-group">
										<input type="text" className="form-control" placeholder="Search"/>
									</div>
									<button type="submit" className="button">Search</button>
								</form>
								<ul className="nav navbar-nav navbar-right">
									<li className="hover"><Link to="/Login">Login</Link></li>
									<li className="hover"><Link to="/Account">Register</Link></li>
									<li className="hover"><Link to="/Checkout">Checkout</Link></li>
									<div className="cart box_1" style={{color:"white"}}></div>
									<div className="total">
										<span className="simpleCart_total"></span> (<span id="simpleCart_quantity" className="simpleCart_quantity"></span>)
										<span className="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span>
									</div>
										<p><Link to="javascript:;" className="simpleCart_empty">Empty Cart</Link></p>
										<div className="clearfix"> </div>
								</ul>
							</div>
						</div>
					</nav>
				);
	}
}
export default Header;