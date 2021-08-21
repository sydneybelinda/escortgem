import React, { Component } from "react";
import Link from "../../utils/ActiveLink";
import { signIn, signout, signOut, useSession } from "next-auth/client";
import accountLinks from "./SidebarLinks";

const SideBar = (props) => {
  const [session, loading] = useSession();
  const user = props.user;

  return (
    <div className="col-lg-3">
      <div className="ps-section__left">
        <aside className="ps-widget--account-dashboard">
          <div className="ps-widget__header">
            {/* <img src="/static/img/users/3.jpg" /> */}
            {session && (
              <figure>
                <figcaption>{session.user.name}</figcaption>
                <p>{session.user.email}</p>
              </figure>
            )}
          </div>
          <div className="ps-widget__content">
            <ul className="ps-list--user-links sidebar">
              <li>
                <Link href="/dashboard" activeClassName="active">
                  <a>Dashboard</a>
                </Link>
              </li>
              {user.type == "independent" && (
                <>
                  <li>
                    <Link href="/dashboard/editescort" activeClassName="active">
                      <a>Edit Escort Profile</a>
                    </Link>
                  </li>
                </>
              )}


              {user.type == "agency" && (
                <>
                  <li>
                    <Link href="/dashboard/newprofile" activeClassName="active">
                      <a>New Escort Profile</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/dashboard/agency" activeClassName="active">
                      <a>Agency Details</a>
                    </Link>
                  </li>
                </>
              )}

              <li>
                <Link href="/dashboard">
                  <a onClick={(e) => {
                  e.preventDefault()
                  signOut()
                }}>
                    <i className="icon-power-switch"></i>
                    Logout
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default SideBar;
