import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

class Invoice extends Component 
{
    render() 
    {
        return (
                    <div>
                        <div className="wrapper">
                            <Header/>
                            <div className="main-panel">
                                <nav className="navbar navbar-default">
                                    <div className="container-fluid">
                                        <div className="navbar-header">
                                            <button type="button" className="navbar-toggle">
                                                <span className="sr-only">Toggle navigation</span>
                                                <span className="icon-bar bar1" />
                                                <span className="icon-bar bar2" />
                                                <span className="icon-bar bar3" />
                                            </button>
                                            <Link to="#" className="navbar-brand" >Dashboard</Link>
                                        </div>
                                        <div className="collapse navbar-collapse">
                                            <ul className="nav navbar-nav navbar-right">
                                                <li>
                                                    <Link to="#" className="dropdown-toggle" data-toggle="dropdown">
                                                        <i className="ti-panel" />
                                                        <p>Stats</p>
                                                    </Link>
                                                </li>
                                                <li className="dropdown">
                                                    <Link to="#" className="dropdown-toggle" data-toggle="dropdown">
                                                        <i className="ti-bell" />
                                                        <p className="notification">5</p>
                                                        <p>Notifications</p>
                                                        <b className="caret" />
                                                    </Link>
                                                    <ul className="dropdown-menu">
                                                        <li><Link to="#">Notification 1</Link></li>
                                                        <li><Link to="#">Notification 2</Link></li>
                                                        <li><Link to="#">Notification 3</Link></li>
                                                        <li><Link to="#">Notification 4</Link></li>
                                                        <li><Link to="#">Another notification</Link></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <Link to="#">
                                                        <i className="ti-settings" />
                                                        <p>Settings</p>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </nav>
                                <div className="content">
                                    <div className="container-fluid">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="card card-plain">
                                                    <div className="header">
                                                        <h4 className="title">History Invoice</h4>
                                                    </div>
                                                    <div className="content table-responsive table-full-width">
                                                        <table className="table table-hover">
                                                            <thead>
                                                                <tr>
                                                                    <th>No. Invoice</th>
                                                                    <th>ID Invoice</th>
                                                                    <th>Costumer</th>
                                                                    <th>Email</th>
                                                                    <th>Tanggal</th>
                                                                    <th>Harga</th>
                                                                    <th>Status</th>
                                                                    <th>Detail</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>1</td>
                                                                    <td>001C</td>
                                                                    <td>Mahmud Aziz</td>
                                                                    <td>mahmudaz@gmail.com</td>
                                                                    <td>27/05/2018</td>
                                                                    <td>Rp. 13 Miliar</td>
                                                                    <td>Credit</td>
                                                                    <td><Link to="./Invoiceprint">Lihat Detail</Link></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>2</td>
                                                                    <td>002C</td>
                                                                    <td>Dani Komarudin</td>
                                                                    <td>danikomar@gmail.com</td>
                                                                    <td>07/06/2018</td>
                                                                    <td>Rp. 10 Miliar</td>
                                                                    <td>Lunas</td>
                                                                    <td><Link to="./Invoiceprint">Lihat Detail</Link></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>3</td>
                                                                    <td>003C</td>
                                                                    <td>Putri Tania</td>
                                                                    <td>putritania@gmail.com</td>
                                                                    <td>04/06/2018</td>
                                                                    <td>Rp. 11 Miliar</td>
                                                                    <td>Pending</td>
                                                                    <td><Link to="./Invoiceprint">Lihat Detail</Link></td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <Footer/>
                            </div>
                        </div>    
                    </div>
                );
    }
}
export default Invoice;