import { useState } from "react";
import "./contact.css";

const Contact = () => {
  const [message, setMessage] = useState("");
  const [sender, setSender] = useState("");
  const [senderAddress, setSenderAddress] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }

  function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!sender) {
      setError("Sender name is required");
      return;
    }
    if (!message) {
      setError("Message is required");
      return;
    }
    if (!senderAddress || !validateEmail(senderAddress)) {
      setError("A valid email address is required");
      return;
    }

    setSuccess("Message sent successfully!");
    setSender("");
    setSenderAddress("");
    setMessage("");
    console.log(sender, senderAddress, message);
  }

  return (
    <div className="contact-page">
      <h1 className="contact-heading">Get in Touch</h1>
      <div className="contact-content">
        <div className="contact-info">
          <h2 className="section-heading">Contact Details</h2>
          <div className="contact-details">
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <a href="mailto:hamid.okanlawon28@gmail.com">
                hamid.okanlawon28@gmail.com
              </a>
            </div>
            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <span>+2348081476273</span>
            </div>
            <div className="contact-item">
              <i className="fab fa-linkedin"></i>
              <a
                href="https://linkedin.com/in/hamid-ib"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/hamid-ib
              </a>
            </div>
          </div>
        </div>
        <div className="contact-form">
          <h2 className="section-heading">Send a Message</h2>
          <form
            action="https://formspree.io/f/xjvnnqev"
            method="POST"
            onSubmit={handleSubmit}
          >
            <input
              onChange={(e) => {
                setSender(e.target.value);
              }}
              type="text"
              placeholder="Name"
              name="sender"
            />
            <input
              onChange={(e) => {
                setSenderAddress(e.target.value);
              }}
              type="email"
              placeholder="Email"
              name="email"
            />
            <textarea
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              value={message}
              placeholder="Message"
              name="message"
            ></textarea>
            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
