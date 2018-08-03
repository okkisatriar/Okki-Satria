import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

// import Home from './component/Home';
import Header from './component/Header';
import Footer from './component/Footer';
import Login from './component/Login';
import Dashboard from './component/Dashboard';
import User from './component/User';

import Productlist from './component/Productlist';
import Producttambah from './component/Producttambah';
// import p_roducttambah from './component/p_roducttambah';
import Productedit from './component/Productedit';

import Categorylist from './component/Categorylist';
import Categorytambah from './component/Categorytambah';
import Categoryedit from './component/Categoryedit';

import Invoice from './component/Invoice';
import Invoiceprint from './component/Invoiceprint';

class App extends Component 
{
    render() 
    {
        return (
                    <div>               
                        <Route path="/Dashboard" component={Dashboard}/>         
                        <Route exact path="/" component={Login}/>
                        <Route path="/User" component={User}/>
                        
                        <Route path="/Productlist" component={Productlist}/>  
                        <Route path="/Producttambah" component={Producttambah}/>                      
                        {/* <Route path="/p_roducttambah" component={p_roducttambah}/>                       */}
                        <Route path="/Productedit" component={Productedit}/>                        
                        
                        {/* <Header /> */}
                        
                        <Route path="/Categorylist" component={Categorylist}/>
                        <Route path="/Categorytambah" component={Categorytambah}/>
                        <Route path="/Categoryedit" component={Categoryedit}/>

                        <Route path="/Invoice" component={Invoice}/>
                        <Route path="/Invoiceprint" component={Invoiceprint}/>
                        {/* <Route path="/Invoice" component={Invoice}/> */}
                        {/* <Footer /> */}
                    </div>
                );
    }
}
export default App;