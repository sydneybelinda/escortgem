import React from "react";
import Footer from "../components/_App/Footer";
import Head from "../components/_App/Head";
import Navbar from "../components/_App/Navbar";
import TopHeader from "../components/_App/TopHeader";
import { getAllServices, getLocals } from "../utils/Queries";

const Meta = {
  title: "Escort Ettiquette | Late Night Babes Sydney",
  description:
    "Infomation detailing the behavour and ettiquette expected of clients when booking or meeting an LNB Sydney Escort",
  page: "/ettiquette",
};

const Ettiquette = (props) => {
  return (
    <React.Fragment>
      <Head Meta={Meta} />
      <div className="content">
        <TopHeader />
        <Navbar />

        <div className="title-section ptb-100 bg-black text-center">
          <h1>
            <span className="fun">Escort meeting rules and guidelines</span>Escort Ettiquette
          </h1>
          <div className="shape16">
            <img src="/images/shape/shape16.png" alt="image" />
          </div>
        </div>
        <div className="faq-area ptb-100">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12 col-md-12">
                <div className="faq-item">
                    <h2>Ettiquette</h2>
                    <p>
    You might be asking yourself - What sort of ettiquette is there when I book a Sydney Escort?
<br/><br/>
    If you are a new client of the agency, you must first give me a call and talk to me on the phone. I will only accept bookings from new clients over the phone. I actually care aboout the girls that i work with and I don't want to be sending her to someone that is going to treat her badly. It is expected that you are a decent human being and that you have been taught manners. Any person who talks about the girls with any sort of disrespect or even talks to me funny on the phone will not be given a booking and will be instantly banned from the agency and all the agency girls. Please do not ask for a discount - for the quality of ladies that we represent - our rates are already the cheapest than any of our competitors. Asking for a discount is offensive - how would you like it if your boss said to you "Sorry Joe I feel like giving you $50 less today but thats alright hey" - What would you tell him? Probably go love yourself lol. Well that too as an instant ban.
    <br/><br/>

    Once you have successfully made a booking - on arrival the first thing you must do is make payment directly to the lady. Payment is cash only and must be made in advance. If you decide to extend, then you will need to make payment before the extension begins. Once again it is Cash Only which means no credit cards, no bank transfer.
    <br/><br/>

    it is expected that you treat the lady with the utmost respect. She is not just a hole for you to have your way with - she must be respected. Each lady offers different services - check each escort profile carefully to make sure the lady offers what you are looking for. Do not pressure ladies into doing services they are not comfortable with. If she is doesn't feel comfortable she will tell you. If you continue to push her after she has warned you - you run the risk of her getting up and just walking out. Remember the ladies are to be respected - and not used.
    <br/><br/>

    None of the ladies offer natural sex and it is not endorsed by us - do not try to push the girls into doing natural sex - or pull the condom off when she's not looking, or whatever. We are well aware of all the tricks that clients play. Why you would want to have unprotected sex with an escort is beyond me. Just asking the girl for natural sex is an Instant Ban
    <br/><br/>

    Do not try to pressure the girls into giving you their private phone numbers so that you can see them privately. If they wanted to be private escorts, they would just be private escorts. This is stealing from the agency - and not only is it an instant ban for you from the agency - but the agency will no longer work with the escort.
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

// Ettiquette.getInitialProps = async (ctx) => {

//   const services = await getAllServices();
//   const locs = await getLocals();

//     return {services: services, locs:locs };
//   };

export default Ettiquette;
