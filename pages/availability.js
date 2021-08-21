import React from 'react';
import AvailPortfolio from "../components/AvailPortfolio";
import Footer from '../components/_App/Footer';
import Head from '../components/_App/Head';
import Navbar from '../components/_App/Navbar';
import TopHeader from '../components/_App/TopHeader';
import { getAllEscorts, getAllServices, getDay, getToday, getLocals } from "../utils/Queries";


const Meta = {
    title: "Escort Availability - Escort Roster | Late Night Babes Sydney",
    description: "ake an advance escort booking - Find the Availablility of your favourite LNB Sydney Escort.  This is our weekly escort roster and availability",
    page: "/availability"
}


function getAvail(d,escorts) {
    const today = getToday()
    const day = getDay(d)
if (day >= today.number){
    return(            
    <div className="avail-section">
        <div className="container-fluid">
    <div className="title-section ptb-100">
    <div className="container-fluid"></div>
    
    <h2><span className="fun">Availability</span> Available {d}</h2>
    </div>
    </div>
    <AvailPortfolio escorts={escorts} day={d} />
    
    </div> )
    } else {
        return('')
    }

}


const Availability = (props) => {

const num = getToday().number

    return (
        <React.Fragment>
            <Head Meta={Meta}/>
            <div className="content">
            <TopHeader />
            <Navbar  />

            <div className="title-section ptb-100 bg-black text-center">
            <h1><span className="fun">Our Roster</span> Escort Availability</h1>
            <div className="shape16">
                <img src="/images/shape/shape16.png" alt="image" />
            </div>
            </div>

            {getAvail('Sunday', props.escorts)}
            {getAvail('Monday', props.escorts)}
            {getAvail('Tuesday', props.escorts)}
            {getAvail('Wednesday', props.escorts)}
            {getAvail('Thursday', props.escorts)}
            {getAvail('Friday', props.escorts)}
            {getAvail('Saturday', props.escorts)}




            <Footer {...props} />
            </div>
        </React.Fragment>
    )
}

export async function getStaticProps(ctx) {
    const escorts = await getAllEscorts();
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
          locs,
          escorts
      }, 
    }
  }


// Availability.getInitialProps = async (ctx) => {

  
//     const escorts = await getAllEscorts();
//     const services = await getAllServices();
//     const locs = await getLocals();

//     return { escorts: escorts, services: services, locs:locs };
//   };

export default Availability;

