import React from 'react';
import Config from "../config";
import Link from 'next/link';

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

const Work = () => {


    const  phoneUrl= `+61${Config.phone.replace(/\s/g,"").substring(1)}`;

    return (
        <div className="feedback-area ptb-100 work">
            <div className="container-fluid">
                <div className="row align-items-center">

                    <div className="col-md-12">
                        <div className="feedback-content who">
                           
                            <h2>Looking for escort work?

                            </h2>



                                <div className="single-feedback-item">
                                    <p>Work with Sydney's Best and friendliest agency.<br/>
Have fun working the way you want to work while paying the lowest agency fees.</p>
                        

           
                                </div>

                                <div className="btn-box">
                                    <div className="align-items-center">
                                        <Link href='/escort-jobs'>
                                            <a className="default-btn">Escort jobs</a>
                                        </Link>
                                        

                                    </div>
                                </div>

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

export default Work;