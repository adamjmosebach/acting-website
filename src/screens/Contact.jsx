import React, { useState, useEffect } from 'react';
import './Contact.css';
import emailjs from 'emailjs-com';

function Contact({ updateBannerNav, setCurrentPage }) {
  const [name, updateName] = useState('');
  const [email, updateEmail] = useState('');
  const [message, updateMessage] = useState('');
  const [reply, setReply] = useState(false);

  useEffect(() => {
    updateBannerNav(true);
    setCurrentPage('Contact');
    setReply(false);
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_8ybfrzs',
        'template_y4mhevf',
        e.target,
        'txKw-cNrodteK2L5h'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setReply(true);
  }

  if (reply) {
    return (
      <div className='contact-reply'>
        <h3>{`Thank you for your message, ${name.split(' ')[0]}!`}</h3>
        <h3>I will respond shortly!</h3>
        <h3>~Adam</h3>
      </div>
    );
  }

  return (
    <div className='contact-div'>
      <h1 className='contact-title'>Contact me</h1>
      <form className='contact-form' onSubmit={handleSubmit}>
        <div className='contact-label-and-input'>
          <label className='contact-label' htmlFor='contact-name'>
            Name:{' '}
          </label>
          <input
            id='contact-name'
            name='contact-name'
            className='contact-input'
            type='text'
            onChange={(e) => updateName(e.target.value)}
          />
        </div>
        <div className='contact-label-and-input'>
          <label className='contact-label' htmlFor='contact-email'>
            Email:{' '}
          </label>
          <input
            id='contact-email'
            name='contact-email'
            className='contact-input'
            type='email'
            onChange={(e) => updateEmail(e.target.value)}
          />
        </div>
        <div className='contact-label-and-input'>
          <label className='contact-label' htmlFor='contact-message'>
            Message:{' '}
          </label>
          <textarea
            id='contact-message'
            name='contact-message'
            className='contact-message'
            onChange={(e) => updateMessage(e.target.value)}
          />
        </div>
        <input type='submit' value='Submit' className='contact-submit-btn' />
      </form>
    </div>
  );
}

export default Contact;
