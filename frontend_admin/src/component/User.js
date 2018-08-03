import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

class User extends Component 
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
                                                    <Link to="./Dashboard" className="navbar-brand" >Dashboard</Link>
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
                                            <div className="col-lg-4 col-md-5">
                                                <div className="card card-user">
                                                    <div className="image">
                                                        <img src="assets/img/faces/download.png" alt="..." />
                                                    </div>
                                                    <div className="content">
                                                    <div className="author">
                                                        <img className="avatar border-white" src="assets/img/faces/3.png" alt="..." />
                                                        <h4 className="title">Okki Satria<br />
                                                            <Link to="www.google.com"><small>@okkihouse</small></Link>
                                                        </h4>
                                                    </div>
                                                        <p className="description text-center">
                                                            "When you are young, work to learn, not to earn."
                                                        </p>
                                                    </div><hr />
                                                    <div className="text-center">
                                                        <div className="row">
                                                            <div className="col-md-3 col-md-offset-1">
                                                                <h5>12<br /><small>Files</small></h5>
                                                            </div>
                                                            <div className="col-md-4">
                                                                <h5>2GB<br /><small>Used</small></h5>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <h5>24,6$<br /><small>Spent</small></h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card">
                                                    <div className="header">
                                                        <h4 className="title">Team Members</h4>
                                                    </div>
                                                    <div className="content">
                                                        <ul className="list-unstyled team-members">
                                                            <li>
                                                                <div className="row">
                                                                    <div className="col-xs-3">
                                                                        <div className="avatar">
                                                                            <img src="assets/img/faces/4.jpg" alt="Circle Image" className="img-circle img-no-padding img-responsive" />
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-xs-6">Asril<br />
                                                                        <span className="text-muted"><small>Offline</small></span>
                                                                    </div>
                                                                    <div className="col-xs-3 text-right">
                                                                        <btn className="btn btn-sm btn-success btn-icon"><i className="fa fa-envelope" /></btn>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="row">
                                                                    <div className="col-xs-3">
                                                                        <div className="avatar">
                                                                            <img src="assets/img/faces/5.jpg" alt="Circle Image" className="img-circle img-no-padding img-responsive" />
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-xs-6">Faldo<br />
                                                                        <span className="text-success"><small>Available</small></span>
                                                                    </div>
                                                                    <div className="col-xs-3 text-right">
                                                                        <btn className="btn btn-sm btn-success btn-icon"><i className="fa fa-envelope" /></btn>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="row">
                                                                    <div className="col-xs-3">
                                                                        <div className="avatar">
                                                                            <img src="assets/img/faces/6.jpg" alt="Circle Image" className="img-circle img-no-padding img-responsive" />
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-xs-6">Ichsan<br />
                                                                        <span className="text-danger"><small>Busy</small></span>
                                                                    </div>
                                                                    <div className="col-xs-3 text-right">
                                                                        <btn className="btn btn-sm btn-success btn-icon"><i className="fa fa-envelope" /></btn>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-8 col-md-7">
                                                <div className="card">
                                                    <div className="header">
                                                        <h4 className="title">Edit Profile</h4>
                                                    </div>
                                                    <div className="content">
                                                        <form>
                                                            <div className="row">
                                                                <div className="col-md-5">
                                                                    <div className="form-group">
                                                                        <label>Perusahaan</label>
                                                                        <input type="text" className="form-control border-input" disabled placeholder="Company" defaultValue="Rumahouse.com" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">
                                                                        <label>Username</label>
                                                                        <input type="text" className="form-control border-input" placeholder="Username" defaultValue="okkihouse" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-4">
                                                                    <div className="form-group">
                                                                        <label htmlFor="exampleInputEmail1">Alamat Email</label>
                                                                        <input type="email" className="form-control border-input" placeholder="Email" defaultValue="o.satriarahmat@gmail.com" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-md-6">
                                                                    <div className="form-group">
                                                                        <label>Nama Depan</label>
                                                                        <input type="text" className="form-control border-input" placeholder="Company" defaultValue="Okki" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className="form-group">
                                                                        <label>Nama Belakang</label>
                                                                        <input type="text" className="form-control border-input" placeholder="Last Name" defaultValue="Satria" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-md-12">
                                                                    <div className="form-group">
                                                                        <label>Alamat</label>
                                                                        <input type="text" className="form-control border-input" placeholder="Home Address" defaultValue="Cempaka Putih, Jakarta" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-md-4">
                                                                    <div className="form-group">
                                                                        <label>Kota</label>
                                                                        <input type="text" className="form-control border-input" placeholder="City" defaultValue="Jakarta" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-4">
                                                                    <div className="form-group">
                                                                        <label>Negara</label>
                                                                        <input type="text" className="form-control border-input" placeholder="Country" defaultValue="Indonesia" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-4">
                                                                    <div className="form-group">
                                                                        <label>Kode Pos</label>
                                                                        <input type="number" className="form-control border-input" placeholder="ZIP Code" defaultValue={10510} />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-md-12">
                                                                    <div className="form-group">
                                                                        <label>Tentang Saya</label>
                                                                        <textarea rows={5} className="form-control border-input" placeholder="Here can be your description" value="Mike" defaultValue={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."} />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="text-center">
                                                                <button type="submit" className="btn btn-info btn-fill btn-wd">Update Profile</button>
                                                            </div>
                                                            <div className="clearfix" />
                                                        </form>
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
export default User;