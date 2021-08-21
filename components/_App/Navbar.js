import React, { useState } from "react";
import { OffCanvas, OffCanvasBody, OffCanvasMenu } from "react-offcanvas";
import { signIn, signOut, useSession } from 'next-auth/client'
import Link from "../../utils/ActiveLink";
// import logoWhite from "./logo-white.png";
// import logo from "./logo.png";
import MenuItems from "./MenuItems";
// import Image from "next/image";

const NavbarStyleFive = () => {
  const [menu, setMenu] = React.useState(false);

  const [ session, loading ] = useSession()

  const toggleNavbar = () => {
    setMenu(!menu);
  };

  React.useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
   // window.scrollTo(0, 0);
  });


  // Search Modal
  const [isActiveSearchModal, setActiveSearchModal] = useState("false");
  const handleToggleSearchModal = () => {
    setActiveSearchModal(!isActiveSearchModal);
  };

  // Sidebar Modal
  const [isActiveSidebarModal, setActiveSidebarModal] = useState("false");
  const handleToggleSidebarModal = () => {
    setActiveSidebarModal(!isActiveSidebarModal);
  };

  const classOne = menu
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right"
    : "navbar-toggler navbar-toggler-right  collapsed";

  const handleSelect = (eventKey) => alert(`selected ${eventKey}`);

  return (
    <React.Fragment>
      <div id="navbar" className="navbar-area navbar-style-two">
        <div className="main-nav">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-lg navbar-light">
              <Link href="/">
                <a className="navbar-brand">
                  {/* <Image
                    className="about-img left-img"
                    src="/images/logo.png"
                    alt="High class Sydney escort agency"
                    width="133"
                    height="40"
                  /> */}
                   {/* <img src="/images/logo.png" alt="Late Night Babes - Sydney escorts" /> */}
                  <span className="brand"> EscortGem</span>
                </a>
              </Link>

              <button
                onClick={toggleNavbar}
                className={classTwo}
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar top-bar"></span>
                <span className="icon-bar middle-bar"></span>
                <span className="icon-bar bottom-bar"></span>
              </button>

              <div className={classOne} id="navbarSupportedContent">
                <MenuItems toggleNavbar={toggleNavbar} />
              </div>
              
                            <div className="others-option d-flex align-items-center">
                                <div className="option-item">
                                    <div className="search-box" onClick={handleToggleSearchModal}>
                                        <i className="flaticon-search"></i>
                                    </div>
                                </div>
                                {!session && <>
                                <div className="option-item">
                                <div
                    className="side-menu-btn"
                    // onClick={handleToggleSidebarModal}
                   
                  >
                <Link href={`/login`}><a
                // onClick={(e) => {
                //   e.preventDefault()
                //   signIn()
                // }}
                >Login </a></Link>
                  </div>


                </div>
                </> }



                            </div>
  
            </nav>
            <OffCanvas
              width={300}
              transitionDuration={300}
              effect={"parallax"}
              isMenuOpened={menu}
              position={"left"}
            >
              <OffCanvasBody></OffCanvasBody>
              <OffCanvasMenu className="mobile-menu">
                {/* <Image
                  className="about-img left-img"
                  src="/images/logo-white.png"
                  alt="High class Sydney escort agency"
                  height="40"
                  width="133"
                /> */}
                <img src="/images/logo-white.png" alt='Escorts in Sydney' style={{height:40}}/>
                <MenuItems />

                <div className="option-item">
                  <div className="side-menu-btn" onClick={toggleNavbar}>
                    <i className="flaticon-menu"></i>
                  </div>
                </div>
              </OffCanvasMenu>
            </OffCanvas>
          </div>
        </div>
      </div>

      {/* Search Form */}
      <div
        className={`search-overlay ${
          isActiveSearchModal ? "" : "search-overlay-active"
        }`}
      >
        <div className="d-table">
          <div className="d-table-cell">
            <div className="search-overlay-layer"></div>
            <div className="search-overlay-layer"></div>
            <div className="search-overlay-layer"></div>

            <div
              className="search-overlay-close"
              onClick={handleToggleSearchModal}
            >
              <span className="search-overlay-close-line"></span>
              <span className="search-overlay-close-line"></span>
            </div>

            <div className="search-overlay-form">
              <form>
                <input
                  type="text"
                  className="input-search"
                  placeholder="Search here..."
                />
                <button type="submit">
                  <i className="flaticon-search"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* End Search Form */}
    </React.Fragment>
  );
};

export default NavbarStyleFive;
