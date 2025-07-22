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

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    try {
      setIsSubmitting(true);

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
    } catch (error) {
      console.error('Submission error:', error);
      alert('An error occurred while submitting the form. Please try again later.');
    } finally {
      setIsSubmitting(false);
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
          <div className={styles.imageWrapper}>
            <Image src={Contact.src} alt="Contact" fill />
          </div>
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
              placeholder="Enter Your Name"
              register={register('name', { required: 'Name is required' })}
              error={errors.name?.message}
            />

            <InputField
              label="Email ID"
              type="email"
              placeholder="Enter Your Email"
              register={register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Invalid email address',
                },
              })}
              error={errors.email?.message}
            />

            <InputField
              label="Phone Number"
              subLabel="Phone number with country or State Code"
              type="tel"
              placeholder="Enter Your Phone Number"
              register={register('phone', { required: 'Phone number is required' })}
              error={errors.phone?.message}
            />

            <InputField
              label="Message"
              isTextArea
              placeholder="Enter Your Message"
              maxWords={600}
              register={register('message', { required: 'Message is required' })}
              error={errors.message?.message}
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
