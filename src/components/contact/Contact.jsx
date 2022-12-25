import React, { useState } from "react";
import "./contact.css";

function Contact() {
  const [message, setMessage] = useState("Thanks, I'll reply ASAP");
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbyYJhE0YbDwNNNsRxFuUOxh8QflkNKOeKVA2OFdj-yrEChQRQanijMvYc_7H2QtgbRAGA/exec";
  const form = document.forms["submit-to-google-sheet"];

  function handleSubmit(e) {
    e.preventDefault();

    fetch(scriptURL, { method: "POST", body: new FormData(form) })
      .then((response) => {
        setMessage("Message sent successfully");
        setTimeout(function () {
          setMessage("");
        }, 5000);
      })

      .catch((error) => console.error("Error!", error.message));
  }

  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="asset/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact</h2>
        <form onSubmit={handleSubmit} name="submit-to-google-sheet">
          <input type="text" name="Name" placeholder="Your Name" required />
          <input type="email" name="Email" placeholder="Your Email" required />
          <textarea
            name="Message"
            rows="6"
            placeholder="Your Message Here"
          ></textarea>

          <button type="submit">send</button>
          {message && <span id="msg">{message}</span>}
        </form>
      </div>
    </div>
  );
}

export default Contact;
