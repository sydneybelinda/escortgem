import React from "react";
import TopHeader from "../../components/_App/TopHeader";
import Navbar from "../../components/_App/Navbar";
import AgencyInfoForm from "../../components/Dashboard/Agency/AgencyInfoForm";
import Sidebar from "../../components/Dashboard/Sidebar";
import { signIn, signOut, getSession } from "next-auth/client";
import { getUser, getAgency } from "../../utils/Queries";

import Footer from "../../components/_App/Footer";

const DashboardAgency = (props) => {
  const agency = props.agency;
  const user = props.user[0];


  return (
    <React.Fragment>
      <div className="content">
        <TopHeader />
        <Navbar />

        <div className="dashboard-area ptb-100">
          <div className="container-fluid">
            <div className="row ex">
              <div className="col-md-12">
                <section className="ps-my-account ps-page--account">
                  <div className="row">
                    <Sidebar user={user} />
                    <div className="col-lg-9">
                      <div className="ps-page__content">
                      <h3>Agency Details</h3>
                          <hr />
                        <div className="ps-form__header">

                        </div>
                      {agency.agencyname ? '' : <div className="notices">
                          You must fill out the details of your agency before
                          adding any of your escorts.
                        </div> }
                        <AgencyInfoForm agency={agency} user={user} />
                      </div>
                    </div>
                  </div>
                </section>
                {/* <AgencyInfo /> */}
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </React.Fragment>
  );
};

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/login", // some destination '/dashboard' Ex,
        permanent: false,
      },
    };
  } else {
    const username = session.user.name;

    const user = await getUser(username);
    const agency = await getAgency(username);

    return {
      props: { session: session, user: user, agency: agency },
    };
  }
}

export default DashboardAgency;
