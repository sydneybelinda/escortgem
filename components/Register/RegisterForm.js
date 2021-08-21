import { Formik } from "formik";
import * as yup from "yup";
import React, { useState } from "react";
import {  getUser,getEmail } from "../../utils/Queries";
import { signIn } from "next-auth/client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAt,
  faEye,
  faEyeSlash,
  faUser,
  faKey,
} from "@fortawesome/free-solid-svg-icons";

import { faTwitter } from "@fortawesome/free-brands-svg-icons";

import { Form, Col, InputGroup, Button, Alert } from "react-bootstrap";

const schema = yup.object().shape({
  type: yup.string().required(),
  username: yup.string()
  .required()
  .test('checUserUnique', 'This username is already taken.', async value => {

        const u = await getUser(value)

        if(u.length > 0){
            return false
        } else  {
            return true
        }

  }
    ),
  email: yup.string()
    .email("Invalid email address")
    .required()
    .test('checkEmailUnique', 'This email is already registered.', async value => {

        const u = await getEmail(value)

        if(u.length > 0){
            return false
        } else  {
            return true
        }

  }
    )
    ,
  password: yup.string().required(),
});

const RegisterForm = (props) => {
  const [done, setDone] = useState(false);
  const [err, setErr] = useState(false);
  const [inputType, setInputType] = useState("password");

  const togglePassword = (e) => {
      if(inputType == "password") { setInputType("input")}
      if(inputType == "input") { setInputType("password")}
  }

  const clearError = async (e) => {
    setErr("");

  }

  const submitPost = async (values) => {
    setErr("");

    const userData = {
      username: values.username,
      email: values.email,
      password: values.password,
      type: values.type,
    };

    const url = "/api/user/signup";

    try {
      const response = await fetch(url, {
        method: "POST",

        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userData }),
      });
      if (response.status === 200) {
        signIn("credentials", { username: values.username, password: values.password });
        
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

  };

  return (
    <Formik
      validationSchema={schema}
      onSubmit={async (values) => {
submitPost(values)

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
            <h1 className="accounthead">Register</h1>
            <p className="mb-20">
              Sign up now instantly, and start creating your EscortGem profile
            </p>
            <hr />
            <Form.Row>
              <Form.Group as={Col} md="12" controlId="validationCustom01">
                <Form.Label>Account Type:</Form.Label>
                <Form.Control
                  as="select"
                  name="type"
                  placeholder="select account type"
                  value={values.type}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={touched.type && errors.type}
                >
                  <option>--- Select Type ---</option>
                  <option value="agency">Agency</option>
                  <option value="independent">Independent Escort</option>
                  <option value="client">Client</option>
                </Form.Control>
                <Form.Control.Feedback type="invalid">
                  You must select an account type.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="12" controlId="validationCustom02">
                <Form.Label>Username</Form.Label>
                <InputGroup hasValidation>
                  <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroupPrepend">
                      <FontAwesomeIcon icon={faUser} />
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control
                    type="text"
                    placeholder="enter a username"
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
              <Form.Group as={Col} md="12" controlId="validationCustom04">
                <Form.Label>Email</Form.Label>
                <InputGroup hasValidation>
                  <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroupPrepend">
                      <FontAwesomeIcon icon={faAt} />
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control
                    type="text"
                    placeholder="enter email address"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={touched.email && errors.email}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.email}
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
                    placeholder="enter a password"
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

            {done && (
              <Alert variant="success" className="done">
                Done!
              </Alert>
            )}

            {err && (
              <Alert variant="danger" className="done">
                An Error has occured!
              </Alert>
            )}

            <Button type="submit" className="default-btn">
              Sign Up
            </Button>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default RegisterForm;
