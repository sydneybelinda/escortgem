import React from 'react';

const SubscribeForm = () => {
    return (
        <div className="subscribe-area ptb-100">
            <div className="container">
                <div className="subscribe-content">
                    <span className="sub-title">Mibix Updates</span>
                    <h2>Subscribe To Our Newsletter</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    
                    <form className="newsletter-form">
                        <input type="text" className="input-newsletter" placeholder="Enter your email address" name="EMAIL" required />
                        <button type="submit" className="default-btn">Subscribe Now</button>
                    </form>
                </div>
            </div>

            <div className="shape9"><img src="/images/shape/shape9.png" alt="image" /></div>
            <div className="shape10"><img src="/images/shape/shape10.png" alt="image" /></div>
            <div className="shape11"><img src="/images/shape/shape11.png" alt="image" /></div>
            <div className="shape12"><img src="/images/shape/shape12.png" alt="image" /></div>
        </div>
    )
}

export default SubscribeForm;