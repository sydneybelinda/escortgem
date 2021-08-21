import Link from "next/link";
import React, { useState } from "react";
import Img from "./Img"

const Escort = (props) => {
  const e = props.e;
  const imagePath = `/userdata/${e.username}/images/${e.profpic}`;
  const [src, setSrc] = useState(imagePath);

  const onErrorSrc = () => {
    setSrc = "/userdata/photo_coming_soon.jpg";
  };

  //   {process.env.PUBLIC_URL , `${item.imagepath}`}

  // const im = {`../public/userdata/${e.username}/images/${e.profpic}`}

  const back = {
    backgroundImage: `url(${src})`,
    backgroundPosition: "center top",
    backgroundSize: "cover",
  };

  var name = e.firstName;
  e.lastname ? (name += e.lastname) : "";

  return (
    <div className="col-lg-3 col-md-6 col-sm-6" key={e.id}>
      <div className="single-portfolio-box">
        <Link href={`/escort/${e.username}`}>
          <a className="image d-block">

            <Img username={e.username} file={e.profpic} />
          </a>
        </Link>
        <Link href={`/escort/${e.username}`}>
          <a>
            <div className="slider">
              <div className="s-stats">
                <div className="s-name">{name}</div>
                <div className="s-title">{e.shortDesc}</div>
                <div className="s-age">AGE: {e.age}</div>
                <div className="s-height">HEIGHT: {e.height}</div>
                <div className="s-bust">BUST: {e.cup}</div>
                <div className="s-size">SIZE: {e.dressSize}</div>
                <div className="s-price">PRICE: ${e.advertisedPrice}</div>
              </div>
            </div>
          </a>
        </Link>

        <div className="content">
          <h3>
            <Link href={`/escort/${e.username}`}>
              <a>{name}</a>
            </Link>
          </h3>
          <span>${e.advertisedPrice}</span>
        </div>
      </div>
    </div>
  );
};

export default Escort;
