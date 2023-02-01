import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function Booktoursection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { REACT_APP_BASE_URL } = process.env;

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

  const handlesubmit = (e) => {
    e.preventDefault();
    const Name = name;
    const Email = email;
    const Message = message;
    axios.get(`${REACT_APP_BASE_URL}/session/token`).then((result) => {
      console.log(result);
      if (200 === result.status) {
        const csrfToken = result.data;
        fetch(`${REACT_APP_BASE_URL}/webform_rest/submit?_format=json`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-CSRF-Token": csrfToken,
          },
          body: JSON.stringify({
            webform_id: "book_tour",
            entity_type: null,
            entity_id: null,
            in_draft: false,
            uri: ["/webform/webform_id/api"],
            name: Name,
            email: Email,
            message: Message,
          }),
        })
          .then((response) => response.json())
          .then(
            (data) => {
              //on success you do whatever you will want
              notify();
              console.log("success", data);
              setName("");
              setEmail("");
              setMessage("");
              // alert('Details submitted we will get right back to you!!')
            },
            (error) => {
              console.log("error", error);
            }
          );
      }
    });
  };
  return (
    <>
      <div className="book-tour-section">
        <div className="booktourwrapper">
          <div className="book-tour-folder">
            <form className="book-tour-form" onSubmit={handlesubmit}>
              <h2>Book a Tour</h2>
              <p>
                Rationally encounter consequences that are extremely painful or
                again is there anyone.
              </p>
              <div className="input-contenar">
                <div className="input-folder">
                  <input
                    type="Name"
                    className="inner-input"
                    placeholder="Your Name"
                    name="name"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    required=""
                  />
                  <a href="/" className="input-icons">
                    <i className="fa-solid fa-user"></i>
                  </a>
                </div>
                <div className="input-folder">
                  <input
                    type="Email"
                    className="inner-input"
                    placeholder="Email Address"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required=""
                  />
                  <a href="/" className="input-icons">
                    <i className="fa-solid fa-envelope"></i>
                  </a>
                </div>
              </div>
              <textarea
                rows="5"
                cols="30"
                className="inner-Massege"
                placeholder="Your Massege..."
                name="message"
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                requied=""
              ></textarea>
              <div className="Book-tour-submit-btn-folder">
                <button type="submit" className="submit-btn">
                  <i className="fa-solid fa-arrow-right"></i>Submit Here
                </button>
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

export default Booktoursection;
