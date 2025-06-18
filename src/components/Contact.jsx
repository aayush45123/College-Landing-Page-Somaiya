import React, { useState } from "react";
import "../styles/Contact.css";
import { FaMessage, FaPhone, FaLocationArrow } from "react-icons/fa6";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaRegAddressCard } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const savedMessages =
      JSON.parse(localStorage.getItem("contactMessages")) || [];
    savedMessages.push(formData);
    localStorage.setItem("contactMessages", JSON.stringify(savedMessages));
    alert("Your message has been saved locally!");

    // Clear the form
    setFormData({ name: "", phone: "", message: "" });
  };

  return (
    <div className="contactContainer">
      <div className="left-contact">
        <h3>
          Send Us A Message <FaMessage />
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
          quidem...
        </p>
        <ul>
          <li>
            <MdMarkEmailUnread /> abc@gmail.com
          </li>
          <li>
            <FaPhone /> 9167541096
          </li>
          <li>
            <FaRegAddressCard /> Mumbai - 400010
          </li>
        </ul>
      </div>
      <div className="right-contact">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name .."
            value={formData.name}
            onChange={handleChange}
            required
          />
          <label htmlFor="phone">Phone Number</label>
          <input
            type="number"
            name="phone"
            placeholder="Enter your phone number ..."
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <label htmlFor="message">Enter your message</label>
          <textarea
            name="message"
            rows={6}
            placeholder="Enter your message ..."
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" className="new_button">
            Submit Now <FaLocationArrow />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
