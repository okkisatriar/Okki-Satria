import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom';

class Footer extends Component 
{
    render() 
    {
        return (              
                    <div>
                        <footer className="footer">
                            <div className="container-fluid">
                                <nav className="pull-left">
                                    <ul>
                                        <li>
                                        <Link to="http://www.creative-tim.com">Creative Tim</Link>
                                        </li>
                                        <li>
                                        <Link to="http://blog.creative-tim.com">Blog</Link>
                                        </li>
                                        <li>
                                        <Link to="http://www.creative-tim.com/license">Licenses</Link>
                                        </li>
                                    </ul>
                                </nav>
                                <div className="copyright pull-right"> © , made with 
                                    <i className="fa fa-heart heart" /> by 
                                    <Link to="http://www.creative-tim.com">Creative Tim</Link>
                                </div>
                            </div>
                        </footer>
                    </div>
                );
    }
}
export default Footer;