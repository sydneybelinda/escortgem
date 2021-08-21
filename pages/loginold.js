import React, { useState, useEffect } from "react";
import TopHeader from "../components/_App/TopHeader";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/_App/Footer";
import { useRouter } from "next/router";
import { signIn, signOut, getSession } from "next-auth/client";
import Link from "../utils/ActiveLink";

const Login = () => {
  const router = useRouter();
  console.log(router.query.error);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState(false);

  useEffect(() => {
    if (router.query.error) {
      setErr(router.query.error);
    }
  });
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const submitPost = async (e) => {
    setErr("");

    signIn("credentials", { username: username, password: password });

    // // this.setState({loading: true})

    // // var ncheck = await this.chkName();
    // // var ucheck = await this.chkUsername();
    // // var echeck = await this.chkEmail();
    // // var pcheck = await this.chkPassword();

    // // if(!this.state.usernameError && !this.state.emailError && !this.state.passwordError){

    //   const userData = {
    //     username: username,
    //     email: email,
    //     password: password
    //   }

    //   const url = "/api/user/signup";

    //   console.log(userData)

    //   try {
    //     const response = await fetch(url, {
    //       method: "POST",

    //       headers: { "Content-Type": "application/json" },
    //       body: JSON.stringify({ userData })
    //     });
    //     if (response.status === 200) {
    //         setErr("Done")
    //     //   const { token } = await response.json();
    //     //   await login({ token });
    //     } else {
    //       console.log("Login failed.");
    //       setErr("Failed")
    //       // https://github.com/developit/unfetch#caveats
    //       let error = new Error(response.statusText);
    //       error.response = response;
    //       throw error;
    //     }
    //   } catch (error) {
    //     console.error(
    //       "You have an error in your code or there are Network issues.",
    //       error
    //     );

    //     const { response } = error;
    //     setErr(response ? response.statusText : error.message)

    //   }
  };

  return (
    <React.Fragment>
      <div className="content">
        <TopHeader />
        <Navbar />

        <div className="profile-authentication-area ptb-100">
          <div className="container">
            <div className="row ex">
              <div className="col-lg-6 col-md-12 ml-auto mr-auto">
                <div className="login-form">
                  <h2>Login</h2>
                  {err ? (
                    <div className="error">
                      <p>
                        Sign in failed. Check the details you provided are
                        correct.
                      </p>
                    </div>
                  ) : (
                    ""
                  )}
                  <form>
                    <div className="form-group">
                      {/* <label>Username or email</label> */}
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Username or email"
                        name="username"
                        value={username}
                        onChange={handleUsernameChange}
                      />
                    </div>

                    <div className="form-group">
                      {/* <label>Password</label> */}
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        name="password"
                        value={password}
                        onChange={handlePasswordChange}
                      />
                    </div>

                    <div className="row align-items-center">
                      <div className="col-lg-6 col-md-6 col-sm-6 remember-me-wrap">
                        <p>
                          <input type="checkbox" id="test2" />
                          <label htmlFor="test2">Remember me</label>
                        </p>
                      </div>

                      <div className="col-lg-6 col-md-6 col-sm-6 lost-your-password-wrap">
                        <a href="#" className="lost-your-password">
                          Lost your password?
                        </a>
                        <Link href="/register"><a className="lost-your-password">
                          Sign up for a new account
                        </a></Link>
                      </div>
                    </div>
                  </form>
                  <button className="default-btn" onClick={submitPost}>
                    Log In
                  </button>
                </div>
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

  if (session) {
    return {
      redirect: {
        destination: "/dashboard", // some destination '/dashboard' Ex,
        permanent: false,
      },
    };
  } else {
    return {
      props: { session: null },
    };
  }
}

export default Login;
