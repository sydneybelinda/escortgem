import React from "react";
import Link from "next/link";
import nl2br from "react-nl2br";

const Pricing = (props) => {

  const e = props.e

  return (
    <React.Fragment>
      <div className="pricing-area bg-f9f9f9">
        <div className="container">
          <div className="row">


            <div className=" col-xs-6">
              <div className="single-pricing-box">
                <div className="pricing-header">
      
                  <h3>Incalls</h3>
                </div>

                <div className="pricing-features">
                  <ul>
                  <li>1 hour - {e.oneHourIn ? `$${e.oneHourIn}` : 'N/A'}</li>
                    <li>1.5 hour - {e.oneAndAHalfHourIn ? `$${e.oneAndAHalfHourIn}` : 'N/A' }</li>
                    <li>2 hours - {e.twoHourIn ? `$${e.twoHourIn}` : 'N/A'}</li>
                    <li>extra hour - {e.additionalHourIn ? `$${e.additionalHourIn}` : 'N/A'}</li>
                    <li>dinner - {e.dinnerIn ? `$${e.dinnerIn}` : 'N/A'}</li>
                    <li>overnight - {e.overnightIn ? `$${e.overnightIn}` : 'N/A'}</li>
                    {e.otherPricing && <li><hr/> {nl2br(e.otherPricing)}<hr/></li>}
                  </ul>
                </div>
                {e.advertisedPrice ? (
                <div className="price">
               ${e.advertisedPrice}
                  <span>Per Hour</span>
                </div>
                ) : ''
}

                <Link href="/#">
                  <a className="default-btn">Book Now</a>
                </Link>
              </div>
            </div>

            <div className=" col-xs-6 ">
              <div className="single-pricing-box">
                <div className="pricing-header">
     
                  <h3>Outcalls</h3>
                </div>

                <div className="pricing-features">
                <ul>
                  <li>1 hour - {e.oneHourOut ? `$${e.oneHourOut}` : 'N/A'}</li>
                    <li>1.5 hour - {e.oneAndAHalfHourOut ? `$${e.oneAndAHalfHourOut}` : 'N/A' }</li>
                    <li>2 hours - {e.twoHourOut ? `$${e.twoHourOut}` : 'N/A'}</li>
                    <li>extra hour - {e.additionalHourOut ? `$${e.additionalHourOut}` : 'N/A'}</li>
                    <li>dinner - {e.dinnerOut ? `$${e.dinnerOut}` : 'N/A'}</li>
                    <li>overnight - {e.overnightOut ? `${e.overnightOut}` : 'N/A'}</li>
                    {e.otherPricing && <li><hr/> {nl2br(e.otherPricing)}<hr/></li>}
                  </ul>
                </div>
                {e.advertisedPrice ? (
                <div className="price">
               ${e.advertisedPrice}
                  <span>Per Hour</span>
                </div>
                ) : ''
}

                <Link href="/#">
                  <a className="default-btn">Book Now</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Pricing;
