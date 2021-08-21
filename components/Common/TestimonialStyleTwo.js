import React from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    nav: false,
    dots: true,
    autoplayHoverPause: true,
    autoplay: true,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    items: 1,
    navText: [
        "<i class='flaticon-back'></i>",
        "<i class='flaticon-chevron'></i>"
    ]
};

const TestimonialStyleTwo = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])

    return (
        <div className="feedback-area ptb-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="feedback-image">
                            <img src="/images/feedback-img1.jpg" alt="image" />
                            <img src="/images/feedback-img2.jpg" alt="image" />
                            <img src="/images/feedback-img3.jpg" alt="image" />
                            <img src="/images/feedback-img4.jpg" alt="image" />
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="feedback-content">
                            <span className="sub-title">Feedback</span>
                            <h2>What Our Clients Are Saying?</h2>

                            {display ? <OwlCarousel 
                                className="feedback-slides owl-carousel owl-theme"
                                {...options}
                            > 
                                <div className="single-feedback-item">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>

                                    <div className="client-info">
                                        <div className="d-flex align-items-center">
                                            <img src="/images/user1.jpg" alt="image" />
                                            <div className="title">
                                                <h3>John Smith</h3>
                                                <span>Python Developer</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="single-feedback-item">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>

                                    <div className="client-info">
                                        <div className="d-flex align-items-center">
                                            <img src="/images/user2.jpg" alt="image" />
                                            <div className="title">
                                                <h3>Sarah Taylor</h3>
                                                <span>Web Developer</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="single-feedback-item">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>

                                    <div className="client-info">
                                        <div className="d-flex align-items-center">
                                            <img src="/images/user3.jpg" alt="image" />
                                            <div className="title">
                                                <h3>James Anderson</h3>
                                                <span>Web Designer</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </OwlCarousel> : ''}
                        </div>
                    </div>
                </div>
            </div>

            <div className="shape16">
                <img src="/images/shape/shape16.png" alt="image" />
            </div>
        </div>
    )
}

export default TestimonialStyleTwo;