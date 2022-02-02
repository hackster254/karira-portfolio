import React, { useState } from 'react';
import styled from 'styled-components';

import emailJs from 'emailjs-com';

const FormStyle = styled.form`
  width: 100%;
  .form-group {
    width: 100%;
    margin-bottom: 2rem;
  }
  label {
    font-size: 1.8rem;
  }
  input,
  textarea {
    width: 100%;
    font-size: 2rem;
    padding: 1.2rem;
    color: var(--gray-1);
    background-color: var(--deep-dark);
    outline: none;
    border: none;
    border-radius: 8px;
    margin-top: 1rem;
  }
  textarea {
    min-height: 250px;
    resize: vertical;
  }
  button[type='submit'] {
    background-color: var(--gray-1);
    color: var(--black);
    font-size: 2rem;
    display: inline-block;
    outline: none;
    border: none;
    padding: 1rem 4rem;
    border-radius: 8px;
    cursor: pointer;
  }
`;

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [subject, setSubject] = useState('');

  const templateParams = {
    name,
    email,
    message,
    subject,
  };

  function sendEmail(e) {
    e.preventDefault();

    if (name !== '' && email !== '' && message !== '' && subject !== '') {
      emailJs
        .send(
          'service_clyal7z',
          'template_gyvwmk5',
          templateParams,
          'user_roPlmnJSbYJLsHxZprAzF'
        )
        .then(
          function (response) {
            console.log('SUCCESS!', response.status, response.text);
            response.status(400).send({ message: 'message sent' });
          },
          function (error) {
            console.log('FAILED...', error);
          }
        )
        .catch((err) => console.log(`cannot send${err}`));

      setEmail('');
      setName('');
      setSubject('');
      setMessage('');
    }
  }
  return (
    <>
      <FormStyle>
        <div className="form-group">
          <label htmlFor="name">
            Your Name
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="email">
            Your Email
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="email">
            Subject
            <input
              type="text"
              id="subject"
              name="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="message">
            Your message
            <textarea
              type="text"
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </label>
        </div>
        <button type="submit" onClick={sendEmail}>
          Send
        </button>
      </FormStyle>
    </>
  );
}
