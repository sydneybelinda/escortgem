
import React, { useState } from "react";
import Link from '../../utils/ActiveLink';
import { signIn, signOut, useSession } from 'next-auth/client'


const MenuItems = (props) => {

    const toggleNavbar = props.t
    const [ session, loading ] = useSession()



return (

    <ul className="navbar-nav">

    <li className="nav-item">
            <Link href="/" activeClassName="active">
                <a onClick={toggleNavbar} className="nav-link">HOME</a>
            </Link>
        </li>
        {/* <li className="nav-item" style={{top: "-4px"}}>
            <Link href="/#">
                <a onClick={e => e.preventDefault()} className="nav-link">
                    MORE <i className='bx bx-chevron-down'></i>
                </a>
            </Link>

            <ul className="dropdown-menu">
                <li className="nav-item">
                    <Link href="/about-us" activeClassName="active">
                        <a onClick={toggleNavbar} className="nav-link">About</a>
                    </Link>
                </li> 
                <li className="nav-item">
                    <Link href="/ettiquette" activeClassName="active">
                        <a onClick={toggleNavbar} className="nav-link">Ettiquette</a>
                    </Link>
                </li> 
                <li className="nav-item">
                    <Link href="/abbreviations" activeClassName="active">
                        <a onClick={toggleNavbar} className="nav-link">Abbreviations</a>
                    </Link>
                </li> 


            </ul>
        </li>

        <li className="nav-item">
            <Link href="/availability" activeClassName="active">
                <a onClick={toggleNavbar} className="nav-link">AVAILABILITY</a>
            </Link>
        </li> */}
        
        <li className="nav-item">
            <Link href="/escorts" activeClassName="active">
                <a onClick={toggleNavbar} className="nav-link">ESCORTS</a>
            </Link>
        </li>
        
        {/* <li className="nav-item">
            <Link href="/faq" activeClassName="active">
                <a onClick={toggleNavbar} className="nav-link">FAQ</a>
            </Link>
        </li>
        
        <li className="nav-item">
            <Link href="/escort-jobs" activeClassName="active">
                <a onClick={toggleNavbar} className="nav-link">EMPLOYMENT</a>
            </Link>
        </li>

        
        <li className="nav-item">
            <Link href="/contact-us" activeClassName="active">
                <a onClick={toggleNavbar} className="nav-link">CONTACT</a>
            </Link>
        </li> */}

        {session && <>     <li className="nav-item ml-auto">
        <p className="spacer">-</p>
        </li>

      
                  <li className="nav-item" style={{top: "-4px"}}>
            <Link href="/#">
                <a onClick={e => e.preventDefault()} className="nav-link user-name">
                {session.user.name} <i className='bx bx-chevron-down'></i>
                </a>
            </Link>

            <ul className="dropdown-menu">
                <li className="nav-item">
                    <Link href="/dashboard" activeClassName="active">
                        <a onClick={toggleNavbar} className="nav-link">Dashboard</a>
                    </Link>
                </li> 
                {/* <li className="nav-item">
                    <Link href="/ettiquette" activeClassName="active">
                        <a onClick={toggleNavbar} className="nav-link">Ettiquette</a>
                    </Link>
                </li>  */}
                <hr />
                <li className="nav-item">
                    <Link href="/" activeClassName="active">
                        <a onClick={(e) => {
                  e.preventDefault()
                  signOut()
                }} className="nav-link">Logout</a>
                    </Link>
                </li> 


            </ul>
        </li>

        </> }


    </ul>
)

}

export default MenuItems;