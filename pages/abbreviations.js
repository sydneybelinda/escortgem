import React from "react";
import Footer from "../components/_App/Footer";
import Head from "../components/_App/Head";
import Navbar from "../components/_App/Navbar";
import TopHeader from "../components/_App/TopHeader";
import { getAllServices, getLocals } from "../utils/Queries";

const Meta = {
  title: "Escort Abbreviations | Late Night Babes Sydney",
  description:
    "Explanation and definitions of frequently used escort abbreviations that you will find on LNB Escorts and many other escort sites in Sydney",
  page: "/abbreviations",
};

const Abbreviations = (props) => {
  return (
    <React.Fragment>
      <Head Meta={Meta} />
      <div className="content">
        <TopHeader />
        <Navbar />

        <div className="title-section ptb-100 bg-black text-center">
          <h1>
            <span className="fun">Common escort terms and abbreviations</span>Escort Abbreviations
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
                    <h2>Abbreviations</h2>
                    <p>
    Escort sites and other adult sites often use abbreviations to specify services rather than listing the full name. Here is a list of common escort abbreviations that you will find on this site and other escorting sites:</p>
     <br/>
               <p> CBJ: Covered Blow Job<br/>
                DFK: Deep French Kissing<br/>
                PSE: Porn Star Experience<br/>
                GFE: Girl Friend Experience<br/>
                DATY: Dining At The Y<br/>
                OWO: Oral WithOut a condom<br/>
                COF: Cum On Face<br/>
                COB: Cum On Body<br/>
                BBBJ: Bare Back Blow Job<br/>
                CIM: Cum in Mouth<br/>
                GREEK/A-LEVELS: Anal Sex<br/>
                   ATM:  Ass To Mouth<br/>
                   BJ: Blow Job<br/>
                   BBBJTC: Bare Back Blow Job To Completion<br/>
                   BBW: Big Beautiful Woman.<br/>
                   BLS: Balls Licking and Sucking<br/>
                   B & D: Bondage & Discipline<br/>
                   BDSM: Bondage Domination Sadomasochism<br/>
                   Bondage: Sexual act that involves restraining your partner<br/>
                   BS: Body Slide<br/>
                   CBT: Cock and Ball Torture<br/>
                   CD: Cross Dressing<br/>
                   CIMWS: Cum In Mouth With Swallow<br/>
                   DP: Double Penetration<br/>
                   DDP: Double Digit Penetration<br/>
                   DT: Deep Throat<br/>
                   Facial: Ejaculating on a woman’s face<br/>
                   FE: Female Ejaculation<br/>
                   FK: French kissing<br/>
                   French: Oral Sex<br/>
                   FS: Full Service<br/>
                   GS: Golden Shower<br/>
                   HJ: Hand Job<br/>
                   LK: Light Kissing<br/>
                   MFF: Male Female Female<br/>
                   MMF: Male Male Female<br/>
                   MSOG: Multiple Shots On Goal<br/>
                   TTM: Testicular Tongue Massage<br/>
                   WL: Working Lady<br/>

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

export default Abbreviations;
