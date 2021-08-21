import React from 'react';
import Link from 'next/link';

const Pricing = () => {
    return (
        <div className="pricing-area bg-f9f9f9 pt-100 pb-70">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">Pricing</span>
                    <h2>Our Flexible Pricing Plan</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-6 col-xs-6">
                        <div className="single-pricing-box">
                            <div className="pricing-header">
                                <div className="icon">
                                    <i className="flaticon-paper-plane"></i>
                                    <div className="circles-box">
                                        <div className="circle-one"></div>
                                    </div>
                                </div>
                                <h3>Starter Plan</h3>
                            </div>

                            <div className="pricing-features">
                                <ul>
                                    <li>10GB Bandwidth Internet</li>
                                    <li>Business & Financ Analysing</li>
                                    <li>25 Social Media Reviews</li>
                                    <li>Customer Managemet</li>
                                    <li>24/7 Support</li>
                                </ul>
                            </div>

                            <div className="price">
                                $49.99
                                <span>Per Month</span>
                            </div>

                            <Link href="/#">
                                <a className="default-btn">Book Now</a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-xs-6">
                        <div className="single-pricing-box">
                            <div className="pricing-header">
                                <div className="icon">
                                    <i className="flaticon-jigsaw"></i>
                                    <div className="circles-box">
                                        <div className="circle-one"></div>
                                    </div>
                                </div>
                                <h3>Advance Plan</h3>
                            </div>

                            <div className="pricing-features">
                                <ul>
                                    <li>15GB Bandwidth Internet</li>
                                    <li>Business & Financ Analysing</li>
                                    <li>30 Social Media Reviews</li>
                                    <li>Customer Managemet</li>
                                    <li>24/7 Support</li>
                                </ul>
                            </div>

                            <div className="price">
                                $69.99
                                <span>Per Month</span>
                            </div>

                            <Link href="/#">
                                <a className="default-btn">Book Now</a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
                        <div className="single-pricing-box">
                            <div className="pricing-header">
                                <div className="icon">
                                    <i className="flaticon-diamond"></i>
                                    <div className="circles-box">
                                        <div className="circle-one"></div>
                                    </div>
                                </div>
                                <h3>Premium Plan</h3>
                            </div>

                            <div className="pricing-features">
                                <ul>
                                    <li>50GB Bandwidth Internet</li>
                                    <li>Business & Financ Analysing</li>
                                    <li>35 Social Media Reviews</li>
                                    <li>Customer Managemet</li>
                                    <li>24/7 Support</li>
                                </ul>
                            </div>

                            <div className="price">
                                $99.99
                                <span>Per Month</span>
                            </div>

                            <Link href="/#">
                                <a className="default-btn">Book Now</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pricing;