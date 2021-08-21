import React from "react";
import TopHeader from "../components/_App/TopHeader";
import Navbar from "../components/_App/Navbar";
import MainBanner from "../components/MainBanner";
import Who from "../components/Who";
import LatestEscorts from "../components/LatestEscorts";
import {
  getAllEscorts,
  getAllServices,
  getToday,
  getData,
} from "../utils/Queries";
import Footer from "../components/_App/Footer";
import Head from "../components/_App/Head";
import AboutSection from "../components/Home/AboutUs";
import Work from "../components/Work";
import WhatWeDo from "../components/Common/WhatWeDo";

const Meta = {
  title: "EscortGem - High Class Escorts",
  description:
    "EscortGem- Late Night Babes Sydney. Fun, friendly and well reviewed, private & high class escorts in Sydney, Australia. Prices fr. $450 - 5pm to late",
  page: "/",
};

const Index = (props) => {
  return (
    <React.Fragment>
      <Head Meta={Meta} />
      <div className="content">
        <TopHeader />
        <Navbar />
        {/* <MainBanner /> */}
        <Who />
        {/* <div className="avail-section">
          <div className="container-fluid">
            <div className="title-section ptb-100">
              <h2>
                <span className="fun">Availability</span> Sydney escorts
                available today
              </h2>
            </div>
          </div>
          <AvailPortfolio escorts={props.escorts} day={getToday().day} />
        </div> */}
        <div className="container-fluid">
          <div className="title-section pt-50">
            <h2>
              {/* <span className="fun">Latest</span>  */}
              Latest Escorts
            </h2>
          </div>
          <hr/>
        </div>
        
        <LatestEscorts escorts={props.escorts} />
        {/* <AboutSection />
        <Work /> */}
        <WhatWeDo />
        <Footer {...props} />
        <div className="main-links">
            <div className="container-fluid">
        <a href="https://www.eurogirlsescort.com" target="_blank" title="EuroGirlsEscort.com"><img src="https://www.eurogirlsescort.com/dist/images/banners/468X60.jpg" alt="EuroGirlsEscort.com" title="EuroGirlsEscort.com" /></a>
        </div>
        </div>
      </div>
    </React.Fragment>
  );
};


  export async function getServerSideProps(context) {
  
    const escorts = await getData('/escorts/latest');
     
    return {
      props: { 

          escorts,
   
      }, 
    }
  }
export default Index;
