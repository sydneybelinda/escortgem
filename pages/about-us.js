import React from "react";
import Footer from "../components/_App/Footer";
import Head from "../components/_App/Head";
import Navbar from "../components/_App/Navbar";
import TopHeader from "../components/_App/TopHeader";
import { getAllServices, getLocals } from "../utils/Queries";

const Meta = {
  title: "Escort Availability - Escort Roster | Late Night Babes Sydney",
  description:
    "Make an advance escort booking - Find the Availablility of your favourite LNB Sydney Escort.  This is our weekly escort roster and availability",
  page: "/about-us",
};

const About = (props) => {
  return (
    <React.Fragment>
      <Head Meta={Meta} />
      <div className="content">
        <TopHeader />
        <Navbar />

        <div className="title-section ptb-100 bg-black text-center">
          <h1>
            <span className="fun">Late Night Babes Sydney</span>About Us
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
                    <h2>Late Night Babes Sydney</h2>
                  <h3 className="pb-30">Sydney's most trusted and respected adult services provider. Guarenteed real photos or your booking is free</h3>
                  <p>if you are looking for <b>Sydney escorts</b>, Late Night Babes Sydney is a well respected and well reviewed late night, high class <b>Sydney Escort Agency</b>. We are well known for our honesty and our integrity. Current clients of the agency already know that not only are our <b>escorts in Sydney</b> some of the finest escorts in the industry, they are also amongst the hottest women on the planet, very friendly and down to earth.</p>
                <p>If you are high-end client and are under the impression that you have to pay $650+ per hour, I challenge you to make a booking to see any of the ladies we represent. Our prices are lower than any other service provider offering a similar quality of service. We have some smart people working with us so most of the work we do is done in house which keeps our costs very low and allows us to pass those discounts on to you the client. We genuinely believe you will have an awesome time with any of the ladies we represnt. Call us during our operating hours for honest, reliable and discreet service.</p>

                <h3>Who are we?</h3>
                <p>if you are looking for Sydney escorts, Late Night Babes Sydney is a well respected and well reviewed late night, high class Sydney Escort Agency. We are well known for our honesty and our integrity. Current clients of the agency already know that not only are our escorts in Sydney some of the finest escorts in the industry, they are also amongst the hottest women on the planet, very friendly and down to earth.
<br/><br/>
                    If you are high-end client and are under the impression that you have to pay $650+ per hour, I challenge you to make a booking to see any of the ladies we represent. Our prices are lower than any other service provider offering a similar quality of service. We have some smart people working with us so most of the work we do is done in house which keeps our costs very low and allows us to pass those discounts on to you the client. We genuinely believe you will have an awesome time with any of the ladies we represnt. Call us during our operating hours for honest, reliable and discreet service.</p>

        <h3>Our Sydney Escorts</h3>

        <p>  We are well respected and one of Sydney's favourite escort agencies. We believe in forming relationships / friendships with both our clients and the amazing models that we represent. We do not believe in treating the girls like commodities or clients like chumps. We are proud of our business. We achieve nothing by ripping off clients. If we haven't got available the lady you are looking for, or a suitable replacement we will simply say "Sorry we can't help you".
<br/><br/>
                    This industry is so small. We will never be like other agencies who have damaged their brand so much by treating clients like chumps that they have now had to resort to listing their "escorts" (for lack of a better term) as fake privates. That being said we truly believe you could book any of our escorts in Sydney and you would not be disappointed.</p>

<h3>Our Photographs</h3>
<p>I know this can be a sore topic for most clients. For a long time, escort agencies used fake photos of Sth American / non-English speaking models and promoted those photos as the actual escort. As clients got wise to that - they started (the now current trend) using actual photographs of the girl that were taken by a professional photographer but overly editing / photoshopping them to make them look amazing. At what point does a real photograph turn into a fake photo? Sure I could take a photo of Rosanne Barr and make her look like a babe in photoshop if I really wanted to. I'm not sure what your thought is on this practise? Personally I think its pretty much just as bad as using a fake. If you are paying $500 for an hour for a high class Sydney escort then you rightly deserve to see an image that accurately depicts the lady that you have chosen. Here at LNB - we guarantee that every image on our website that is used to advertise one of our sexy models is not only a real and recent image of the actual escort being advertised - it, and more importantly - is an ACCURATE representation of the girl we are promoting to the best of our abilities.
<br/><br/>
                    We are sick of trying to work with arrogant overpriced photographers who will give you the finished final images "when they are ready" only having to get them to redo them because they have heavily edited/airbrushed them. So most of the photos on this site are taken by me (Hannah). I am not by ANY means a photographer. I do not even rate myself as a photographer. So any Sydney escort that you book through us will yes look like the photograph but 99% of the time they are sooo much hotter in real life than in the photographs. Make no mistake the ladies we work with are all stunning and are not only some of the most beautiful escorts in the industry - but most beautiful women on the planet and have plenty of escort experience and actually enjoy being an escort.</p>

                    <h3>Our Sydney Escorts</h3>
                    <p>
                    We are well respected and one of Sydney's favourite escort agencies. We believe in forming relationships / friendships with both our clients and the amazing models that we represent. We do not believe in treating the girls like commodities or clients like chumps. We are proud of our business. We achieve nothing by ripping off clients. If we haven't got available the lady you are looking for, or a suitable replacement we will simply say "Sorry we can't help you".
                    <br/><br/>
                    This industry is so small. We will never be like other agencies who have damaged their brand so much by treating clients like chumps that they have now had to resort to listing their "escorts" (for lack of a better term) as fake privates. That being said we truly believe you could book any of our escorts in Sydney and you would not be disappointed.</p>
<h3>Client feedback</h3>
<p>

LNB Sydney escorts, and many of the sexy escorts that we represent have genuine client reviews on most Australian Escort Forum / Review sites. We aren't going to fill this site with pointless fake reviews like many others do - instead why not read our escort agency reviews for yourself? Most of our escort reviews can be found on PunterPlanet. As we are not a paid advertiser on there our agency reviews are not "public", however it is very easy to create a free account and if you navigate to the reviews section - NSW Reviews - NSW Escort Agencies you will find 70 or so reviews for the agency and many of the Sydney Escorts we work with.
<br/><br/>
Even if you can't find a review for one of the escorts on our site - Don't let that stop you from booking. I would be very surprised if you had a bad time with ANY of the girls that we work with. We specifically only work with girls who are good at their job and actually enjoy being an escort.
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

// About.getInitialProps = async (ctx) => {

//   const services = await getAllServices();
//   const locs = await getLocals();


//     return {services: services, locs:locs };
//   };

export default About;
