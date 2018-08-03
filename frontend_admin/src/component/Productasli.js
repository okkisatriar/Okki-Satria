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
                                                        <h3 className="title">Add Product</h3>
                                                        <div className="headercos">
                                                            <input type="submit" defaultValue="Entri Baru" />
                                                        </div>
                                                        <div className="headercos">
                                                            <img src="assets/img/faces/3.png" style={{borderRadius: 12, height: 24, width: 24}} />
                                                        </div>
                                                        <div className="headercos">Menggunakan Akun Admin Sebagai <Link to="user.html">Okki </Link><p /></div>
                                                    </div>
                                                </div>
                                                <div className="content table-responsive table-full-width">
                                                    <table className="table table-striped">
                                                        <thead>
                                                            <tr>
                                                                <th><input type="checkbox" /></th>
                                                                <th>ID</th>
                                                                <th>Posting</th>
                                                                <th>Nama</th>                                    	
                                                                <th>Di Lihat</th>
                                                                <th>Tanggal</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td><input type="checkbox" /></td>
                                                                <td>10011</td>                                        	
                                                                <td>Rumah Idaman Di Kelapa Gading
                                                                    <div className="Edit">
                                                                        <Link to="" title="Edit entri" >Edit</Link>
                                                                        &nbsp;|&nbsp;
                                                                        <Link to="" target>Lihat</Link>
                                                                        &nbsp;|&nbsp;
                                                                        <a kind="share">Berbagi</a>
                                                                        &nbsp;|&nbsp;
                                                                        <a kind="delete">Hapus</a>
                                                                    </div>
                                                                </td>
                                                                <td>Andre Lee</td>
                                                                <td>3000</td>
                                                                <td>15/05/2018</td>
                                                            </tr>
                                                            <tr>
                                                                <td><input type="checkbox" /></td>
                                                                <td>11002</td>
                                                                <td>Town House Di Tengah Kota
                                                                    <div className="Edit">
                                                                        <Link to="" title="Edit entri" >Edit</Link>
                                                                        &nbsp;|&nbsp;
                                                                        <Link to="" target>Lihat</Link>
                                                                        &nbsp;|&nbsp;
                                                                        <a kind="share">Berbagi</a>
                                                                        &nbsp;|&nbsp;
                                                                        <a kind="delete">Hapus</a>
                                                                    </div>
                                                                </td>
                                                                <td>Rahmat Afdari</td>
                                                                <td> 1200</td>
                                                                <td>17/05/2018</td>
                                                            </tr>
                                                            <tr>
                                                                <td><input type="checkbox" /></td>
                                                                <td>13377</td>
                                                                <td>Di Jual Rumah Minimalis Di Jakarta Selatan
                                                                    <div className="Edit">
                                                                        <Link to="" title="Edit entri" >Edit</Link>
                                                                        &nbsp;|&nbsp;
                                                                        <Link to="" target>Lihat</Link>
                                                                        &nbsp;|&nbsp;
                                                                        <a kind="share">Berbagi</a>
                                                                        &nbsp;|&nbsp;
                                                                        <a kind="delete">Hapus</a>
                                                                    </div>   
                                                                </td>
                                                                <td>Wayudi Sait</td>
                                                                <td>2000</td>
                                                                <td>07/02/2018</td>
                                                            </tr>
                                                            <tr>
                                                                <td><input type="checkbox" /></td>
                                                                <td>15667</td>
                                                                <td>Rumah Di Kontrakaan 80 jt Di Jakarta Pusat
                                                                    <div className="Edit">
                                                                        <Link to="" title="Edit entri" >Edit</Link>
                                                                        &nbsp;|&nbsp;
                                                                        <Link to="" target>Lihat</Link>
                                                                        &nbsp;|&nbsp;
                                                                        <a kind="share">Berbagi</a>
                                                                        &nbsp;|&nbsp;
                                                                        <a kind="delete">Hapus</a>
                                                                    </div>          
                                                                </td>
                                                                <td>Putri Mahendra</td>
                                                                <td>1800</td>
                                                                <td>03/03/2018</td>
                                                            </tr>
                                                            <tr>
                                                                <td><input type="checkbox" /></td>
                                                                <td>14325</td>
                                                                <td>AMPERA, BENOA TOWN HOUSE
                                                                    <div className="Edit">
                                                                        <Link to="" title="Edit entri" >Edit</Link>
                                                                        &nbsp;|&nbsp;
                                                                        <Link to="" target>Lihat</Link>
                                                                        &nbsp;|&nbsp;
                                                                        <a kind="share">Berbagi</a>
                                                                        &nbsp;|&nbsp;
                                                                        <a kind="delete">Hapus</a>
                                                                    </div>
                                                                </td>
                                                                <td>Maya Septiani</td>
                                                                <td>3000</td>
                                                                <td>23/04/2018</td>
                                                            </tr>
                                                            <tr>
                                                                <td><input type="checkbox" /></td>
                                                                <td>12336</td>
                                                                <td>Rumah KPR Di Depok
                                                                    <div className="Edit">
                                                                        <Link to="" title="Edit entri" >Edit</Link>
                                                                        &nbsp;|&nbsp;
                                                                        <Link to="" target>Lihat</Link>
                                                                        &nbsp;|&nbsp;
                                                                        <a kind="share">Berbagi</a>
                                                                        &nbsp;|&nbsp;
                                                                        <a kind="delete">Hapus</a>
                                                                    </div>
                                                                </td>
                                                                <td>Arumi Ananta</td>
                                                                <td>4000</td>
                                                                <td>11/05/2018</td>
                                                            </tr>
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
                                                    </div>
                                                    <div className="panel panel-default">
                                                        <div className="panel-heading">
                                                            <h3 className="panel-title">Manage Category</h3>
                                                        </div>
                                                        <div className="panel-body">
                                                            <div>
                                                                <div className="text-right">
                                                                    <button className="btn btn-success" onclick="$('form[name=\'mainForm\']').submit()">Save</button><br />
                                                                </div>
                                                            </div>
                                                            <ul className="nav nav-tabs" role="tablist">
                                                                <li role="presentation" className="active"><Link to="/Dashboard" aria-controls="home" role="tab" data-toggle="tab">Basic</Link></li>
                                                            </ul>
                                                            <div className="tab-content">
                                                                <div role="tabpanel" className="tab-pane active fade in" id="home"><br />
                                                                    <form className="form-horizontal" method="post" name="mainForm" action="/symbiotic/10/Linkdmin/category/Linkdd.html">
                                                                        <div className="form-group">
                                                                            <label htmlFor="name" className="col-sm-2 control-label">Nama Kategori</label>
                                                                            <div className="col-sm-10">
                                                                                <input type="text" className="form-control" id="name" placeholder="Masukan Nama Kategori" name="name" defaultValue />
                                                                            </div>
                                                                        </div>
                                                                        <div className="form-group">
                                                                            <label htmlFor="description" className="col-sm-2 control-label">Deskripsi Kategori</label>
                                                                            <div className="col-sm-10">
                                                                                <textarea id="description" placeholder="Masukan Deskripsi" className="form-control" name="description" defaultValue={""} />
                                                                            </div>
                                                                        </div>
                                                                    </form>
                                                                </div>
                                                            </div>
                                                        </div>
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