import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import Header from './component/Header';
import Content from './component/Content';
import Footer from './component/Footer';
// import Product from './component/Product';
import Login from './component/Login';
import Product from './component/Product';
import Account from './component/Account';
import Checkout from './component/Checkout';
import Single from './component/Single';
import Userprofile from './component/Userprofile';
import Invoice from './component/Invoice';
import Home from './component/Home';


class App extends Component 
{
    render() 
    {
        return (
                    <div>
                        {/* <Header /> */}
                        <Route exact path="/" component={Content}/>
                        <Route path='/Product' component={Product} />
                        <Route path="/Login" component={Login}/>
                        
                        <Route path="/Product" component={Product}/>
                        <Route path="/Account" component={Account}/>
                        <Route path="/Checkout" component={Checkout}/>
                        <Route path="/Single" component={Single}/>
                        <Route path="/Userprofile" component={Userprofile}/>
                        <Route path="/Invoice" component={Invoice}/>
                        {/* <Footer /> */}
                    </div>
                );
    }
}
export default App;