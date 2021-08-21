import React from 'react';

import Footer from '../components/_App/Footer';
import EmploymentForm from '../components/Employment/EmploymentForm';
import TopHeader from "../components/_App/TopHeader";
import Navbar from "../components/_App/Navbar";
import Head from "../components/_App/Head";
import Config from "../config";
import {getAllServices, getLocals} from "../utils/Queries"; 
// import ImageUploader from "../components/ImageUploader";

const  phoneUrl = `+61${Config.phone.replace(/\s/g,"").substring(1)}`;

const Meta = {
    title: "Escort Jobs in Sydney | Adult Work | Late Night Babes Sydney",
    description:
      "Looking for escort jobs in Sydney?  Work with LNB Sydney Escorts.  Enjoy low agency fees in a fun, friendly environment",
    page: "/escort-jobs",
  };
  


const EscortJobs = (props) => {
    return (
        <React.Fragment>
  <Head Meta={Meta} />
            <TopHeader/>
            <Navbar/>
            <div className="title-section ptb-100 bg-black text-center">
          <h1>
            <span className="fun">Late Night Babes Sydney</span>Employment
          </h1>
          <div className="shape16">
            <img src="/images/shape/shape16.png" alt="image" />
          </div>
        </div>

            <EmploymentForm />


		  
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

// EscortJobs.getInitialProps = async (ctx) => {

//   const services = await getAllServices();
//   const locs = await getLocals();

//     return {services: services, locs:locs };
//   };

export default EscortJobs;