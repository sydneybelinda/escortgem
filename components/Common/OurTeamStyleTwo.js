import React from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    nav: false,
    dots: true,
    autoplayHoverPause: true,
    autoplay: true,
    margin: 30,
    navText: [
        "<i class='flaticon-back'></i>",
        "<i class='flaticon-chevron'></i>"
    ],
    responsive: {
        0: {
            items: 1,
        },
        576: {
            items: 2,
        },
        768: {
            items: 2,
        },
        992: {
            items: 4,
        }
    }
};

const OurTeamStyleTwo = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])

    return (
        <div className="team-area-two ptb-100">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">Our Team</span>
                    <h2>We Help to Acheive Your Business Goal</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                </div>

                {display ? <OwlCarousel 
                    className="team-slides owl-carousel owl-theme"
                    {...options}
                >
                    <div className="single-team-member">
                        <div className="image">
                            <img src="/images/team/team-img1.jpg" alt="team-image" />

                            <ul className="social-link">
                                <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-facebook'></i></a></li>
                                <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-twitter'></i></a></li>
                                <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-instagram'></i></a></li>
                                <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-linkedin'></i></a></li>
                            </ul>
                        </div>

                        <div className="content">
                            <h3>James Anderson</h3>
                            <span>CEO</span>
                            <i className="flaticon-share-icon"></i>
                        </div>
                    </div>

                    <div className="single-team-member">
                        <div className="image">
                            <img src="/images/team/team-img2.jpg" alt="team-image" />

                            <ul className="social-link">
                                <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-facebook'></i></a></li>
                                <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-twitter'></i></a></li>
                                <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-instagram'></i></a></li>
                                <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-linkedin'></i></a></li>
                            </ul>
                        </div>

                        <div className="content">
                            <h3>Sarah Taylor</h3>
                            <span>Marketing Lead</span>
                            <i className="flaticon-share-icon"></i>
                        </div>
                    </div>

                    <div className="single-team-member">
                        <div className="image">
                            <img src="/images/team/team-img3.jpg" alt="team-image" />

                            <ul className="social-link">
                                <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-facebook'></i></a></li>
                                <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-twitter'></i></a></li>
                                <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-instagram'></i></a></li>
                                <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-linkedin'></i></a></li>
                            </ul>
                        </div>

                        <div className="content">
                            <h3>Taylor Sopia</h3>
                            <span>Web Designer</span>
                            <i className="flaticon-share-icon"></i>
                        </div>
                    </div>

                    <div className="single-team-member">
                        <div className="image">
                            <img src="/images/team/team-img4.jpg" alt="team-image" />

                            <ul className="social-link">
                                <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-facebook'></i></a></li>
                                <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-twitter'></i></a></li>
                                <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-instagram'></i></a></li>
                                <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-linkedin'></i></a></li>
                            </ul>
                        </div>

                        <div className="content">
                            <h3>Harry Steve</h3>
                            <span>Web Developer</span>
                            <i className="flaticon-share-icon"></i>
                        </div>
                    </div>

                    <div className="single-team-member">
                        <div className="image">
                            <img src="/images/team/team-img5.jpg" alt="team-image" />

                            <ul className="social-link">
                                <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-facebook'></i></a></li>
                                <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-twitter'></i></a></li>
                                <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-instagram'></i></a></li>
                                <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-linkedin'></i></a></li>
                            </ul>
                        </div>

                        <div className="content">
                            <h3>Alina Smith</h3>
                            <span>Advisor</span>
                            <i className="flaticon-share-icon"></i>
                        </div>
                    </div>

                    <div className="single-team-member">
                        <div className="image">
                            <img src="/images/team/team-img6.jpg" alt="team-image" />

                            <ul className="social-link">
                                <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-facebook'></i></a></li>
                                <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-twitter'></i></a></li>
                                <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-instagram'></i></a></li>
                                <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-linkedin'></i></a></li>
                            </ul>
                        </div>

                        <div className="content">
                            <h3>David Warner</h3>
                            <span>Support</span>
                            <i className="flaticon-share-icon"></i>
                        </div>
                    </div>
                </OwlCarousel> : ''}
            </div>

            <div className="shape17">
                <img src="/images/shape/shape17.png" alt="image" />
            </div>
        </div>
    )
}

export default OurTeamStyleTwo;