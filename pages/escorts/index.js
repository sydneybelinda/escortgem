import React from 'react';
import TopHeader from '../../components/_App/TopHeader';
import Navbar from '../../components/_App/Navbar';
import Portfolio from "../../components/Portfolio"
import {getAllEscorts, getAllServices, getLocals} from "../../utils/Queries"; 
import Footer from '../../components/_App/Footer';
import Head from '../../components/_App/Head';


const Meta = {
    title: "Fun and friendly Australian Escorts - Late Night Babes Sydney",
    description: "Fun, friendly and well reviewed, private & high class escorts in Sydney, Australia. Prices fr. $450 - 5pm to late",
    page: "/escorts"
}


const Escorts = (props) => {



    return (
        <React.Fragment>
            <Head Meta={Meta}/>
            <div className="content">
            <TopHeader />
            <Navbar  />

            <div className="title-section ptb-100 bg-black text-center">
            <h1>Australian escorts</h1>
            <div className="shape16">
                <img src="/images/shape/shape16.png" alt="image" />
            </div>
            </div>
            <Portfolio escorts={props.escorts} />
            <div className="desc pt-50 pb-50">
                <div className="container-fluid">
                <h2 className="text-center pb-30">Escorts in Australia</h2>
                <p>
                LNB Sydney Escrts is an Australian based, high class Sydney escort agency. If you are looking for escorts in Australia you will find on this page our complete selection of high class Australian Escorts for your perusal.
                </p>
                </div>
            </div>
            <Footer {...props} />
            </div>
        </React.Fragment>
    )
}



  export async function getServerSideProps(context) {
  

    const escorts = await getAllEscorts();

  
  
    return {
      props: { 
          escorts,
      }, 
    }
  }




export default Escorts;

