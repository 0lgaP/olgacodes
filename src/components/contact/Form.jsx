import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./contact.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SuccessToast from "./SuccessToast";

export const Form = () => {
  const form = useRef();

  const successToast = () => {
    toast.success("Your Message has been sent!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    successToast();
    emailjs
      .sendForm(
        "service_0zha7de",
        "template_irr1qwe",
        form.current,
        "Iue0eathd2jje57o7"
      )
      .then(
        () => {},
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  const scrollTo = (id) => {
    const item = document.getElementById(id);
    return item.scrollIntoView({ block: "center" });
  };

  return (
    <article className="contact__option">
      <h3>Send Message</h3>
      <fieldset>
        <form ref={form} onSubmit={sendEmail}>
          <label for="name" class="visuallyhidden">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            required
            onFocus={() => scrollTo("name")}
          />
          <label for="name" class="visuallyhidden">
            Your Email
          </label>
          <input
            type="text"
            id="email"
            name="email"
            onFocus={() => scrollTo("email")}
            placeholder="Your Email"
          />
          <label for="name" class="visuallyhidden">
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="7"
            placeholder="Your Message"
            required
            onFocus={() => scrollTo("message")}
          ></textarea>
          <>
            <SuccessToast />
          </>
          <button id="submit" className="btn btn-primary" type="submit">
            Send Message
          </button>
        </form>
      </fieldset>
    </article>
  );
};
