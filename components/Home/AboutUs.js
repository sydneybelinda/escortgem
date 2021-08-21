import React from "react";
import Link from "next/link";
// import Image from 'next/image';
// import AboutImg from "./about.webp";

const AboutSection = () => {
  return (
    <div className="project-start-area ptb-100">
      <div className="container-fluid">
        <div className="flex-box align-items-center">
          <div className="left">
            <div className="project-start-image about-img">
           
          {/* <Image
            src="/images/about.webp"
            alt="High class Sydney escort agency"
            layout="responsive"
            width="600"
            height="611"
          /> */}
                    <img
            src="/images/about.webp"
            alt="High class Sydney escort agency"
          />

              {/* <img src={AboutImg} alt="High class Sydney escort agency" /> */}
            </div>
          </div>

          <div className="right">
            <div className="project-start-content">
              <span className="sub-title">
                A fun and friendly Sydney escort agency
              </span>
              <h2 className="pb-30">Welcome to Late Night Babes<br/> Sydney Escorts</h2>
              <p>
                Late Night Babes Sydney is a well respected and well reviewed
                late night high class adult services provider - specialising in
                fun, friendly and stunning young escorts.
                <br />
                <br />
                Working only with ladies that we truly like and who truly want
                to be escorts. Genuine photos guaranteed or your booking is for
                free.
                <br />
                <br />
                Prices from $450 per hour all inclusive.
              </p>

              <Link href="/about-us">
                <a className="default-btn">More About Us</a>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="shape2">
        <img src="/images/shape/shape2.png" alt="image" />
      </div>
      <div className="shape3">
        <img src="/images/shape/shape3.png" alt="image" />
      </div>
      <div className="shape5">
        <img src="/images/shape/shape5.png" alt="image" />
      </div>
      <div className="shape6">
        <img src="/images/shape/shape6.png" alt="image" />
      </div>
      <div className="shape7">
        <img src="/images/shape/shape7.png" alt="image" />
      </div>
      <div className="shape13">
        <img src="/images/shape/shape13.png" alt="image" />
      </div>
    </div>
  );


};

export default AboutSection;
