import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);
import baseUrl from "../../utils/baseUrl";
// import Image from "next/image";
import Config from "../../config";
import config from "../../config";

const alertContent = () => {
  MySwal.fire({
    title: "Congratulations!",
    text: "Your message was successfully send and will back to you soon",
    icon: "success",
    timer: 2000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
};

const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

function generateString(length) {
  let result = " ";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}

// Form initial state
const INITIAL_STATE = {
  name: "",
  email: "",
  number: "",
  age: "",
  dressSize: "",
  location: "",
  text: "",
  files: [],
  filePrev: "",
};

const EmploymentForm = () => {
  const [contact, setContact] = useState(INITIAL_STATE);
  const { register, handleSubmit, errors } = useForm();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prevState) => ({ ...prevState, [name]: value }));
    console.log(contact);
  };

  // const fileUpload = (file) => {
  //   const url = `${Config.API}/files/empupload`;
  //  const filename = generateString('10')
  //   const formData = new FormData();
  //   formData.append('file',file)
  //   formData.append('filename',filename)
  //   const config = {
  //       headers: {
  //           'content-type': 'multipart/form-data'
  //       }
  //   }
  //   return  post(url, formData,config)
  // }

  const fileUpload = async (file) => {
    try {
      let oldfiles = contact.files;

      const url = `${Config.api}/file/empupload`;
      const filename = generateString("10");
      const formData = new FormData();
      formData.append("file", file);
      formData.append("filename", filename);
      const post = await axios.post(url, formData);
      const append = post.data;

      oldfiles.push(append);

      setContact((prevState) => ({ ...prevState, files: oldfiles }));

      let prev = [];

      contact.files
        ? contact.files.map((f, i) => {
            prev.push(
              <div className="col-sm-6" key={i}>
                <img src={f} alt={f} />
              </div>
            );
          })
        : "";

      setContact((prevState) => ({ ...prevState, filePrev: prev }));
    } catch (error) {
      console.log(error);
    }
  };

  const handleFileChange = (e) => {
    let file = e.target.files[0];

    fileUpload(file);
  };

  const onSubmit = async (e) => {
    // e.preventDefault();
    try {
      const url = `${baseUrl}/api/employment`;
      const {
        name,
        email,
        number,
        age,
        dressSize,
        location,
        text,
        files,
      } = contact;
      const payload = {
        name,
        email,
        number,
        age,
        dressSize,
        location,
        text,
        files,
      };
      await axios.post(url, payload);
      console.log(url);
      setContact(INITIAL_STATE);
      alertContent();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="contact-area pb-100 pt-50">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div className="overview-box">
              <div className="overview-content full-width">
                <div className="content right-content pl-0">
                  <span className="sub-title">Escort Employment</span>
                  <h2 className="pb-30">Want to work with us?</h2>

                  <ul className="features-list">
                    <li>
                      <span>
                        <i className="bx bx-check"></i> Very busy, & have been
                        told we have lowest fees out of any agency, big $$$
                        potential.
                      </span>
                    </li>
                    <li>
                      <span>
                        <i className="bx bx-check"></i> One of the few well
                        reviewed agencies on punter planet, have a look for
                        yourself!
                      </span>
                    </li>
                    <li>
                      <span>
                        <i className="bx bx-check"></i> Open till late 6 nights
                        a week.
                      </span>
                    </li>
                    <li>
                      <span>
                        <i className="bx bx-check"></i> Supportive management,
                        and excellent working environment with great friendly
                        girls (no cattiness tolerated).
                      </span>
                    </li>
                    <li>
                      <span>
                        <i className="bx bx-check"></i> Very busy with a large
                        selection of great regular clients.
                      </span>
                    </li>
                    <li>
                      <span>
                        <i className="bx bx-check"></i> Client base is actually
                        mainly young (under 40) and often they genuinely book
                        girls to have fun and party with for hours.
                      </span>
                    </li>
                    <li>
                      <span>
                        <i className="bx bx-check"></i> No experience necessary,
                        training can be provided by one of our experienced LNB
                        escorts.
                      </span>
                    </li>
                  </ul>
                  <br />
                  <br />
                  <p>
                    Late Night Babes Sydney is a reputable and well-reviewed
                    agency.
                    <br />
                    <br />
                    We promise we will work as hard as we can to help you make
                    as much money as possible, and make sure you are safe and
                    enjoy coming to work.
                    <br />
                    <br />
                    We are very flexible with any special work requests any girl
                    may have, like uni schedules or a day job.
                    <br />
                    <br />
                    We promise we will work as hard as we can to help you make
                    as much money as possible, and make sure you are safe and
                    enjoy coming to work.
                    <br />
                    <br />
                    You can apply now by or emailing us -{" "}
                    <a href="mailto:info@lnbsydneyescorts.com.au">
                      info@lnbsydneyescorts.com.au
                    </a>{" "}
                    with two photos (Selfies are fine). Please also include your
                    name, age, dress size, location, phone number and anything
                    else you might like to talk about :)
                    <br />
                    <br />
                    Call us anytime for more information - 0492 141 346
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="contact-form">
              <form id="contactForm" onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        className="form-control"
                        value={contact.name}
                        onChange={handleChange}
                        ref={register({ required: true })}
                      />
                      <div
                        className="invalid-feedback"
                        style={{ display: "block" }}
                      >
                        {errors.name && "Name is required."}
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="number"
                        placeholder="Your phone number"
                        className="form-control"
                        value={contact.number}
                        onChange={handleChange}
                        ref={register({ required: true })}
                      />
                      <div
                        className="invalid-feedback"
                        style={{ display: "block" }}
                      >
                        {errors.number && "Number is required."}
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <input
                        type="text"
                        name="email"
                        placeholder="Your email address"
                        className="form-control"
                        value={contact.email}
                        onChange={handleChange}
                        ref={register({
                          required: true,
                          pattern: /^\S+@\S+$/i,
                        })}
                      />
                      <div
                        className="invalid-feedback"
                        style={{ display: "block" }}
                      >
                        {errors.email && "Email is required."}
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="age"
                        placeholder="Your Age"
                        className="form-control"
                        value={contact.age}
                        onChange={handleChange}
                        ref={register({ required: true })}
                      />
                      <div
                        className="invalid-feedback"
                        style={{ display: "block" }}
                      >
                        {errors.age && "Age is required."}
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="dressSize"
                        placeholder="Your Dress Size"
                        className="form-control"
                        value={contact.dressSize}
                        onChange={handleChange}
                        ref={register({ required: true })}
                      />
                      <div
                        className="invalid-feedback"
                        style={{ display: "block" }}
                      >
                        {errors.dressSize && "Dress Size is required."}
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="location"
                        placeholder="Your Location"
                        className="form-control"
                        value={contact.location}
                        onChange={handleChange}
                        ref={register({ required: true })}
                      />
                      <div
                        className="invalid-feedback"
                        style={{ display: "block" }}
                      >
                        {errors.location && "Location is required."}
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <textarea
                        name="text"
                        cols="30"
                        rows="5"
                        placeholder="Write your message..."
                        className="form-control"
                        value={contact.text}
                        onChange={handleChange}
                      />
                      <div
                        className="invalid-feedback"
                        style={{ display: "block" }}
                      >
                        {errors.text && "Text body is required."}
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <input
                      type="file"
                      id="file"
                      name="file"
                      onChange={handleFileChange}
                    />
                    <div className="file-prev" id="files">
                      <div className="row">{contact.filePrev}</div>
                    </div>
                  </div>

                  <div className="col-lg-12 col-sm-12">
                    <button type="submit" className="default-btn">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="contact-image" data-tilt>
              {/* <Image
                layout="responsive"
                width="902"
                height="1107"
                src="/images/model3.webp"
                alt="Employment with Late Night Babes Sydney"
              /> */}
                <img
                src="/images/model3.webp"
                alt="Employment with Late Night Babes Sydney"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmploymentForm;
