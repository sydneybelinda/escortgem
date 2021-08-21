import React from "react";
import Link from "../../utils/ActiveLink";
import Config from "../../config";

const TopHeader = () => {
  const phoneUrl = `+61${Config.phone.replace(/\s/g, "").substring(1)}`;

  return (
    <header className="top-header-area" style={{ fontSize: 12 }}>
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-12 col-md-12">
            <ul className="top-header-contact-info  text-left">
              <li>
                {" "}
                <div className="browse-by">Browse by City:</div>
              </li>
              <li>
                {" "}
                <Link href="/escorts/au/nsw/sydney" activeClassName="active">
                  <a>Sydney</a>
                </Link>
              </li>
              <li>
                {" "}
                <Link href="/escorts/au/vic/melbourne" activeClassName="active">
                  <a>Melbourne</a>
                </Link>
              </li>
              <li>
                {" "}
                <Link href="/escorts/au/qld/brisbane" activeClassName="active">
                  <a>Brisbane</a>
                </Link>
              </li>
              <li>
                {" "}
                <Link href="/escorts/au/act/canberra" activeClassName="active">
                  <a>Canberra</a>
                </Link>
              </li>
              <li>
                {" "}
                <Link href="/escorts/au/wa/perth" activeClassName="active">
                  <a >Perth</a>
                </Link>
              </li>
              <li>
                {" "}
                <Link href="/escorts/au/sa/adelaide" activeClassName="active">
                  <a >Adelaide</a>
                </Link>
              </li>
              <li>
                {" "}
                <Link href="/escorts/au/nt/darwin" activeClassName="active">
                  <a >Darwin</a>
                </Link>
              </li>
              <li>
                {" "}
                <Link href="/escorts/au/tas/hobart" activeClassName="active">
                  <a >Hobart</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopHeader;
