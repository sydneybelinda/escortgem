import Escort from "./Escort";

const ServicesPortfolio = (props) => {

  let escorts = []
  const seo = props.seo;
  const es = props.escorts.rows;

  es.map((e) => {
    if (e[seo.name]){
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

export default ServicesPortfolio;
