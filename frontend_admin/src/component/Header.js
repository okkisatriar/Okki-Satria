import React, { Component } from 'react';
import {Link, Route } from 'react-router-dom';

class Header extends Component 
{
	render() 
	{
		return (
                    <div>
                        <div className="sidebar" data-background-color="white" data-active-color="danger">
                            <div className="sidebar-wrapper">
                                <div className="logo">
                                    <Link to="http://www.creative-tim.com" className="simple-text">Creative Tim</Link>
                                </div>
                                <ul className="nav">
                                    <li className="active">
                                        <Link to="./Dashboard">
                                            <i className="ti-panel" />
                                            <p>Dashboard</p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="./User">
                                            <i className="ti-user" />
                                            <p>Admin Profile</p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="./Productlist">
                                            <i className="ti-view-list-alt" />
                                            <p>Product</p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="./Invoice">
                                            <i className="ti-pencil-alt2" />
                                            <p>Invoice</p>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                );
	}
}
export default Header;