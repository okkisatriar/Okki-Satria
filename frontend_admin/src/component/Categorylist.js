import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';
import $ from 'jquery';
import Categoryedit from './Categoryedit';

class Categorylist extends Component {
    state = {
        datacategorylist : [],
    }
    componentDidMount(){
        axios.get(`http://localhost:8002/Categorylist`).then(
            (ambilData) => {

                console.log(ambilData.data);
                this.setState({
                    datacategorylist: ambilData.data
                });
            }
        )
    }

    render() 
    {
        const hasil = this.state.datacategorylist.map(
            (isi, urutan) => {
                console.log(isi)
                var urut = urutan + 1;
                var nomor = isi.id;
                var namacategory = isi.nama_category;
                
                return  <tr key = {urutan}>
                            <td style = {{textAlign : 'center'}}>{urut}</td>                                        	
                            <td style = {{textAlign : 'center'}}>{namacategory}</td>
                            <td style = {{textAlign : 'center'}}>{}</td>
                            <td>
                                <Link to =
                                    {
                                        {
                                            pathname: '/Categoryedit/', 
                                            state: {nomor: nomor}
                                        }
                                    } 
                                    className="btn btn-warning"><i className="fa fa-pencil"></i> Edit</Link>&nbsp;
                                <button className="btn btn-danger btn-md"><i className="fa fa-trash"></i> Delete</button>
                            </td>
                        </tr>
            }
        )
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
                                                    <Link to="#" className="navbar-brand">Dashboard</Link>
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
                                                <div className="card">
                                                    <div className="headercos">
                                                        <h3 className="title">Category List</h3><p></p>
                                                            <input type="submit" defaultValue="Entri Baru" /> &nbsp;
                                                            <img src="assets/img/faces/3.png" style={{borderRadius: 12, height: 24, width: 24}}/> &nbsp;
                                                            <span className="headercos">Menggunakan Akun Admin Sebagai <Link to="">Okki </Link><p /></span>
                                                            {/* <div className="headercos">Menggunakan Akun Admin Sebagai <Link to="user.html">Okki </Link><p /></div> */}
                                                            {/* di atas ini yang original */}
                                                    </div>
                                                </div>

                                                <div className="content table-responsive table-full-width">
                                                    <table className="table table-striped">
                                                        <thead>
                                                            <tr>
                                                                <th style = {{textAlign: 'center'}}>No.</th>
                                                                <th style = {{textAlign: 'center'}}>Nama Category</th>
                                                                <th style = {{textAlign: 'center'}}>Jumlah Product</th>                                    	
                                                                <th style = {{textAlign: 'center'}}>Action</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {hasil}
                                                        </tbody>
                                                    </table>
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
export default Categorylist;