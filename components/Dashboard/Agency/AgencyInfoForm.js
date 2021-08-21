import { Formik } from 'formik';
import * as yup from 'yup';
import React, { useState } from "react";
import { updateAgency } from "../../../utils/Queries";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt, faPhone, faGlobe } from "@fortawesome/free-solid-svg-icons";

import { faTwitter } from "@fortawesome/free-brands-svg-icons";


import { Form, Col, InputGroup, Button, Alert } from "react-bootstrap";


// const { Formik } = formik;

const schema = yup.object().shape({
  agencyname: yup.string().required(),
  username: yup.string().required(),
  email: yup.string().email('Invalid email address').required(),
  phone: yup.string().required(),
  // twitterid: agency.twitterid,
   website: yup.string().url('Invalid website.  Must start with http:// or https://'),
  description: yup.string().required(),

  // firstName: yup.string().required(),
  // lastName: yup.string().required(),
  // username: yup.string().required(),
  // city: yup.string().required(),
  // state: yup.string().required(),
  // zip: yup.string().required(),
  // terms: yup.bool().required().oneOf([true], 'Terms must be accepted'),
});

const AgencyInfoForm = (props) => {
  const agency = props.agency;
  const user = props.user[0];

  const [done, setDone] = useState(false);
  const [err, setErr] = useState(false);

  return (
    <Formik
      validationSchema={schema}
      onSubmit={async values => {
        const update = await updateAgency(values);

        console.log(update.status);
  
        if (update.status == 200) {
          setDone(true);
        } else {
          setErr(true);
        }
    //  //   sleep(500).then(() => {
    //       alert(JSON.stringify(values, null, 2));
    // //    });
      }}
     initialValues={{
    agencyname: agency.agencyname,
    username: user.username,
    email: agency.email || user.email,
    phone: agency.phone,
    twitterid: agency.twitterid,
    website: agency.website,
    description: agency.description,
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
          <div className="formwrap">
        <Form noValidate onSubmit={handleSubmit}>
        <Form.Row>
            <Form.Group as={Col} md="12" controlId="validationCustom01">
              <Form.Label>Agency Name:</Form.Label>
              <Form.Control
                type="text"
                placeholder="enter your agency name"
                name="agencyname"
                value={values.agencyname}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={touched.agencyname && errors.agencyname}
              />
              <Form.Control.Feedback type="invalid">
                You must enter an agency name.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationCustom02">
              <Form.Label>Phone</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Prepend>
                  <InputGroup.Text id="inputGroupPrepend">
                    <FontAwesomeIcon icon={faPhone} />
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  type="text"
                  placeholder="agenncy phone number"
                  name="phone"
                  value={values.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={touched.phone && errors.phone}
                />
                <Form.Control.Feedback type="invalid">
                  You must enter a phone number.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationCustom04">
              <Form.Label>Email</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Prepend>
                  <InputGroup.Text id="inputGroupPrepend">
                    <FontAwesomeIcon icon={faAt} />
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  type="text"
                  placeholder="agency email address"
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
            <Form.Group as={Col} md="6" controlId="validationCustom05">
              <Form.Label>Website</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Prepend>
                  <InputGroup.Text id="inputGroupWebsite">
                    <FontAwesomeIcon icon={faGlobe} />
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  type="text"
                  placeholder="your website - eg. https://escortgem.com"
                  name="website"
                  value={values.website}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={touched.website && errors.website}
                />
                <Form.Control.Feedback type="invalid">
                 {errors.website}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationCustom03">
              <Form.Label>Twitter</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Prepend>
                  <InputGroup.Text id="inputGroupPrepend">
                    <FontAwesomeIcon icon={faTwitter} />
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  type="text"
                  placeholder="twitter id"
                  name="twitterid"
                  value={values.twitterid}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={touched.twitterid && errors.twitterid}
                />
                <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
              </InputGroup>
            </Form.Group>

            <Form.Group as={Col} md="12" controlId="validationCustom10">
              <Form.Label>Description:</Form.Label>
              <Form.Control
                as="textarea"
                type="text"
                placeholder="description of agency"
                name="description"
                rows={10}
                value={values.description}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={touched.description && errors.description}
              />
              <Form.Control.Feedback type="invalid">
                You must enter a description.
              </Form.Control.Feedback>
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
            Update profile
          </Button>
        </Form>
        </div>
      )}
    </Formik>
  );
}

export default AgencyInfoForm;