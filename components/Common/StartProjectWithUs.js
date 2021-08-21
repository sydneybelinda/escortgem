import React from 'react';
import Link from 'next/link';

const StartProjectWithUs = () => {
    return (
        <div className="project-start-area ptb-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="project-start-image">
                            <img src="/images/project-start1.png" alt="image" />
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="project-start-content">
                            <span className="sub-title">Get Started</span>
                            <h2>We Like to Start Your Project With Us</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                            
                            <Link href="/contact">
                                <a className="default-btn">Get Started</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="shape2"><img src="/images/shape/shape2.png" alt="image" /></div>
            <div className="shape3"><img src="/images/shape/shape3.png" alt="image" /></div>
            <div className="shape5"><img src="/images/shape/shape5.png" alt="image" /></div>
            <div className="shape6"><img src="/images/shape/shape6.png" alt="image" /></div>
            <div className="shape7"><img src="/images/shape/shape7.png" alt="image" /></div>
            <div className="shape13"><img src="/images/shape/shape13.png" alt="image" /></div>
        </div>
    )
}

export default StartProjectWithUs;