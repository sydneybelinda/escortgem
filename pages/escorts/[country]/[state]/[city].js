import React from 'react';
import { useRouter } from 'next/router'
import TopHeader from '../../../../components/_App/TopHeader';
import Navbar from '../../../../components/_App/Navbar';
import Portfolio from "../../../../components/Portfolio"
import {getAllEscorts, getAllServices, getLocals, getCity, getEscortsByCity} from "../../../../utils/Queries"; 
import Footer from '../../../../components/_App/Footer';
import Head from '../../../../components/_App/Head';




const Escorts = (props) => {


    const city = props.city[0].city


    console.log(props.escorts)
    

    const Meta = {
        title: `${city} Escorts - EscortGem`,
        description: `Fun, friendly and well reviewed, private & high class escorts in ${city}, Australia. Prices fr. $450 - 5pm to late`,
        page: "/escorts"
    }
    


    return (
        <React.Fragment>
            <Head Meta={Meta}/>
            <div className="content">
            <TopHeader />
            <Navbar  />

            <div className="title-section ptb-100 bg-black text-center">
            <h1>{city} escorts</h1>
            <div className="shape16">
                <img src="/images/shape/shape16.png" alt="image" />
            </div>
            </div>
            {props.escorts ? <Portfolio escorts={props.escorts} /> : '' }
            <div className="desc pt-50 pb-50">
                <div className="container-fluid">
                <h2 className="text-center pb-30">Escorts in {city}</h2>
                <p>
                SEO
                </p>
                </div>
            </div>
            <Footer {...props} />
            </div>
        </React.Fragment>
    )
}




Escorts.getInitialProps = async ({ query }) => {

    const cty = query.city;

  
   // const escorts = await getAllEscorts();
    const escorts = await getEscortsByCity(cty);
    // const services = await getAllServices();
    // const locs = await getLocals();
    const city = await getCity(cty);


 


    if (city.length == 0) {
        return {
          notFound: true,
        }

    }

    return { escorts: escorts, 
        // services: services, 
        // locs:locs, 
        city:city };

  };

export default Escorts;

