import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';
import $ from 'jquery';
import Categoryedit from './Categoryedit';
import Producttambah from './Producttambah';
import Categorytambah from './Categorytambah';

class Product extends Component {
    state = 
    {
        dataproduk : [],
        datacategorylist : [],
    }
    componentDidMount()
    {
        axios.get(`http://localhost:8002/Categorylist`).then(
            (ambilData) => {

                console.log(ambilData.data);
                this.setState({
                    datacategorylist: ambilData.data
                });
            }
        )
        
        axios.get(`http://localhost:8002/Product`).then(
            (ambilData) => {

                console.log(ambilData.data);
                this.setState({
                    dataproduk: ambilData.data
                });
            }
        )

    }

    hapusproduct = (event) =>
    {
        axios.post(`http://localhost:8002/Producthapus`,
            {
                idprod : event
            }
        )
        .then((response) =>
            {
                console.log(response)
            }
        );
        window.location.reload();
    }

    hapuscategory = (event) =>
    {
        axios.post(`http://localhost:8002/Categoryhapus`,
            {
                idcate : event
            }
        )
        .then((response) =>
            {
                console.log(response)
            }
        );
        window.location.reload();
    }

    render() 
    {
        const hasil = this.state.dataproduk.map(
            (isi, urutan) => {
                console.log(isi)
                var urut = urutan + 1;
                var produkid = isi.id;
                var judulposting = isi.posting;
                var namauser = isi.nama;
                var dilihat = isi.dilihat;
                

                return  <tr key = {urutan}>
                            <td style = {{textAlign : 'center'}}>{urut}</td>                                        	
                            <td>{judulposting}</td>
                            <td style = {{textAlign : 'center'}}>{namauser}</td>
                            <td style = {{textAlign : 'center'}}>{dilihat}</td>
                            <td style = {{textAlign : 'center'}}>
                                <Link to=
                                    {
                                        {
                                            pathname: '/Productedit/', 
                                            state: {produkid: produkid}
                                        }
                                    }
                                    className="btn btn-warning"><i className="fa fa-pencil"/>Edit</Link>&nbsp;
                                <button onClick={() => this.hapusproduct(produkid)} className="btn btn-danger btn-md"><i className="fa fa-trash"/> Delete</button>
                            </td>
                        </tr>
            }
        )

        const hasilc = this.state.datacategorylist.map(
            (isi, urutan) => {
                console.log(isi)
                var urut = urutan + 1;
                var nomor = isi.id;
                var namacategory = isi.nama_category;
                
                return  <tr key = {urutan}>
                            <td style = {{textAlign : 'center'}}>{urut}</td>                                        	
                            <td style = {{textAlign : 'center'}}>{namacategory}</td>
                            <td style = {{textAlign : 'center'}}>{}</td>
                            <td style = {{textAlign : 'center'}}>
                                <Link to =
                                    {
                                        {
                                            pathname: '/Categoryedit/', 
                                            state: {nomor: nomor}
                                        }
                                    } 
                                    className="btn btn-warning"><i className="fa fa-pencil"></i>Edit</Link>&nbsp;
                                <button onClick={() => this.hapuscategory(nomor)} className="btn btn-danger btn-md"><i className="fa fa-trash"/> Delete</button>
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
                                                        <h3 className="title">Add Product</h3><p></p>
                                                        <button><Link to="/Producttambah">Entri Baru</Link></button> &nbsp;
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
                                                                <th style = {{textAlign: 'center'}}>Posting</th>
                                                                <th style = {{textAlign: 'center'}}>Nama</th>                                    	
                                                                <th style = {{textAlign: 'center'}}>Di Lihat</th>
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

                                        <div className="container-fluid content-view">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="page-header">
                                                        <h2>Add new category</h2>
                                                        <button><Link to="/Categorytambah">Entri Baru</Link></button>
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
                                                            {hasilc}
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
export default Product;