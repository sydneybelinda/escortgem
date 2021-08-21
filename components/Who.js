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

const Who = () => {


    const  phoneUrl= `+61${Config.phone.replace(/\s/g,"").substring(1)}`;

    return (
        <div className="feedback-area ptb-15">
            <div className="container">
                <div className="row align-items-center">

                    <div className="col-md-12">
                        <div className="feedback-content who">
                           
                            <h1>Escort<span className="text-white">Gem</span>
                            <span className="sub-title">A high class escort directory<br/>For agencies and independent escorts</span>
                            </h1>


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

export default Who;