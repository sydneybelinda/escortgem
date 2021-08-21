import React, { useState } from "react";
import { Form } from 'react-bootstrap';
import TopHeader from "../components/_App/TopHeader";
import Navbar from "../components/_App/Navbar";
import Footer from "../components/_App/Footer";
import { signIn, signOut, getSession } from "next-auth/client";
import LoginForm from "../components/Login/LoginForm"

const Login = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState("");
  const [err, setErr] = useState(false);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleTypeChange = (e) => {
    setType(e.target.value);
  };

  const submitPost = async (e) => {
    setErr("");
    // this.setState({loading: true})

    // var ncheck = await this.chkName();
    // var ucheck = await this.chkUsername();
    // var echeck = await this.chkEmail();
    // var pcheck = await this.chkPassword();

    // if(!this.state.usernameError && !this.state.emailError && !this.state.passwordError){

    const userData = {
      username: username,
      email: email,
      password: password,
      type: type,
    };

    const url = "/api/user/signup";

    try {
      const response = await fetch(url, {
        method: "POST",

        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userData }),
      });
      if (response.status === 200) {
        signIn("credentials", { username: username, password: password });
        
        //   const { token } = await response.json();
        //   await login({ token });
      } else {
        console.log("Login failed.");
        
        // https://github.com/developit/unfetch#caveats
        let error = new Error(response.statusText);
        error.response = response;
        setErr(error);
        throw error;
      }
    } catch (error) {
      console.error(
        "You have an error in your code or there are Network issues.",
        error
      );

      const { response } = error;
      setErr(response ? response.statusText : error.message);
    }
    // }
    //  this.setState({loading: false})
  };

  return (
    <React.Fragment>
      <div className="content">
        <TopHeader />
        <Navbar />

        <div className="profile-authentication-area ptb-100">
          <div className="container">
            <div className="row">
            <div className="col-lg-6 col-md-6 ml-auto mr-auto">
              < LoginForm />
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
