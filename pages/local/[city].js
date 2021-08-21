import React from "react";
import Footer from "../../components/_App/Footer";
import Head from "../../components/_App/Head";
import Navbar from "../../components/_App/Navbar";
import TopHeader from "../../components/_App/TopHeader";
import { getAllServices, getLocals, getLocal } from "../../utils/Queries";
import nl2br from 'react-nl2br';


const Local = (props) => {

  const loc= props.loc[0]



  const Meta = {
    title: `${loc.key1} - ${loc.key2} | Late Night Babes Sydney`,
    description:
      "Make an advance escort booking - Find the Availablility of your favourite LNB Sydney Escort.  This is our weekly escort roster and availability",
    page: "/about-us",
  };
  

 

  return (
    <React.Fragment>
      <Head Meta={Meta} />
      <div className="content">
        <TopHeader />
        <Navbar />

        <div className="title-section ptb-100 bg-black text-center">
          <h1>
            <span className="fun">Late Night Babes Sydney</span>{loc.key1}
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
                    <h2>{loc.key1}</h2>
                    <br/>
                  <p>
                    {nl2br(loc.description)}
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

export async function getStaticProps({ params }) {
  
  const city = params.city;

  const services = await getAllServices();
  const locs = await getLocals();
  const loc = await getLocal(city);

  if (!loc) {
    return {
      notFound: true,
    }
  }

  return {
    props: { 
        services,
        locs,
        loc
    }, 
  }
}

export async function getStaticPaths() {
  const locs = await getLocals();

  const paths = locs.map((l) => ({
    params: { city: l.loc },
  }))

  return { paths, fallback: false }
}


export default Local;
