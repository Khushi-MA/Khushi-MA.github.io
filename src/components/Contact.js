import React from 'react';
import './Contact.css'; // Assuming you have CSS for styling

const ContactSection = () => {
  return (
    <section className="contact-section">
      <h2 className="section-title">Contact Me</h2>
      <div className="contact-content">
        {/* LinkedIn Badge */}
        <div
          className="badge-base LI-profile-badge"
          data-locale="en_US"
          data-size="medium"
          data-theme="light"
          data-type="VERTICAL"
          data-vanity="khushi-appannavar"
          data-version="v1"
        >
          <a
            className="badge-base__link LI-simple-link"
            href="https://in.linkedin.com/in/khushi-appannavar?trk=profile-badge"
          >
            Khushi M Appannavar
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
