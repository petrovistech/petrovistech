'use client';

import Image from 'next/image';
import InputField from '../inputfield/inputfield';
import styles from './contactform.module.css';
import Contact from '@/assets/contact.png';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {  handleSubmit, reset } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
   try{ setIsSubmitting(true);
    const payload = {
      access_key: 'e1742f48-58ce-4f0a-a5bd-e463cc75b7f0',
      subject: 'New Message from Petro Vistech Contact Form',
      from_name: 'Petro Vistech Website',
      name: data.name,
      email: data.email,
      phone: data.phone,
      message: data.message,
    };

    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    
    const result = await res.json();

    if (result.success) {
      setIsSubmitted(true);
      reset();
    } else {
        console.log('Error:', result);
      alert('Something went wrong. Please try again later.');
    }

    setIsSubmitting(false);} catch (error) {
      console.error('Submission error:', error);
      setIsSubmitting(false);
      alert('An error occurred while submitting the form. Please try again later.');
    }
  };

  return (
    <section className={styles.contactSection} id="contact">
      <div className={styles.top}>
        <h2 className={styles.header}>Contact Us: Ready to Collaborate?</h2>
        <p className={styles.subheader}>
          Whether you’re interested in partnering with us, learning more about our ethanol projects, or exploring investment opportunities, we’re here to help.
        </p>
      </div>

      <div className={styles.grid}>
        {/* Left Side */}
        <div className={styles.left}>
          <Image src={Contact.src} alt="Contact" fill />
          <div className={styles.overlay}>
            <h2 className={styles.header2}>Get in Touch with Petro Vistech</h2>
            <p className={styles.subheader}>
              Please Fill The Form, <br /> We will get Back To You Soon
            </p>
          </div>
        </div>

        {/* Right Side - Form */}
        {isSubmitted ? (
          <div className={styles.successMessage}>Thanks! Your message has been sent.</div>
        ) : (
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <InputField
              label="Full Name"
              required
              placeholder="Enter Your Name"
              name="name"
            />
            <InputField
              label="Email ID"
              required
              type="email"
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
            <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
