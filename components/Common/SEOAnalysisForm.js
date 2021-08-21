import React from 'react';

const SEOAnalysisForm = () => {
    return (
        <div className="seo-analysis-area ptb-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="analysis-img">
                            <img src="/images/seo-analysis.png" alt="Image" />
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="analysis-form">
                            <span className="sub-title">Analysis</span>
                            <h2>Get Free SEO Analysis</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            
                            <form>
                                <div className="row">
                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <input type="text" className="form-control" id="your_name" placeholder="Name" />
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <input type="email" className="form-control" id="your_email" placeholder="Email" />
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <input type="text" className="form-control" id="phone_number" placeholder="Phone Number" />
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <input type="text" className="form-control" id="website" placeholder="Website" />
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" className="default-btn">Check Now</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SEOAnalysisForm;