import React from 'react';
import ContactForm from '../components/Contact/ContactForm';
import Footer from '../components/_App/Footer';
import Head from "../components/_App/Head";
import Navbar from "../components/_App/Navbar";
import TopHeader from "../components/_App/TopHeader";
import Config from "../config";
import { getAllServices, getLocals } from "../utils/Queries";


const  phoneUrl = `+61${Config.phone.replace(/\s/g,"").substring(1)}`;

const Meta = {
    title: "Find our up to date contact details | Late Night Babes Sydney",
    description:
      "Contact details for LNB Sydney Escorts  Please call us on 0492 141 346 to make as Escort booking.  For non-urgent requests fill out our contact form",
    page: "/contact-us",
  };
  


const Contact = (props) => {
    return (
        <React.Fragment>
  <Head Meta={Meta} />
            <TopHeader/>
            <Navbar/>
            <div className="title-section ptb-100 bg-black text-center">
          <h1>
            <span className="fun">Late Night Babes Sydney</span>Contact Us
          </h1>
          <div className="shape16">
            <img src="/images/shape/shape16.png" alt="image" />
          </div>
        </div>
            <div className="contact-info-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="contact-info-box">
                                <div className="back-icon">
                                    <i className='bx bx-map'></i>
                                </div>
                                <div className="icon">
                                    <i className='bx bx-map'></i>
                                </div>
                                <h3>Our Address</h3>
                                <p>{Config.address}</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="contact-info-box">
                                <div className="back-icon">
                                    <i className='bx bx-phone-call'></i>
                                </div>
                                <div className="icon">
                                    <i className='bx bx-phone-call'></i>
                                </div>
                                <h3>Contact</h3>
                                <p>Mobile: <a href={phoneUrl}>{Config.phone}</a></p>
                                <p>E-mail: <a href={`mailto:${Config.email}`}>{Config.email}</a></p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                            <div className="contact-info-box">
                                <div className="back-icon">
                                    <i className='bx bx-time-five'></i>
                                </div>
                                <div className="icon">
                                    <i className='bx bx-time-five'></i>
                                </div>
                                <h3>Hours of Operation</h3>
                                <p>Till Late</p>
                                {/* <p>Sunday & Saturday: 10:30 - 22:00</p> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ContactForm />


		  
			<Footer {...props} />
		</React.Fragment>
    )
}

export async function getStaticProps(ctx) {
    const services = await getAllServices();
    const locs = await getLocals();
  
    // if (!data) {
    //   return {
    //     notFound: true,
    //   }
    // }
  
    return {
      props: { 
          services,
          locs
      }, 
    }
  }

// Contact.getInitialProps = async (ctx) => {

//     const services = await getAllServices();
//     const locs = await getLocals();

//       return {services: services, locs:locs };
//     };

export default Contact;