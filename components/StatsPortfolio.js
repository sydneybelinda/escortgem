import Escort from "./Escort";

const StatsPortfolio = (props) => {

  let escorts = []
  const seo = props.seo;
  const es = props.escorts.rows;


  es.map((e) => {
    if ((e[props.col]).toLowerCase() == seo.name.toLowerCase()){
        escorts.push(e);
    }

  })

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

export default StatsPortfolio;
