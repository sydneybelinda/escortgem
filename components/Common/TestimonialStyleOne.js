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

const TestimonialStyleOne = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])
    return (
        <div className="testimonials-area">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-7 col-md-12">
                        <div className="testimonials-content">
                            <span className="sub-title">Testimonials</span>
                            <h2>What Our Clients Are Saying?</h2>

                            {display ? <OwlCarousel 
                                className="testimonials-slides owl-carousel owl-theme"
                                {...options}
                            >
                                <div className="single-testimonials-item">
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

                                <div className="single-testimonials-item">
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

                                <div className="single-testimonials-item">
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

                    <div className="col-lg-5 col-md-12">
                        <div className="testimonials-image">
                            <img src="/images/testimonials-img.jpg" alt="image" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TestimonialStyleOne;