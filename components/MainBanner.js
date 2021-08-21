import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(import("react-owl-carousel3"));

const options = {
  loop: true,
  nav: true,
  dots: false,
  autoplayHoverPause: true,
  autoplay: true,
  animateOut: "fadeOut",
  animateIn: "fadeIn",
  items: 1,
  navText: [
    "<i class='flaticon-back'></i>",
    "<i class='flaticon-chevron'></i>",
  ],
};

const MainBanner = () => {
  const [display, setDisplay] = React.useState(false);

  React.useEffect(() => {
    setDisplay(true);
  }, []);

  return (
    <React.Fragment>
      {display ? (
        <OwlCarousel
          className="home-slides-two owl-carousel owl-theme"
          {...options}
        >
          <div className="banner-section">
            <div className="home-content">
              <div
                className="home-banner"
                style={{
                  backgroundImage: `url('/images/hero-image-1.webp')`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              ></div>
              {/* <img src="/images/banner-img6.png" alt="image" /> */}
              {/* <span className="sub-title">Digital Marketing</span>
                            <h1>Boots Your Website Traffic</h1>
                            <p>Get all kinds of hi-tech decesion making consulting services using Artificial Intelligence and Machine Learning from one umbrella.</p>

                            <Link href="/about-us-1">
                                <a className="default-btn">Learn More</a>
                            </Link> */}
            </div>


          </div>

          <div className="banner-section">
            <div className="home-content">
              <div
                className="home-banner"
                style={{
                  backgroundImage: `url('/images/hero.jpg')`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              ></div>
            </div>

  
          </div>
        </OwlCarousel>
      ) : (
        ""
      )}
    </React.Fragment>
  );
};

export default MainBanner;
