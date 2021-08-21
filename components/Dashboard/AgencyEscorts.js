import Link from "next/link";
import React, { useState } from "react";
import Img from "../Img"
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const Escort = (props) => {
  const e = props.e;

  console.log(props)

  var name = e.firstName;
  e.lastname ? (name += e.lastname) : "";

  return (
    <div className="col-sm-12" key={e.id}>
      <div className="agencyescort">
          <div className="image">
          <Img username={e.username} file={e.profpic} />

          </div>
          <div className="escortdetails">
         <span className="name"> {e.firstName} {e.lastName && e.lastName}</span>
          </div>
           
          <div className="escortviews p-15">
         <span className="views"> <FontAwesomeIcon icon={faEye} /> {e.views}</span>
          </div>

          <div className="actions">
            <Link href={`/dashboard/editescort/${e.username}`}>
            <Button className="edit">edit</Button>
            </Link>
        </div>
    
    </div>
    </div>
  );
};

export default Escort;
