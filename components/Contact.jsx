/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";

const Contact = () => {
  // Variables
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showNotification, setShowNotification] = useState(false);

  // Functions
  const submit = async (e) => {
    // Preventing page to reload
    e.preventDefault();
    // Making f etch request
    const response = await fetch(
      "https://formsubmit.co/ajax/ajjlalahmed48@gmail.com",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          message: message,
        }),
      }
    );
    // Parsing data
    const data = await response.json();
    // Checking if request is success
    if (data.success == "true") {
      setShowNotification(true);
    }
  };

  return (
    // Contact
    <div className="contact">
      {/* Title  */}
      <h1 className="title">contact me</h1>
      {/* Form  */}
      <form onSubmit={(e) => submit(e)} className="form">
        {/* Form control  */}
        <div className="form-control">
          <label>name</label>
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            required
          />
        </div>
        {/* Form control  */}
        <div className="form-control">
          <label>email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            required
          />
        </div>
        {/* Form control  */}
        <div className="form-control">
          <label>message</label>
          <textarea
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            rows="5"
            required
          ></textarea>
        </div>
        {/* Form control  */}
        <div className="form-control">
          <button className="submit">submit</button>
        </div>
      </form>
      {/* Notification  */}
      {showNotification && (
        <div className="notify">
          <div className="message">
            <div className="img">
              <img src="/sent.svg" alt="sent sgv" />
            </div>
            <p>The form was submitted successfully</p>
            <button onClick={(e) => setShowNotification(false)} className="exit">
              ok
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
