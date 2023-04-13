import React from "react";
import "./contact.css";
import { Form } from "./Form";

const Contact = () => {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <div className="container contact__container">
        <Form />
      </div>
    </section>
  );
};

export default Contact;
