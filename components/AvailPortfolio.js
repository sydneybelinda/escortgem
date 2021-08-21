import Link from "next/link";
import Escort from "./Escort";
import {getToday} from "../utils/Queries"; 

const AvailPortfolio = (props) => {


  let escorts = []
  const day = props.day.toLowerCase();


  const es = props.escorts.rows;

  if(es){
  es.map((e) => {
    if (e[day]){
        escorts.push(e);
    }

})
  }
  return (
    <>
      <div className="portfolio-area no-space">
       
          <div className="row">
            { escorts ? escorts.map((escort) => (
              <Escort e={escort} key={escort.id} />
            )) : ''}
          </div>
     
      </div>
    </>
  );
};

export default AvailPortfolio;
