import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import axios from 'axios';

class Producttambah extends Component {
    
    //Masih Belum Berfungsi (Foto)
    onchange = (e) => {
        switch(e.target.name)
        {
            case 'fotoiklan': this.setState(    
                {
                    foto:e.target.files[0],
                });
                break;
        }
    }

    //Fungsi kirim data berbentuk text
    tambahData = (e) =>
    {
        axios.post(`http://localhost:8002/Producttambah/`, 
            {
                juduliklan: e.juduliklan.value,
                namauser: e.namauser.value,
                deskripsi: e.deskripsi.value,
            }
        )
        .then((response) => 
        {
            console.log(response)
        });
        window.location.reload();
    }

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
                                                    <h3 className="title">Tambah Data Product</h3><p></p>
                                                        <img src="assets/img/faces/3.png" style={{borderRadius: 12, height: 24, width: 24}}/> &nbsp;
                                                        <span className="headercos">Menggunakan Akun Admin Sebagai <Link to="">Okki </Link><p /></span>
                                                    </div>
                                                </div>

                                                {/* Konten */}
                                                <div className="container" >
                                                    <form className="form-horizontal" onSubmit={this.tambahData} encType="multipart/form-data">
                                                        <fieldset> 

                                                            <div className="form-group">
                                                                <label className="col-sm-2 control-label">Judul Iklan</label>
                                                                <div className="col-sm-8">
                                                                    <input ref="juduliklan" type="text" className="form-control" placeholder="Tambah Judul Iklan"/>
                                                                </div>
                                                            </div>
                                                            
                                                            <div className="form-group">
                                                                <label className="col-sm-2 control-label">Nama User</label>
                                                                <div className="col-sm-8">
                                                                    <input ref="namauser" type="text" className="form-control" placeholder="Tambah Nama User" />
                                                                </div>
                                                            </div>
                                                            
                                                            {/* belum fix Dropdown */}
                                                            {/* <div className="form-group">
                                                                <label htmlFor="name" className="col-sm-2 control-label">Edit Kategori</label>
                                                                <div className="col-sm-8">
                                                                    <input type="text" className="form-control" placeholder="Masukan Nama Kategori" name="name"/>
                                                                </div>
                                                            </div> */}
                                                            
                                                            {/* Deskripsi */}
                                                            <div className="form-group">
                                                                <label htmlFor="description" className="col-sm-2 control-label">Tambah Deskripsi Iklan</label>
                                                                <div className="col-sm-8">
                                                                    <input ref="deskripsi" style={{height:300}} placeholder="Tambah Deskripsi" className="form-control" />
                                                                </div>
                                                            </div>

                                                            {/* Foto */}
                                                            <div className="form-group">
                                                                <label className="col-lg-2 control-label">Foto Produk</label>
                                                                <div className="col-lg-8">
                                                                    <input name="fotoiklan" onChange={this.onchange} type="file" className="form-control"/>
                                                                </div>
                                                            </div>

                                                            {/* Fungsi button Submit */}
                                                            <div className="form-group">
                                                                <div className="col-lg-10 col-lg-offset-2">
                                                                    <button type="reset" className="btn btn-warning"><i className="fa fa-remove"></i> Cancel</button>&nbsp;
                                                                    <button type="button" onClick={() => this.tambahData(this.refs)} className="btn btn-success"><i className="fa fa-paper-plane"></i> Submit</button>
                                                                </div>
                                                            </div>
                                                        </fieldset>   
                                                    </form>
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
export default Producttambah;