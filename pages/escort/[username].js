import React from "react";
import TopHeader from "../../components/_App/TopHeader";
import Navbar from "../../components/_App/Navbar";
import EscortDetails from "../../components//EsccortDetails";
import Footer from "../../components/_App/Footer";
import Head from "../../components/_App/Head";
import {getEscort, getServices, getAllServices, getLocals, getAllEscorts} from "../../utils/Queries";



const Escort = (props) => {
const e = props.escort.escort

  const Meta = {
    title: `${e.firstName} ${e.surname} - High Class Escort  | EscortGem`,
    description:`${e.location} escort - ${e.firstName} ${e.surname} | ${e.age} year old | ${e.hair} escort | ${e.eyes}-eyed escort | Size ${e.dressSize} | ${e.cup} Cup Breasts`,
    page: `/escort/${e.username}`,
  };
   
  return (
    <React.Fragment>
      <Head Meta={Meta} />
      <div className="content">
        <TopHeader />
        <Navbar />
        <EscortDetails escort={props.escort} services={props.services} />
        <Footer  />
      </div>
    </React.Fragment>
  );
};

export async function getServerSideProps(context) {
  
  const username = context.params.username;

const escort = await getEscort(username);
const services = await getServices();



  return {
    props: { 
        services,
        escort,
    }, 
  }
}


export default Escort;

