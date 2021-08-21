import Link from "next/link";
import Escort from "./Escort";

const Portfolio = (props) => {
  const escorts = props.escorts.rows;

  return (
    <>
      <div className="portfolio-area  mt-10">
        <div className="container-fluid">
          <div className="row">
            { escorts ? escorts.map((escort) => (
              <Escort e={escort} key={escort.id} />
            )) : ''}
          </div>
          </div>
          </div>
    </>
  );
};

export default Portfolio;
