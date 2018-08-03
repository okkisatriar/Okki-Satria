import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import axios from 'axios';

class Productedit extends Component {
    state ={
            id: '',
            juduliklan: '',
            namauser: '',
            foto: ''
        };
    // untuk melempar data ke backend yg mengandung id (database) yang di inginkan
    componentDidMount(){
        var id_sblm = this.props.location.state.produkid;
        axios.get('http://localhost:8002/Productedit/'+id_sblm).then(
            (hasilambil) => {
                    console.log(hasilambil.data);
                    this.setState(
                    {
                        id:hasilambil.data[0].id,
                        juduliklan:hasilambil.data[0].posting,
                        nama:hasilambil.data[0].nama
                    });
                });
    }

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

    value = (e) =>{
        this.setState({
                id: e.idproduk.value,
                juduliklan: e.juduliklan.value,
                namauser: e.namauser.value
            })
        }

    updateData = (e) =>{
        e.preventDefault();
        let formData = new FormData();
        formData.append('file', this.state.foto);
        formData.append('id', this.state.id);
        formData.append('juduliklan', this.state.juduliklan);
        formData.append('nama', this.state.namauser);
        axios.post('http://localhost:8002/updatedata/', formData);
    }

    render(){
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
                                                    <h3 className="title">Edit Product</h3><p></p>
                                                        {/* <input type="submit" defaultValue="Entri Baru" /> &nbsp; */}
                                                        <img src="assets/img/faces/3.png" style={{borderRadius: 12, height: 24, width: 24}}/> &nbsp;
                                                        <span className="headercos">Menggunakan Akun Admin Sebagai <Link to="">Okki </Link><p /></span>
                                                        {/* <div className="headercos">Menggunakan Akun Admin Sebagai <Link to="user.html">Okki </Link><p /></div> */}
                                                        {/* di atas ini yang original */}
                                                    </div>
                                                </div>

                                                {/* Konten */}
                                                <div className="container">
                                                    <form className="form-horizontal" onSubmit={this.updateData} encType="multipart/form-data">
                                                        <fieldset> 
                                                            <input type="hidden" className="form-control" ref="idproduk" defaultValue={this.state.id}/>
                                                            
                                                            <div className="form-group">
                                                                <label className="col-sm-2 control-label">Judul Iklan</label>
                                                                <div className="col-sm-8">
                                                                    <input ref="juduliklan" type="text" className="form-control" Value={this.state.juduliklan} placeholder="Edit Judul Iklan"/>
                                                                </div>
                                                            </div>
                                                            
                                                            <div className="form-group">
                                                                <label className="col-sm-2 control-label">Nama User</label>
                                                                <div className="col-sm-8">
                                                                    <input ref="namauser" type="text" className="form-control" Value={this.state.nama} placeholder="Edit Nama User" />
                                                                </div>
                                                            </div>

                                                            <div className="form-group">
                                                                <label htmlFor="name" className="col-sm-2 control-label">Edit Kategori</label>
                                                                <div className="col-sm-8">
                                                                    <input type="text" className="form-control" placeholder="Masukan Nama Kategori" name="name"/>
                                                                </div>
                                                            </div>

                                                            <div className="form-group">
                                                                <label htmlFor="description" className="col-sm-2 control-label">Edit Deskripsi Iklan</label>
                                                                <div className="col-sm-8">
                                                                    <textarea style={{height:300}} placeholder="Edit Deskripsi" className="form-control" Value = {this.state.deskripsi} />
                                                                </div>
                                                            </div>

                                                            <div className="form-group">
                                                                <label className="col-lg-2 control-label">Foto Produk</label>
                                                                <div className="col-lg-8">
                                                                    <input name="fotoiklan" onChange={this.onchange} type="file" className="form-control"/>
                                                                </div>
                                                            </div>

                                                            <div className="form-group">
                                                                <div className="col-lg-10 col-lg-offset-2">
                                                                    <button type="reset" className="btn btn-warning"><i className="fa fa-remove"></i> Cancel</button>&nbsp;
                                                                    <button type="submit" onClick={() => this.value(this.refs)} className="btn btn-success"><i className="fa fa-paper-plane"></i> Submit</button>
                                                                    {/* <button type="button" onClick={() => this.updateData(this.refs)} className="btn btn-primary"><i className="fa fa-paper-plane"></i> Submit</button> */}
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
export default Productedit;