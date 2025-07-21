'use client';

import React from 'react';
import InputField from '../inputfield/inputfield'; // your custom input field component
import styles from './contactform.module.css'; // your CSS module
 
export default function ContactForm() {
  return (
    <form 
      action="https://api.web3forms.com/submit" 
      method="POST" 
      className={styles.form}
    >
      {/* Hidden Fields Required by Web3Forms */}
      <input type="hidden" name="access_key" value="e1742f48-58ce-4f0a-a5bd-e463cc75b7f0" />
      <input type="hidden" name="subject" value="New Message from Petro Vistech Contact Form" />
      <input type="hidden" name="from_name" value="Petro Vistech Website" />

      {/* Visible Fields */}
      <InputField
        label="Full Name"
        required
        placeholder="Enter Your Name"
        name="name"
      />
      <InputField
        label="Email ID"
        type="email"
        required
        placeholder="Enter Your Email"
        name="email"
      />
      <InputField
        label="Phone Number"
        subLabel="Phone number with country or State Code"
        required
        type="tel"
        placeholder="Enter Your Phone Number"
        name="phone"
      />
      <InputField
        label="Message"
        placeholder="Enter Your Message"
        isTextArea
        maxWords={600}
        name="message"
      />

      {/* Submit Button */}
      <button type="submit" className={styles.submitBtn}>
        Submit
      </button>
    </form>
  );
}
