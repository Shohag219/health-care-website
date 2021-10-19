import React from "react";
import { FormControl, InputGroup } from "react-bootstrap";
import "./Contact.css";
const Contact = () => {
  return (
    <div className="contact-container">
      <div className="container text-center text-white py-5">
        <h1 className="text-uppercase">Get In Touch</h1>
        <p>
          <i class="fas fa-phone-square-alt"></i> Phone: +8801571388990
        </p>
        <p>
          <i class="fas fa-envelope"></i> Email:
          mahmudulhasanshohag219@gmail.com
        </p>
        <p>
          <i class="fas fa-map-marker-alt"></i> Address: BrahmanBaria,
          Chittagong, Bangladesh.
        </p>
      </div>
      <h2 className="text-center text-white">Have Some Question?</h2>
      <div className="row container mx-auto p-4">
        <div className="col-md-6">
          <InputGroup className="mb-3">
            <FormControl placeholder="Your name" />
          </InputGroup>
          <InputGroup className="mb-3">
            <FormControl placeholder="Your Email" />
          </InputGroup>
          <InputGroup className="mb-3">
            <FormControl placeholder="Your Phone" />
          </InputGroup>
        </div>
        <div className="col-md-6">
          <InputGroup style={{ height: "140px" }}>
            <FormControl
              as="textarea"
              placeholder="Write your message"
              aria-label="With textarea"
            />
          </InputGroup>
        </div>
        <button
          className="btn btn-danger mx-auto my-3"
          style={{ width: "100%" }}
        >
          Send Message
        </button>
      </div>
    </div>
  );
};

export default Contact;
