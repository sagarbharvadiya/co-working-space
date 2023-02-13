import React, { useRef, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import emailjs from '@emailjs/browser';

function Demoform() {
  
  const notify = () => {
    toast.success("Your Request has been sent😊", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_9spedfi', 'template_juxtdiw', form.current, 'JEUgk1jZnrZLqJz5k')
      .then((result) => {
          notify()
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
  return (
    <>
      <div className="book-tour-section">
        <div className="booktourwrapper">
          <div className="book-tour-folder">
            <form ref={form} className="book-tour-form" onSubmit={sendEmail}>
              <h2>Book a Tour</h2>
              <p>
                Rationally encounter consequences that are extremely painful or
                again is there anyone.
              </p>
              <div className="input-contenar">
                <div className="input-folder">
                  <input
                    type="text"
                    className="inner-input"
                    placeholder="Your Name"
                    name="user_name"
                    required
                  />
                  <a href="/" className="input-icons">
                    <i className="fa-solid fa-user"></i>
                  </a>
                </div>
                <div className="input-folder">
                  <input
                    type="email"
                    className="inner-input"
                    placeholder="Email Address"
                    name="user_email"
                    required
                  />
                  <a href="/" className="input-icons">
                    <i className="fa-solid fa-envelope"></i>
                  </a>
                </div>
              </div>
              <textarea
                rows="3"
                cols="30"
                className="inner-Massege"
                placeholder="Your Massege..."
                name="message"
                required
              ></textarea>
              <div className="Book-tour-submit-btn-folder">
              <input type="submit" className="submit-btn" value="Send" />
              </div>
              <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Demoform;
