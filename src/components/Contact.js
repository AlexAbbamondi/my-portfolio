import { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState(null);
  const sendEmail = (e) => {
    e.persist();
    e.preventDefault();
    setIsSubmitting(true);
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          setStateMessage('Message sent!');
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); // hide message after 5 seconds
        },
        (error) => {
          setStateMessage('Something went wrong, please try again later');
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); // hide message after 5 seconds
        }
      );

    // Clears the form after sending the email
    e.target.reset();
  };
  return (
    <section className="contact" id="Contact">
      <div className="contact-container">

        <div className="contact-flex-container">
          <div className="contact-text-container">
            <h2>Connect With Me!</h2>
            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>

          <div className="contect-form-container">
            <form onSubmit={sendEmail}>
              <h3>Contact Form</h3>
              <div className="input-field">
                <label htmlFor="name">Name</label>
                <input type="text" name="user_name" id="name" />
              </div>

              <div className="input-field">
                <label htmlFor="email">Email</label>
                <input type="email" name="user_email" id="email" />
              </div>

              <div className="input-field">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" />
              </div>

              <input type="submit" value="Send" id="Submit" disabled={isSubmitting} />
              {stateMessage && <p>{stateMessage}</p>}
            </form>
          </div>

        </div>






      </div>
    </section>
  );
}

export default Contact