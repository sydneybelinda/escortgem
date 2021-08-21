import React from "react";

import Pricing from "./Pricing";

const PortfolioSidebar = (props) => {
  const e = props.e;





  return (
    <div className="portfolio-sidebar-sticky">
      <Pricing e={e} />
      <div className="portfolio-details-info">
        <ul>
          <li>
            <span className="stat">Age:</span>
            <span className="value">{e.age}</span>
          </li>
          <li>
            <span className="stat">Hair:</span>
            <span className="value">{e.hair}</span>
          </li>
          <li>
            <span className="stat">Eyes:</span>
            <span className="value">{e.eyes}</span>
          </li>
          <li>
            <span className="stat">Height:</span>
            <span className="value">{e.height}</span>
          </li>
          <li>
            <span className="stat">Gender:</span>
            <span className="value">{e.gender}</span>
          </li>
          <li>
            <span className="stat">Dress Size:</span>
            <span className="value">{e.dressSize}</span>
          </li>
          <li>
            <span className="stat">Stats:</span>
            <span className="value">{`${e.chest}${e.cup}-${e.waist}-${e.hips}`}</span>
          </li>
          <li>
            <span className="stat">Orientation:</span>
            <span className="value">{e.sexualOrientation}</span>
          </li>
          <li>
            <span className="stat">Nationality:</span>
            <span className="value">{e.nationality}</span>
          </li>
          <li>
            <span className="stat">Languages:</span>
            <ul className="value langlist">
              <li>{e.language1} - {e.level1}</li>
              {e.language2 && <li>{e.language2} - {e.level2}</li>}
              {e.language3 && <li>{e.language3} - {e.level3}</li>}
              </ul>
          </li>

          <li>
            <span className="stat">Location:</span>
            <span className="value">{e.city} {e.state}, {e.country}</span>
          </li>
        </ul>
      </div>
      <div className="portfolio-details-info avail">
        <div className="pricing-header">
          <h3>Escort Availabiliy</h3>
        </div>
        <ul>
          {e.monday ? (
            <li>
              <span className="stat">Monday:</span>
              <span className="value">{e.monday}</span>
            </li>
          ) : (
            ""
          )}
          {e.tuesday ? (
            <li>
              <span className="stat">Tuesday:</span>
              <span className="value">{e.tuesday}</span>
            </li>
          ) : (
            ""
          )}
                    {e.wednesday ? (
            <li>
              <span className="stat">Wednesday:</span>
              <span className="value">{e.wednesday}</span>
            </li>
          ) : (
            ""
          )}
                    {e.thursday ? (
            <li>
              <span className="stat">Thursday:</span>
              <span className="value">{e.thursday}</span>
            </li>
          ) : (
            ""
          )}
                    {e.friday ? (
            <li>
              <span className="stat">Fridat:</span>
              <span className="value">{e.friday}</span>
            </li>
          ) : (
            ""
          )}
                    {e.saturday ? (
            <li>
              <span className="stat">Saturday:</span>
              <span className="value">{e.saturday}</span>
            </li>
          ) : (
            ""
          )}
                    {e.tuesday ? (
            <li>
              <span className="stat">Sunday:</span>
              <span className="value">{e.sunday}</span>
            </li>
          ) : (
            ""
          )}

        </ul>
      </div>
    </div>
  );
};

export default PortfolioSidebar;
