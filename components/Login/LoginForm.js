import { Formik } from "formik";
import * as yup from "yup";
import React, { useState, useEffect } from "react";
import {  getUser,getEmail } from "../../utils/Queries";
import { signIn } from "next-auth/client";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "../../utils/ActiveLink";
import {
  faAt,
  faEye,
  faEyeSlash,
  faUser,
  faKey,
  faHandMiddleFinger,
} from "@fortawesome/free-solid-svg-icons";

import { faTwitter } from "@fortawesome/free-brands-svg-icons";

import { Form, Col, InputGroup, Button, Alert } from "react-bootstrap";

const schema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required(),
});

const LoginForm = (props) => {
    const router = useRouter();
  const [done, setDone] = useState(false);
  const [err, setErr] = useState(false);
  const [inputType, setInputType] = useState("password");
  const [remember, setRemember] = useState(true);

  const togglePassword = (e) => {
      if(inputType == "password") { setInputType("input")}
      if(inputType == "input") { setInputType("password")}
  }

  const handleRemember = (e) => {
      console.log(e.target)
  }

  const clearError = async (e) => {
    setErr("");

  }

  useEffect(() => {
    if (router.query.error) {
      setErr(router.query.error);
    }
  });



  return (
    <Formik
      validationSchema={schema}
      onSubmit={async (values) => {
        setErr("");

        console.log(values)

        signIn("credentials", { username: values.username, password: values.password });

      }}
      initialValues={{
        type: "",
        username: "",
        email: "",
        password: "",
      }}
      // onSubmit={console.log('values')}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        isValid,
        errors,
      }) => (
        <div className="accwrap">
          <Form noValidate onSubmit={handleSubmit} onClick={clearError}>
            <h1 className="accounthead">Login</h1>
            <p className="mb-20">
              Sign in to your EscortGem account
            </p>
            <hr />
            <Form.Row>

              <Form.Group as={Col} md="12" controlId="validationCustom02">
                <Form.Label>Username / Email</Form.Label>
                <InputGroup hasValidation>
                  <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroupPrepend">
                      <FontAwesomeIcon icon={faUser} />
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control
                    type="text"
                    placeholder="enter your username or email address"
                    name="username"
                    value={values.username}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={touched.username && errors.username}
                  />

                  <Form.Control.Feedback type="invalid">
                    {errors.username}
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>

              <Form.Group as={Col} md="12" controlId="validationCustom05">
                <Form.Label>Password</Form.Label>
                <InputGroup hasValidation>
                  <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroupWebsite">
                      <FontAwesomeIcon icon={faKey} />
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control
                    type={inputType}
                    placeholder="enter your password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={touched.password && errors.password}
                  />
                  <InputGroup.Append>
                  {inputType == "password" ?<Button variant="light" className="showbutton" onClick={togglePassword}><FontAwesomeIcon icon={faEye} /></Button> :
                  <Button variant="light" className="showbutton" onClick={togglePassword}><FontAwesomeIcon icon={faEyeSlash} /></Button> }
                    {/* <InputGroup.Text id="basic-addon2">e</InputGroup.Text> */}
                  </InputGroup.Append>
                  <Form.Control.Feedback type="invalid">
                    {errors.password}
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
              
            </Form.Row>
            
            <div className="row align-items-center">
                      <div className="col-lg-6 col-md-6 col-sm-6 remember-me-wrap">
                        <p>
                          <input type="checkbox"
                           id="remember"
                           name="remember"
                           onChange={handleRemember}
                           checked={remember}
                            />
                          <label htmlFor="test2">Remember me</label>
                        </p>
                      </div>

                      <div className="col-lg-6 col-md-6 col-sm-6 lost-your-password-wrap">
                        <a href="#" className="lost-your-password">
                          Lost your password?
                        </a><br/>
                        <Link href="/register"><a className="lost-your-password">
                          Sign up for a new account
                        </a></Link>
                      </div>
                    </div>

            {done && (
              <Alert variant="success" className="done">
                Done!
              </Alert>
            )}

            {err && (
              <Alert variant="danger" className="done">
                 Sign in failed. Check the details you provided are
                        correct.
              </Alert>
            )}

            <Button type="submit" className="default-btn">
              Sign In
            </Button>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default LoginForm;
