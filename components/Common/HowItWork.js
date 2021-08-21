import React from 'react';

const HowItWork = () => {
    return (
        <div className="how-its-work-area ptb-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="how-its-work-content">
                            <span className="sub-title">How It's Work</span>
                            <h2>Our Working Process</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>

                            <div className="inner-box">
                                <div className="single-item">
                                    <div className="count-box">
                                        01
                                    </div>
                                    <h3>Planning</h3>
                                    <p>Dolor sit amet consectetur elit eiusmod tempor incidi dunt labore dolore magna aliqua enim.</p>
                                </div>

                                <div className="single-item">
                                    <div className="count-box">
                                        02
                                    </div>
                                    <h3>Research</h3>
                                    <p>Dolor sit amet consectetur elit eiusmod tempor incidi dunt labore dolore magna aliqua enim.</p>
                                </div>

                                <div className="single-item">
                                    <div className="count-box">
                                        03
                                    </div>
                                    <h3>Results</h3>
                                    <p>Dolor sit amet consectetur elit eiusmod tempor incidi dunt labore dolore magna aliqua enim.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="how-its-work-image">
                            <img src="/images/how-its-work.png" alt="image" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HowItWork;