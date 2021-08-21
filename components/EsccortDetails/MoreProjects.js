import React from 'react';
import Link from 'next/link';

const MoreProjects = () => {
    return (
        <div className="portfolio-area pb-70">
            <div className="container">
                <div className="section-title">
                    <h2>More Projects You Might Like</h2>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="single-portfolio-item">
                            <Link href="/single-portfolio">
                                <a className="image d-block">
                                    <img src="/images/portfolio/portfolio-img1.jpg" alt="image" />
                                </a>
                            </Link>
    
                            <div className="content">
                                <h3>
                                    <Link href="/single-portfolio">
                                        <a>Customer Satisfaction for a Digital Marketing Agency</a>
                                    </Link>
                                </h3>

                                <Link href="/single-portfolio">
                                    <a className="link-btn"><i className="flaticon-next-button"></i></a>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-portfolio-item">
                            <Link href="/single-portfolio">
                                <a className="image d-block">
                                    <img src="/images/portfolio/portfolio-img2.jpg" alt="image" />
                                </a>
                            </Link>
    
                            <div className="content">
                                <h3>
                                    <Link href="/single-portfolio">
                                        <a>Return on Investment for Various Digital Marketing</a>
                                    </Link>
                                </h3>
                                
                                <Link href="/single-portfolio">
                                    <a className="link-btn"><i className="flaticon-next-button"></i></a>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                        <div className="single-portfolio-item">
                            <Link href="/single-portfolio">
                                <a className="image d-block">
                                    <img src="/images/portfolio/portfolio-img3.jpg" alt="image" />
                                </a>
                            </Link>
    
                            <div className="content">
                                <h3>
                                    <Link href="/single-portfolio">
                                        <a>Google Search Engine Marketing Case Study</a>
                                    </Link>
                                </h3>
                                
                                <Link href="/single-portfolio">
                                    <a className="link-btn"><i className="flaticon-next-button"></i></a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MoreProjects;