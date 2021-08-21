import { Formik } from "formik";
import * as yup from "yup";
import React, { useState, useEffect } from "react";
import {
  updateEscort,
  getAgencyEscorts,
  deleteFile,
  updateEscortProfpic
} from "../../../utils/Queries";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import EscortGallery from "../EscortGallery"

import { FilePond, File, registerPlugin } from "react-filepond";
import Config from "../../../config";

//Import FilePond styles
import "filepond/dist/filepond.min.css";
import FilePondPluginFileRename from "filepond-plugin-file-rename";
import FilePondPluginFileMetadata from "filepond-plugin-file-metadata";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

// Register the plugins
registerPlugin(
  FilePondPluginImageExifOrientation,
  FilePondPluginImagePreview,
  FilePondPluginFileRename,
  FilePondPluginFileMetadata
);

import { faAt, faPhone, faGlobe } from "@fortawesome/free-solid-svg-icons";
import dynamic from "next/dynamic";

import { faTwitter } from "@fortawesome/free-brands-svg-icons";

import { Form, Col, InputGroup, Button, Alert, Row } from "react-bootstrap";

//  const EscortGallery  = dynamic(() => import("../EscortGallery"), {
//   ssr: false
// });

// const { Formik } = formik;

const schema = yup.object().shape({
  firstName: yup.string().required(),
  gender: yup.string().required(),
  country: yup.string().required(),
  state: yup.string().required(),
  city: yup.string().required(),
  title: yup.string().required(),
  description: yup.string().required(),
  username: yup.string().required(),
  email: yup.string().email("Invalid email address").required(),
  phone: yup.string().required(),
  website: yup
    .string()
    .url("Invalid website.  Must start with http:// or https://"),
  age: yup.string().required(),
  hair: yup.string().required(),
  eyes: yup.string().required(),
  height: yup.string().required(),
  language1: yup.string().required(),
  level1: yup.string().required(),
});

const URL = Config.url;

