import React from 'react';
import './Contact.css';

const ContactSection = () => {
  return (
    <section className="contact-section">
      <h1 className="section-title">Contact Me</h1>
      <div className="contact-form">
        {/* Left Section: Message Body */}
        <div className="form-left">
          <input
            type="text"
            placeholder="Your Full Name"
            className="input-field"
          />
          <input
            type="email"
            placeholder="Your Email Address"
            className="input-field"
          />
          <input
            type="text"
            placeholder="Subject"
            className="input-field"
          />
        </div>


        {/* Right Section: Input Fields */}
        <div className="form-right">
          <textarea
            placeholder="Write your message here..."
            className="message-body"
            rows="8"
          ></textarea>
        </div>

      </div>

      {/* Social Media Buttons */}
      <div className="social-links">
        {/* LinkedIn Button */}
        <a
          href="https://linkedin.com/in/khushi-appannavar"
          target="_blank"
          rel="noopener noreferrer"
          className="button linkedin"
          title="LinkedIn"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            width="24"
          >
            <path
              fill="currentColor"
              d="M19 0H5C2.2 0 0 2.2 0 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5V5c0-2.8-2.2-5-5-5ZM7.2 19H4V9h3.2v10ZM5.6 7.6c-1 0-1.6-.7-1.6-1.6 0-1 .7-1.6 1.6-1.6s1.6.7 1.6 1.6-.7 1.6-1.6 1.6Zm13.4 11.4h-3.2v-4.8c0-1.2-.8-1.4-1-1.4-1.2 0-1.6.8-1.6 1.4V19h-3.2V9h3.2v1.4c.4-.6 1.2-1.4 2.6-1.4 1.8 0 3.2 1.2 3.2 3.8V19Z"
            ></path>
          </svg>
        </a>

        {/* GitHub Button */}
        <a
          href="https://github.com/Khushi-MA"
          target="_blank"
          rel="noopener noreferrer"
          className="button github"
          title="GitHub"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            width="24"
          >
            <path
              fill="currentColor"
              d="M12 1C5.3 1 0 6.3 0 13c0 5.3 3.4 9.8 8.2 11.4.6.1.8-.2.8-.6 0-.3 0-1-.1-1.9C5.8 22 5 19.9 5 19.9c-.5-1.2-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1.9 1.6 2.4 1.1 3 .9.1-.6.3-1.1.5-1.3-2.5-.3-5.1-1.3-5.1-5.8 0-1.3.5-2.3 1.2-3.2 0-.3-.5-1.3.1-2.6 0 0 1-.3 3.3 1.2.9-.2 1.8-.4 2.7-.4.9 0 1.8.1 2.7.4 2.2-1.6 3.3-1.2 3.3-1.2.6 1.3.1 2.3.1 2.6.8.9 1.2 1.9 1.2 3.2 0 4.5-2.6 5.5-5.1 5.8.3.3.5.8.5 1.6 0 1.1-.1 2.1-.1 2.4 0 .4.2.7.8.6C20.6 22.8 24 18.3 24 13c0-6.7-5.3-12-12-12Z"
            ></path>
          </svg>
        </a>

        {/* Instagram Blog Button */}
        <a
          href="https://www.instagram.com/khush_alright/"
          target="_blank"
          rel="noopener noreferrer"
          className="button instagram-blog"
          title="Blog Instagram"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            width="24"
          >
            <path
              fill="currentColor"
              d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5ZM12 7.25a4.75 4.75 0 1 1 0 9.5 4.75 4.75 0 0 1 0-9.5Zm0 1.5a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5Zm5.5-2a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1 0-1.5h1Z"
            ></path>
          </svg>
        </a>





        {/* ORCiD Button */}
<a
  href="https://orcid.org/0009-0000-0538-593X"
  target="_blank"
  rel="noopener noreferrer"
  className="button orcid"
  title="ORCiD"
>
  <svg
    viewBox="0 0 256 256"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    height="24"
    width="24"
  >
    <path
      fill="currentColor"
      d="M128 0C57.308 0 0 57.308 0 128s57.308 128 128 128 128-57.308 128-128S198.692 0 128 0Zm0 238.933C66.394 238.933 17.067 189.606 17.067 128 17.067 66.394 66.394 17.067 128 17.067 189.606 17.067 238.933 66.394 238.933 128 238.933 189.606 189.606 238.933 128 238.933ZM96.533 86.4v83.2c0 7.294-5.906 13.067-13.067 13.067s-13.067-5.773-13.067-13.067V86.4c0-7.294 5.906-13.067 13.067-13.067s13.067 5.773 13.067 13.067Zm42.666 41.6c-7.447 0-13.333-5.867-13.333-13.333s5.867-13.333 13.333-13.333 13.333 5.867 13.333 13.333-5.867 13.333-13.333 13.333Zm0-54.4c-22.927 0-41.6 18.64-41.6 41.6s18.64 41.6 41.6 41.6 41.6-18.64 41.6-41.6-18.64-41.6-41.6-41.6Z"
    ></path>
  </svg>
</a>

      </div>
    </section>

  );
};

export default ContactSection;
