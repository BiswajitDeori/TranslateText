import React from 'react';
import './contact.css';
import { Navbar } from './Navbar';

export const Contact = () => {
  return (
    <div>
   <Navbar/>
    <div className="owner-contact-container">
      <div className="owner-info">
        <h2>Biswajit Deori</h2>
        <p>Email: biswajitdeori@gmail.com</p>
        <p>Phone: (123) 456-7890</p>
        <p>Location: 123 Main St, City</p>
      </div>
      <div className="contact-form">
        <h3>Contact biswajit</h3>
        <form>
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" required></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
    </div>
  );
};
