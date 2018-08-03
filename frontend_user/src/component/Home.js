import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Content from './Content';

class Home extends Component 
{
    render() 
    {
        return (
                    <div>
                        <Header/>
                        <Content/>
                        <Footer/>
                    </div>
                );
    }
}
export default Home;