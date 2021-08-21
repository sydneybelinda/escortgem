import React from "react";
import Link from "next/link";
import Config from "../../config";
import nl2br from "react-nl2br";

const phoneUrl = `+61${Config.phone.replace(/\s/g, "").substring(1)}`;

const Footer = (props) => {
  const currentYear = new Date().getFullYear();


  return (
    <>
      {/* {props.services ? (
        <>
        <div className="services-section">
          <div className="container-fluid">
            <div className="row">
              {props.services.hair.map((h) => (
                <div className="col-lg-3 col-md-4 col-sm-6" key={h.keyindex}>
                  <a href={`/tp/hair/${h.keyindex}`}>{h.keyword1}</a>
                </div>
              ))}
          
              {props.services.eyes.map((h) => (
                <div className="col-lg-3 col-md-4 col-sm-6" key={h.keyindex}>
                  <a href={`/tp/eyes/${h.keyindex}`}>{h.keyword1}</a>
                </div>
              ))}
         
              {props.services.services.map((s) => (
                s.keyindex ? (  
                <div className="col-lg-3 col-md-4 col-sm-6" key={s.keyindex}>
                  <a href={`/tp/services/${s.keyindex}`}>{s.keyword1}</a>
                </div>) : '' 

              ))}
              {props.services.other.map((h) => (
                <div className="col-lg-3 col-md-4 col-sm-6" key={h.keyindex}>
                  <a href={`/tp/other/${h.keyindex}`}>{h.keyword1}</a>
                </div>
              ))}
            </div>

          </div>
          <div className="footer-locs">
                    <div className="container-fluid">
                      <h2>Locations</h2>
                      <div className="row">
                        {props.locs.map((h) => (
                          <div className="col-lg-3 col-md-4 col-sm-6" key={h.key1}>
                            <a href={`/local/${h.loc}`}>{h.key1}</a>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
        </div>

                  </>
      ) : (
        ""
      )} */}
      <footer className="footer-area">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <Link href="/">
                  <a className="logo">
                    {/* <img
                      src="/images/logo-white.png"
                      alt="Late Night Babes Sydney"
                    /> */}
                     <span className="brand"> EscortGem</span>
                  </a>
                </Link>
                <p>
                  EscortGem. A high class escort directory for agencies and independent escorts
                </p>

                <ul className="social-link">
                  <li>
                    <a
                      href={Config.twitter}
                      className="d-block"
                      target="_blank"
                    >
                      <i className="bx bxl-twitter"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-2 col-md-6 col-sm-6">
              <div className="single-footer-widget pl-5">
                <h3>Explore</h3>

                <ul className="footer-links-list">
                  <li>
                    <Link href="/">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/about-us">
                      <a>About</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/escorts">
                      <a>Escorts</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact-us">
                      <a>Contact</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-2 col-md-6 col-sm-6">
              <div className="single-footer-widget pl-2">
                <h3>Resources</h3>

                <ul className="footer-links-list">
                  <li>
                    <Link href="/contact-us">
                      <a>Contact</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/escort-jobs">
                      <a>Employment</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/faq">
                      <a>FAQ</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/ettiquette">
                      <a>Ettiquette</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/abbreviations">
                      <a>Abbreviations</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <h3>Address</h3>

                <ul className="footer-contact-info">
                  <li>
                    <i className="bx bx-map"></i>
                    {nl2br(Config.address)}
                  </li>
                  <li>
                    <i className="bx bx-phone-call"></i>
                    <a href={`tel:${phoneUrl}`}>{Config.phone}</a>
                  </li>
                  <li>
                    <i className="bx bx-envelope"></i>
                    <a href={`mailto:${Config.email}`}>{Config.email}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="footer-bottom-area">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6">
                <p>
                  <i className="bx bx-copyright"></i>
                  {currentYear} created by{" "}
                  <a target="_blank" href="https://chicit.com.au/">
                    Chic IT
                  </a>
                </p>
              </div>

              <div className="col-lg-6 col-md-6">
                {/* <ul>
                                <li>
                                    <Link href="/privacy-policy">
                                        <a>Privacy Policy</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/terms-of-service">
                                        <a>Terms & Conditions</a>
                                    </Link>
                                </li>
                            </ul> */}
              </div>
            </div>
          </div>
        </div>

        <div className="shape16">
          <img src="/images/shape/shape16.png" alt="image" />
        </div>
      </footer>
      <div id="call-us" className="btn-box">
        <div className="align-items-center">
          <Link href={`tel:${phoneUrl}`}>
            <a className="default-btn">Call Now</a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
