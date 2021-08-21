import React from "react";
import TopHeader from "../components/_App/TopHeader";
import Navbar from "../components/_App/Navbar";
import { getAllServices, getLocals } from "../utils/Queries";
import Footer from "../components/_App/Footer";
import Head from "../components/_App/Head";

const Meta = {
  title: "Frequently Asked Questions - FAQ | Late Night Babes Sydney",
  description:
    "Check out answers to The most frequently requested questions by clients booking Sydney Escorts.  Chances your answer is already here in our tailored FAQ section",
  page: "/faq",
};

const Faq = (props) => {
  return (
    <React.Fragment>
      <Head Meta={Meta} />
      <div className="content">
        <TopHeader />
        <Navbar />

        <div className="title-section ptb-100 bg-black text-center">
          <h1>
            <span className="fun">Late Night Babes Sydney</span>Frequently Asked
            Questions
          </h1>
          <div className="shape16">
            <img src="/images/shape/shape16.png" alt="image" />
          </div>
        </div>
        <div className="faq-area ptb-100">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div className="faq-item">
                  <h3>Q: What are the prices ?</h3>
                  <p>
                    <strong>A:</strong> The prices for each escort are written
                    clearly on each individual profile. Please do not ask for a
                    discount - would you like it if you boss asked you if you
                    could work for $50 less an hour?
                  </p>
                </div>
              </div>

              <div className="col-lg-6 col-md-6">
                <div className="faq-item">
                  <h3>Q: How do I make a booking ?</h3>
                  <p>
                    <strong>A:</strong> Bookings are to be made over the phone.
                    Please call us to make a booking after 5pm (During agency
                    operating hours).
                  </p>
                </div>
              </div>

              <div className="col-lg-6 col-md-6">
                <div className="faq-item">
                  <h3>Q: What services do you offer ?</h3>
                  <p>
                    <strong>A:</strong> The girls all offer different services.
                    Please refer to their individual profiles for service
                    information. If the particular service is not listed then
                    the lady does NOT offer that service.
                  </p>
                </div>
              </div>

              <div className="col-lg-6 col-md-6">
                <div className="faq-item">
                  <h3>Q: What services are included in price ?</h3>
                  <p>
                    <strong>A:</strong> We are an all inclusive agency. They are
                    genuinely all included in the price unless specified on
                    their profile.
                  </p>
                </div>
              </div>

              <div className="col-lg-6 col-md-6">
                <div className="faq-item">
                  <h3>
                    Q: Can I get the escorts phone number and call them directly
                    ?
                  </h3>
                  <p>
                    <strong>A:</strong> No. Please do not ask the girl for her
                    phone number. EVER. Girls do not want clients having their
                    phone number and feel embarrassed telling you NO when you
                    ask for it. If a girl wanted to work privately she would
                    just be a private escort. DO NOT EVER ASK THEM FOR IT.
                    Asking them for their phone number is an instant ban.
                  </p>
                </div>
              </div>

              <div className="col-lg-6 col-md-6">
                <div className="faq-item">
                  <h3>Q: Do any of the girls do natural sex ?</h3>
                  <p>
                    <strong>A:</strong> NO. Please do not ask. Ever. Just asking
                    for natural sex is an immediate ban. Asking a girl to do
                    natural sex is an immediate ban. Once again. NO.
                  </p>
                </div>
              </div>

              <div className="col-lg-6 col-md-6">
                <div className="faq-item">
                  <h3>Q: Do the girls do incalls and outcalls ?</h3>
                  <p>
                    <strong>A:</strong> Yes. They offer incalls from Hotels and
                    private apartments in and around the Sydney CBD area.
                  </p>
                </div>
              </div>

              <div className="col-lg-6 col-md-6">
                <div className="faq-item">
                  <h3>Q: What is the location?</h3>
                  <p>
                    <strong>A:</strong> That depends. What girl are you
                    enquiring about? All the girls work from different locations
                    in and around Sydney CBD. Please choose which girl you are
                    wanting to see and then give us a call to make a booking and
                    we will give you the location once a booking has been made.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer {...props} />
      </div>
    </React.Fragment>
  );
};

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

// Faq.getInitialProps = async (ctx) => {

//   const services = await getAllServices();

//   const locs = await getLocals();


//     return {services: services, locs: locs };
//   };

export default Faq
