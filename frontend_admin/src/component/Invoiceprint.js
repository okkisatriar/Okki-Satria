import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom';

class Invoiceprint extends Component 
{
    render() 
    {
        return (

                    <div className="container">
                        <div className="row">
                        <div className="col-xs-12">
                            <div className="invoice-title">
                            <h2>Invoice</h2><h3 className="pull-right">Order ID 001C</h3>
                            </div>
                            <hr />
                            <div className="row">
                            <div className="col-xs-6">
                                <address>
                                <strong>Billed To:</strong><br />
                                Mahmud Aziz<br />
                                mahmudaz@gmail.com<br />
                                Jakarta<br />
                                Indonesia
                                </address>
                            </div>
                            <div className="col-xs-6 text-right">
                                <address>
                                <strong>Shipped To:</strong><br />
                                Mahmud Aziz<br />
                                mahmudaz@gmail.com<br />
                                Jakarta<br />
                                Indonesia
                                </address>
                            </div>
                            </div>
                            <div className="row">
                            <div className="col-xs-6">
                                <address>
                                <strong>Payment Method:</strong><br />
                                Visa ending **** 4242<br />
                                mahmudaz@gmail.com
                                </address>
                            </div>
                            <div className="col-xs-6 text-right">
                                <address>
                                <strong>Order Date:</strong><br />
                                27/05/2018 <br /><br />
                                </address>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="row">
                        <div className="col-md-12">
                            <div className="panel panel-default">
                            <div className="panel-heading">
                                <h3 className="panel-title"><strong>Order summary</strong></h3>
                            </div>
                            <div className="panel-body">
                                <div className="table-responsive">
                                <table className="table table-condensed">
                                    <thead>
                                    <tr>
                                        <td><strong>Item</strong></td>
                                        <td className="text-center"><strong>Price</strong></td>
                                        <td className="text-center"><strong>Quantity</strong></td>
                                        <td className="text-right"><strong>Totals</strong></td>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>Home-001</td>
                                        <td className="text-center">Rp.13 Miliar</td>
                                        <td className="text-center">1</td>
                                        <td className="text-right">Rp.13 Miliar</td>
                                    </tr>
                                    <tr>
                                        <td className="no-line" />
                                        <td className="no-line" />
                                        <td className="no-line text-center"><strong>Cash</strong></td>
                                        <td className="no-line text-right">Rp.13 Miliar</td>
                                    </tr>
                                    </tbody>
                                </table>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                );
    }
}
export default Invoiceprint;