const AgencyInfoForm = (props) => {
  const user = props.user;
  let escort = [];
  // const escort = props.escort[0];
  const cities = props.cities;
  const agency = props.agency;
  const selects = props.selects;
  const services = props.services;

  if (props.escort.escort) {
    escort = props.escort.escort;
  }

  const [done, setDone] = useState(false);
  const [err, setErr] = useState(false);
  const [state, setState] = useState(escort.state);
  const [country, setCountry] = useState(false);
  const [svc, setSvc] = useState(escort.services || []);
  const [fls, setFls] = useState([]);
  const [un, setUn] = useState(escort.username);
  const [profilepic, setProfilepic] = useState(escort.profpic);
  const [fileError, setFileError] = useState(false);


  const [selectStates, setSelectStates] = useState();
  const [selectCities, setSelectCities] = useState();

  const ref1 = React.createRef();

  var serv = [];
  services.map((s) => {
    serv[s.serviceid] = svc.includes(s.serviceid);
  });

  const [srv, setSrv] = useState(serv);

  useEffect(async () => {
    updateCountry();
    updateState();
    if (escort) {
      setState(escort.state);
    }

    if (props.escort.files) {
      var files = [];
      props.escort.files.map((file) => {
        files.push({
          source: `${URL}/uploadedimages/${file.name}`,
          options: {
            type: "local",
          },
        });
      });

      setFls(files);

      //  console.log(files)
    }
  }, []);

  const updateCountry = (e) => {
    const uniqueStates = [];
    cities.map((st) => {
      //    console.log(st)
      if (uniqueStates.indexOf(st.state) === -1) {
        uniqueStates.push(st.state);
      }

      if (selectStates != uniqueStates) {
        setSelectStates(uniqueStates);
      }
    });
  };

  const updateState = (e) => {
    const icities = [];

    cities.map((st) => {
      if (e) {
        if (st.state == e.target.value) {
          icities.push(st);
        }
      } else {
        if (st.state == state) {
          icities.push(st);
        }
      }

      setSelectCities(icities);
    });
  };

  const makeid = (length) => {
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };



  return (
    <Formik
      validationSchema={schema}
      onSubmit={async (values) => {

        
        console.log(fls[0])

        
        if(fls.length == 0){
          setFileError("You must upload at least 1 file")
        }

        if(fls.length > 0){

          if(!values.profpic){
            values.profpic = fls[0].file.name


          }

          console.log(values.profpic)
       const update = await updateEscort(values);

        if (update.status == 200) {
         window.location.href = "/dashboard";
        } else {
          setErr(true);
        }
      }
      }}
      initialValues={{
        firstName: escort.firstName || "",
        lastName: escort.lastName || "",
        username: escort.username || "",
        gender: escort.gender || "",
        nationality: escort.nationality || "",
        country: escort.country || "",
        state: escort.state || "",
        city: escort.city || "",
        title: escort.title || "",
        description: escort.description || "",
        email: escort.email || user.email || "",
        phone: escort.phone || agency.phone || "",
        twitterId: escort.twitterId || "",
        website: escort.website || agency.website || "",
        age: escort.age || "",
        hair: escort.hair || "",
        eyes: escort.eyes || "",
        height: escort.height || "",
        sexualOrientation: escort.sexualOrientation || "",
        dressSize: escort.dressSize || "",
        chest: escort.chest || "",
        cup: escort.cup || "",
        waist: escort.waist || "",
        hips: escort.hips || "",
        language1: escort.language1 || "",
        level1: escort.level1 || "",
        language2: escort.language2 || "",
        level2: escort.level2 || "",
        language3: escort.language3 || "",
        level3: escort.level3 || "",
        services: escort.services || "",
        otherServiceInfo: escort.otherServiceInfo || "",
        owner: escort.owner || "",
        type: escort.type || "",
        agencyName: escort.agencyName || "",
        advertisedPrice: escort.advertisedPrice || "",
        oneHourIn: escort.oneHourIn || "",
        oneHourOut: escort.oneHourOut || "",
        oneAndAHalfHourIn: escort.oneAndAHalfHourIn || "",
        oneAndAHalfHourOut: escort.oneAndAHalfHourOut || "",
        twoHourIn: escort.twoHourIn || "",
        twoHourOut: escort.twoHourOut || "",
        additionalHourIn: escort.additionalHourIn || "",
        additionalHourOut: escort.additionalHourOut || "",
        dinnerIn: escort.dinnerIn || "",
        dinnerOut: escort.dinnerOut || "",
        overnightIn: escort.overnightIn || "",
        overnightOut: escort.overnightOut || "",
        otherPricing: escort.otherPricing || "",
        profpic: escort.profpic || "",
        enabled: "True",
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
        handleServiceChange = (e) => {
          const name = e.target.name;

          let s = [];
          if (values.services) {
            s = values.services;
          }

          if (!s.includes(e.target.name)) {
            setSrv({
              ...srv,
              [name]: true,
            });
            console.log("add");
            s.push(e.target.name);
            values.services = s;
          } else {
            console.log("remove");
            s = s.filter((item) => item !== e.target.name);
            values.services = s;
            setSrv({
              ...srv,
              [name]: false,
            });
          }
        },
        handleFirstNameChange = (e) => {
          if (!values.username) {
            if (agency.username) {
              let un = 1;
              if (agency.lastEscortId) {
                un = agency.lastEscortId + 1;
              }

              setUn(`${user.username}-${un}`);

              values.username = `${user.username}-${un}`;
              values.owner = user.username;
              values.type = "Agency Escort";
              values.agencyName = agency.agencyname;
            } else {
              setUn(user.username);

              values.username = user.username;
              values.owner = user.username;
              values.type = "Independent Escort";
            }
          }
        },
        setProfpic = (event) => {
          event.preventDefault;
          const current = values.profpic;
          console.log(event.target);
          if(document.getElementsByClassName("profpic")[0]){
          document.getElementsByClassName("profpic")[0].classList='setdefault'}
          event.target.classList = 'setdefault profpic'
          values.profpic = event.target.name
          setProfilepic(event.target.name)

          if(escort){
            let data = {
              profpic: values.profpic,
              username: values.username
            }

            updateEscortProfpic(data)


          }

        },
        setClass = (f) => {
          if(values.profpic == f.file.name){ 
            return ('setdefault profpic')
          } else {
           return ('setdefault')
          }
        }
      }) => (
        <div className="formwrap">
          <Form noValidate onSubmit={handleSubmit}>
            <div className="formheader">
              <h5>Personal Details</h5>
              <hr />
            </div>
            <Form.Row>
              <Form.Group as={Col} md="6" controlId="validationCustom02">
                <Form.Label>First Name:</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    type="text"
                    placeholder="enter first name"
                    name="firstName"
                    value={values.firstName}
                    onChange={(e) => {
                      handleFirstNameChange(e);
                      handleChange(e);
                    }}
                    // onChange={handleFirstNameChange}
                    onBlur={handleBlur}
                    isInvalid={touched.firstName && errors.firstName}
                  />
                  <Form.Control.Feedback type="invalid">
                    You must enter a first name
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="validationCustom02">
                <Form.Label>Last Name:</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    type="text"
                    placeholder="enter last name"
                    name="lastName"
                    value={values.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={touched.lastName && errors.lastName}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.lastName}
                  </Form.Control.Feedback>
                </InputGroup>
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
                    placeholder="phone number"
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
                    placeholder="email address"
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
                    name="twitterId"
                    value={values.twitterId}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={touched.twitterId && errors.twitterId}
                  />
                  <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="validationGender">
                <Form.Label>Gender:</Form.Label>
                <Form.Control
                  as="select"
                  name="gender"
                  placeholder="select gender"
                  value={values.gender}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={touched.gender && errors.gender}
                >
                  <option>---select gender ---</option>
                  <option value="Female">Female</option>
                  <option value="Male">Male</option>
                  <option value="Trans">Trans</option>
                </Form.Control>
                <Form.Control.Feedback type="invalid">
                  You must select a gender.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="validationNat">
                <Form.Label>Nationality:</Form.Label>
                <Form.Control
                  as="select"
                  name="nationality"
                  placeholder="select nationality"
                  value={values.nationality}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={touched.nationality && errors.nationality}
                >
                  <option>---select nationality ---</option>
                  {selects.nationalities &&
                    selects.nationalities.map((a) => {
                      return (
                        <option
                          key={a.name}
                          value={a.name}
                        >
                          {a.name}
                        </option>
                      );
                    })}
                </Form.Control>
                <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
              </Form.Group>
            </Form.Row>

            <div className="formheader mt-3">
              <h5>Working Location</h5>
              <hr />
            </div>
            <Form.Row>
              <Form.Group as={Col} md="4" controlId="validationCoun">
                <Form.Label>Country:</Form.Label>
                <Form.Control
                  as="select"
                  name="country"
                  placeholder="select country"
                  value={values.country}
                  //   onChange={handleChange}
                  onChange={(e) => {
                    updateCountry(e);
                    handleChange(e);
                  }}
                  onBlur={handleBlur}
                  isInvalid={touched.country && errors.country}
                >
                  <option>---select country ---</option>
                  <option value="Australia">Australia</option>
                </Form.Control>
                <Form.Control.Feedback type="invalid">
                  You must select a country.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationState">
                <Form.Label>State:</Form.Label>
                <Form.Control
                  as="select"
                  name="state"
                  placeholder="select state"
                  value={values.state}
                  onChange={(e) => {
                    updateState(e);
                    handleChange(e);
                  }}
                  onBlur={handleBlur}
                  isInvalid={touched.state && errors.state}
                >
                  <option>---select state ---</option>
                  {selectStates &&
                    selectStates.map((a) => {
                      return (
                        <option key={a} value={a}>
                          {a}
                        </option>
                      );
                    })}
                </Form.Control>
                <Form.Control.Feedback type="invalid">
                  You must select a state.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCity">
                <Form.Label>City:</Form.Label>
                <Form.Control
                  as="select"
                  name="city"
                  placeholder="select city"
                  value={values.city}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={touched.city && errors.city}
                >
                  <option>---select city ---</option>
                  {selectCities &&
                    selectCities.map((a) => {
                      return (
                        <option key={a.cityslug} value={a.cityslug}>
                          {a.city}
                        </option>
                      );
                    })}
                </Form.Control>
                <Form.Control.Feedback type="invalid">
                  You must select a city.
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>

            <div className="formheader mt-3">
              <h5>About</h5>
              <hr />
            </div>

            <Form.Row>
              <Form.Group as={Col} md="12" controlId="validationtitle">
                <Form.Label>Title:</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    type="text"
                    placeholder="enter a descriptive title"
                    name="title"
                    value={values.title}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={touched.title && errors.title}
                  />
                  <Form.Control.Feedback type="invalid">
                    You must enter a title
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
              <Form.Group as={Col} md="12" controlId="validationDesc">
                <Form.Label>Description:</Form.Label>
                <Form.Control
                  as="textarea"
                  type="text"
                  placeholder="enter a detailed description"
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
            <div className="formheader mt-3">
              <h5>Attributes</h5>
              <hr />
            </div>
            <Form.Row>
              <Form.Group as={Col} md="4" controlId="validationCoun">
                <Form.Label>Age:</Form.Label>
                <Form.Control
                  as="select"
                  name="age"
                  placeholder="select age"
                  value={values.age}
                  //   onChange={handleChange}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  onBlur={handleBlur}
                  isInvalid={touched.age && errors.age}
                >
                  <option>---select age ---</option>

                  {selects.age &&
                    selects.age.map((a) => {
                      return (
                        <option key={a} value={a}>
                          {a}
                        </option>
                      );
                    })}
                </Form.Control>
                <Form.Control.Feedback type="invalid">
                  You must select an age.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationState">
                <Form.Label>Hair:</Form.Label>
                <Form.Control
                  as="select"
                  name="hair"
                  placeholder="select hair"
                  value={values.hair}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  onBlur={handleBlur}
                  isInvalid={touched.hair && errors.hair}
                >
                  <option>---select hair ---</option>
                  {selects.hair &&
                    selects.hair.map((a) => {
                      return (
                        <option
                          key={a.name}
                          value={a.name}
                        >
                          {a.name}
                        </option>
                      );
                    })}
                </Form.Control>
                <Form.Control.Feedback type="invalid">
                  You must select a hair colour.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCity">
                <Form.Label>Eyes:</Form.Label>
                <Form.Control
                  as="select"
                  name="eyes"
                  placeholder="select eyes"
                  value={values.eyes}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={touched.eyes && errors.eyes}
                >
                  <option>---select eyes ---</option>
                  {selects.eyes &&
                    selects.eyes.map((a) => {
                      return (
                        <option
                          key={a.name}
                          value={a.name}
                        >
                          {a.name}
                        </option>
                      );
                    })}
                </Form.Control>
                <Form.Control.Feedback type="invalid">
                  You must select an eye colour.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCity">
                <Form.Label>Height:</Form.Label>
                <Form.Control
                  as="select"
                  name="height"
                  placeholder="select height"
                  value={values.height}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={touched.height && errors.height}
                >
                  <option>---select height ---</option>
                  {selects.height &&
                    selects.height.map((a) => {
                      return (
                        <option
                          key={a.name}
                          value={a.name}
                        >
                          {a.name}
                        </option>
                      );
                    })}
                </Form.Control>
                <Form.Control.Feedback type="invalid">
                  You must select a height.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCity">
                <Form.Label>Sexual Orientation:</Form.Label>
                <Form.Control
                  as="select"
                  name="sexualOrientation"
                  placeholder="select orientation"
                  value={values.sexualOrientation}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={
                    touched.sexualOrientation && errors.sexualOrientation
                  }
                >
                  <option>---select orientation ---</option>
                  {selects.sexualorientation &&
                    selects.sexualorientation.map((a) => {
                      return (
                        <option
                          key={a.name}
                          value={a.name}
                        >
                          {a.name}
                        </option>
                      );
                    })}
                </Form.Control>
                <Form.Control.Feedback type="invalid">
                  You must select an orientation.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCity">
                <Form.Label>Dress Size:</Form.Label>
                <Form.Control
                  as="select"
                  name="dressSize"
                  placeholder="select dress size"
                  value={values.dressSize}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={touched.dressSize && errors.dressSize}
                >
                  <option>---select dress size ---</option>
                  {selects.dresssize &&
                    selects.dresssize.map((a) => {
                      return (
                        <option
                          key={a.name}
                          value={a.name}
                        >
                          {a.name}
                        </option>
                      );
                    })}
                </Form.Control>
                <Form.Control.Feedback type="invalid">
                  You must select a dress size.
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>

            <div className="formheader mt-3">
              <h5>Measurements</h5>
              <hr />
            </div>
            <Form.Row>
              <Form.Group as={Col} md="3" controlId="validationCoun">
                <Form.Label>Chest:</Form.Label>
                <Form.Control
                  as="select"
                  name="chest"
                  placeholder="select chest"
                  value={values.chest}
                  //   onChange={handleChange}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  onBlur={handleBlur}
                  isInvalid={touched.chest & errors.chest}
                >
                  <option>---select chest ---</option>

                  {selects.chest &&
                    selects.chest.map((a) => {
                      return (
                        <option key={a.name} value={a.name}>
                          {`${a.name} in`}
                        </option>
                      );
                    })}
                </Form.Control>
                <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="3" controlId="validationState">
                <Form.Label>Bust:</Form.Label>
                <Form.Control
                  as="select"
                  name="cup"
                  placeholder="select bust"
                  value={values.cup}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  onBlur={handleBlur}
                  isInvalid={touched.cup && errors.cup}
                >
                  <option>---select bust ---</option>
                  {selects.bust &&
                    selects.bust.map((a) => {
                      return (
                        <option
                          key={a.name}
                          value={a.name}
                        >
                          {a.name}
                        </option>
                      );
                    })}
                </Form.Control>
                <Form.Control.Feedback type="invalid">
                  You must select a hair colour.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="3" controlId="validationCity">
                <Form.Label>Waist:</Form.Label>
                <Form.Control
                  as="select"
                  name="waist"
                  placeholder="select waist"
                  value={values.waist}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={touched.waist && errors.waist}
                >
                  <option>---select waist ---</option>
                  {selects.chest &&
                    selects.chest.map((a) => {
                      return (
                        <option key={a.name} value={a.name}>
                          {`${a.name} in`}
                        </option>
                      );
                    })}
                </Form.Control>
                <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="3" controlId="validationCity">
                <Form.Label>Hips:</Form.Label>
                <Form.Control
                  as="select"
                  name="hips"
                  placeholder="select hips"
                  value={values.hips}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={touched.hips && errors.hips}
                >
                  <option>---select hips ---</option>
                  {selects.chest &&
                    selects.chest.map((a) => {
                      return (
                        <option key={a.name} value={a.name}>
                          {`${a.name} in`}
                        </option>
                      );
                    })}
                </Form.Control>
                <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
              </Form.Group>
            </Form.Row>

            <div className="formheader mt-3">
              <h5>Languages Spoken</h5>
              <hr />
            </div>
            <Form.Row>
              <Form.Group as={Col} md="6" controlId="validationCoun">
                <Form.Label>Main Language:</Form.Label>
                <Form.Control
                  as="select"
                  name="language1"
                  placeholder="select language"
                  value={values.language1}
                  //   onChange={handleChange}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  onBlur={handleBlur}
                  isInvalid={touched.language1 && errors.language1}
                >
                  <option>---select language ---</option>

                  {selects.languages &&
                    selects.languages.map((a) => {
                      return (
                        <option
                          key={a.name}
                          value={a.name}
                        >
                          {a.name}
                        </option>
                      );
                    })}
                </Form.Control>
                <Form.Control.Feedback type="invalid">
                  You must select a main language.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="validationState">
                <Form.Label>Level:</Form.Label>
                <Form.Control
                  as="select"
                  name="level1"
                  placeholder="select level"
                  value={values.level1}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  onBlur={handleBlur}
                  isInvalid={touched.level1 && errors.level1}
                >
                  <option>---select level ---</option>
                  {selects.levels &&
                    selects.levels.map((a) => {
                      return (
                        <option
                          key={a.name}
                          value={a.name}
                        >
                          {a.name}
                        </option>
                      );
                    })}
                </Form.Control>
                <Form.Control.Feedback type="invalid">
                  You must select a level
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="6" controlId="validationCoun">
                <Form.Label>Language 2:</Form.Label>
                <Form.Control
                  as="select"
                  name="language2"
                  placeholder="select language"
                  value={values.language2}
                  //   onChange={handleChange}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  onBlur={handleBlur}
                  isInvalid={touched.language2 && errors.language2}
                >
                  <option>---select language ---</option>

                  {selects.languages &&
                    selects.languages.map((a) => {
                      return (
                        <option
                          key={a.name}
                          value={a.name}
                        >
                          {a.name}
                        </option>
                      );
                    })}
                </Form.Control>
                <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="validationState">
                <Form.Label>Level:</Form.Label>
                <Form.Control
                  as="select"
                  name="level2"
                  placeholder="select level"
                  value={values.level2}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  onBlur={handleBlur}
                  isInvalid={touched.level2 && errors.level2}
                >
                  <option>---select level ---</option>
                  {selects.levels &&
                    selects.levels.map((a) => {
                      return (
                        <option
                          key={a.name}
                          value={a.name}
                        >
                          {a.name}
                        </option>
                      );
                    })}
                </Form.Control>
                <Form.Control.Feedback type="invalid">
                  You must select a level
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="6" controlId="validationCoun">
                <Form.Label>Language 3:</Form.Label>
                <Form.Control
                  as="select"
                  name="language3"
                  placeholder="select language"
                  value={values.language3}
                  //   onChange={handleChange}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  onBlur={handleBlur}
                  isInvalid={touched.language3 && errors.language3}
                >
                  <option>---select language ---</option>

                  {selects.languages &&
                    selects.languages.map((a) => {
                      return (
                        <option
                          key={a.name}
                          value={a.name}
                        >
                          {a.name}
                        </option>
                      );
                    })}
                </Form.Control>
                <Form.Control.Feedback type="invalid">
                  You must select language.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="validationState">
                <Form.Label>Level:</Form.Label>
                <Form.Control
                  as="select"
                  name="level3"
                  placeholder="select level"
                  value={values.level3}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  onBlur={handleBlur}
                  isInvalid={touched.level3 && errors.level3}
                >
                  <option>---select level ---</option>
                  {selects.levels &&
                    selects.levels.map((a) => {
                      return (
                        <option
                          key={a.name}
                          value={a.name}
                        >
                          {a.name}
                        </option>
                      );
                    })}
                </Form.Control>
                <Form.Control.Feedback type="invalid">
                  You must select a level
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>

            <div className="formheader mt-3">
              <h5>Services</h5>
              <hr />
            </div>

            <Form.Row>
              {services.map((s) => (
                <div key={s.serviceid} className="mb-3 ml-15">
                  <Form.Check
                    type="checkbox"
                    id={s.serviceid}
                    name={s.serviceid}
                    label={s.servicename}
                    onChange={handleServiceChange}
                    checked={srv[s.serviceid]}
                  />
                </div>
              ))}

              <Form.Group as={Col} md="12" controlId="validationDesc">
                <Form.Label>Other Service Information:</Form.Label>
                <Form.Control
                  as="textarea"
                  type="text"
                  placeholder="enter other service information here"
                  name="otherServiceInfo"
                  rows={10}
                  value={values.otherServiceInfo}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={
                    touched.otherServiceInfo && errors.otherServiceInfo
                  }
                />
                <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <div className="formheader mt-3">
              <h5>Pricing</h5>
              <hr />
            </div>

            <Form.Row>
              <Form.Group as={Col} md="12" controlId="validationCustom02">
                <Form.Label>Advertised Price:</Form.Label>
                <InputGroup hasValidation>
                  <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroupPrepend">$</InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control
                    type="number"
                    placeholder="specity advertised price"
                    name="advertisedPrice"
                    value={values.advertisedPrice}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={
                      touched.advertisedPrice && errors.advertisedPrice
                    }
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.advertisedPrice}
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>

              <Form.Group as={Col} md="6" controlId="validationCustom02">
                <Form.Label>1hr Incall:</Form.Label>
                <InputGroup hasValidation>
                  <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroupPrepend">$</InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control
                    type="number"
                    placeholder="1hr incall price"
                    name="oneHourIn"
                    value={values.oneHourIn}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={touched.oneHourIn && errors.oneHourIn}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.oneHourIn}
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="validationCustom02">
                <Form.Label>1hr Outcall:</Form.Label>
                <InputGroup hasValidation>
                  <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroupPrepend">$</InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control
                    type="number"
                    placeholder="1hr outcall price"
                    name="oneHourOut"
                    value={values.oneHourOut}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={touched.oneHourOut && errors.oneHourOut}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.oneHourOut}
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>

              <Form.Group as={Col} md="6" controlId="validationCustom02">
                <Form.Label>1.5hr Incall:</Form.Label>
                <InputGroup hasValidation>
                  <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroupPrepend">$</InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control
                    type="number"
                    placeholder="1.5hr incall price"
                    name="oneAndAHalfHourIn"
                    value={values.oneAndAHalfHourIn}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={
                      touched.oneAndAHalfHourIn && errors.oneAndAHalfHourIn
                    }
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.oneAndAHalfHourIn}
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="validationCustom02">
                <Form.Label>1.5hr Outcall:</Form.Label>
                <InputGroup hasValidation>
                  <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroupPrepend">$</InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control
                    type="number"
                    placeholder="1.5hr outcall price"
                    name="oneAndAHalfHourOut"
                    value={values.oneAndAHalfHourOut}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={
                      touched.oneAndAHalfHourOut && errors.oneAndAHalfHourOut
                    }
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.oneAndAHalfHourOut}
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>

              <Form.Group as={Col} md="6" controlId="validationCustom02">
                <Form.Label>2hr Incall:</Form.Label>
                <InputGroup hasValidation>
                  <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroupPrepend">$</InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control
                    type="number"
                    placeholder="2hr incall price"
                    name="twoHourIn"
                    value={values.twoHourIn}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={touched.twoHourIn && errors.twoHourIn}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.twoHourIn}
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="validationCustom02">
                <Form.Label>2hr Outcall:</Form.Label>
                <InputGroup hasValidation>
                  <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroupPrepend">$</InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control
                    type="number"
                    placeholder="2hr outcall price"
                    name="twoHourOut"
                    value={values.twoHourOut}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={touched.twoHourOut && errors.twoHourOut}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.twoHourOut}
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>

              <Form.Group as={Col} md="6" controlId="validationCustom02">
                <Form.Label>Additional Hour Incall:</Form.Label>
                <InputGroup hasValidation>
                  <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroupPrepend">$</InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control
                    type="number"
                    placeholder="additional hour incall price"
                    name="additionalHourIn"
                    value={values.additionalHourIn}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={
                      touched.additionalHourIn && errors.additionalHourIn
                    }
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.additionalHourIn}
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="validationCustom02">
                <Form.Label>Additional Hour Outcall:</Form.Label>
                <InputGroup hasValidation>
                  <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroupPrepend">$</InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control
                    type="number"
                    placeholder="additional hour outcall price"
                    name="additionalHourOut"
                    value={values.additionalHourOut}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={
                      touched.additionalHourOut && errors.additionalHourOut
                    }
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.additionalHourOut}
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>

              <Form.Group as={Col} md="6" controlId="validationCustom02">
                <Form.Label>Dinner Incall:</Form.Label>
                <InputGroup hasValidation>
                  <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroupPrepend">$</InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control
                    type="number"
                    placeholder="dinner incall price"
                    name="dinnerIn"
                    value={values.dinnerIn}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={touched.dinnerIn && errors.dinnerIn}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.dinnerIn}
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>

              <Form.Group as={Col} md="6" controlId="validationCustom02">
                <Form.Label>Dinner Outcall:</Form.Label>
                <InputGroup hasValidation>
                  <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroupPrepend">$</InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control
                    type="number"
                    placeholder="dinner outcall price"
                    name="dinnerOut"
                    value={values.dinnerOut}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={touched.dinnerOut && errors.dinnerOut}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.dinnerOut}
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>

              <Form.Group as={Col} md="6" controlId="validationCustom02">
                <Form.Label>Overnight Incall:</Form.Label>
                <InputGroup hasValidation>
                  <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroupPrepend">$</InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control
                    type="number"
                    placeholder="overnight incall price"
                    name="overnightIn"
                    value={values.overnightIn}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={touched.overnightIn && errors.overnightIn}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.overnightIn}
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>

              <Form.Group as={Col} md="6" controlId="validationCustom02">
                <Form.Label>Overnight Outcall:</Form.Label>
                <InputGroup hasValidation>
                  <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroupPrepend">$</InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control
                    type="number"
                    placeholder="overnight outcall price"
                    name="overnightOut"
                    value={values.overnightOut}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={touched.overnightOut && errors.overnightOut}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.overnightOut}
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>

              <Form.Group as={Col} md="12" controlId="validationDesc">
                <Form.Label>Other Pricing Information:</Form.Label>
                <Form.Control
                  as="textarea"
                  type="text"
                  placeholder="enter other pricing information here"
                  name="otherPricing"
                  rows={10}
                  value={values.otherPricing}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={touched.otherPricing && errors.otherPricing}
                />
                <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
              </Form.Group>
            </Form.Row>

            <div className="formheader mt-3">
              <h5>Photos</h5>
              <hr />
              {/* <EscortGallery un={un} files={props.escort.files || []} /> */}
              <FilePond
                files={fls}
                allowFileMetadata={true}
                allowProcess={true}
                fileRenameFunction={(file) => {
                  var n = makeid(25);
                  return n + file.extension;
                }}
                fileMetadataObject={(file) => {
                  username: un;
                }}
                //onupdatefiles={setFiles}
                onupdatefiles={(fileItems) => {
                  // Set current file objects to this.state

                  
                  setFls(fileItems);

                

                  //  console.log(fileItems)
                  fileItems.map((f) => {


                    var button = document.createElement("input");
                    button.type = "button";
                    button.id = `button-${f.id}`;
                    button.name = f.file.name;
                    button.value = "Default";
                    button.classList = (profilepic == f.file.name) ? `setdefault profpic` : `setdefault `
                    button.addEventListener(
                      "click",
                      function (event) {
                        setProfpic(event);
                      },
                      false
                    );
                    // button.onclick = setProfilepic(f.file.name)
                    // console.log(f)

                    var el = document.getElementById(`filepond--item-${f.id}`);
                    if (!document.getElementById(`button-${f.id}`)) {
                      el.appendChild(button);
                      //     console.log(el)
                    }
                  });
                }}
                allowMultiple={true}
                maxFiles={10}
                // server="/api/file/upload"

                server={{
                  process: {
                    url: "/api/file/upload",
                    ondata: (formData) => {
                      formData.append("username", un);
                      return formData;
                    },

                    // uploadFile(file, un)
                  },
                  load: (source, load) => {
                    fetch(source)
                      .then((res) => res.blob())
                      .then(load);
                  },
                  remove: (source, load, error) => {
                    var name = source.replace(`${URL}/uploadedimages/`, "");

                    deleteFile(name);

                    load();
                  },
                }}
                name="file" /* sets the file input name, it's filepond by default */
                labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
              />
                 <div className="invalid-feedback display-block">
                    {fileError}
                  </div>
            </div>

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

            <Button type="submit" className="default-btn mt-3">
              Submit profile
            </Button>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default AgencyInfoForm;
