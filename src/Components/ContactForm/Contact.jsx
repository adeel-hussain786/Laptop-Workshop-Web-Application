import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';
import './Contact.css'; 

const Contact = () => {
  const locations = [
    {
      city: "MITHI (THARPARKAR)",
      address: (
        <strong>
          ReBoot HUB Mithi, Tharparkar, Sindh
        </strong>
      ),
      email: "mithi@reboothub.pk",
      phone: "+92341-3198882",
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28268.254389471343!2d69.8064837!3d24.730806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393a4b74c8c1f8e7%3A0x90cb38134f4d20bb!2sMithi!5e0!3m2!1sen!2s!4v1683614061259!5m2!1sen!2s",
    },
    {
      city: "TANDO ALLAHYAR",
      address: (
        <strong>
          ReBoot HUB Jarwar Market, Tando Allahyar, Sindh
        </strong>
      ),
      email: "tandoallahyar@reboothub.pk",
      phone: "+92324-1356336",
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28296.117358729053!2d68.7230009!3d25.4642008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393c3c18677de7d5%3A0x31a7d5cb6df5c879!2sTando%20Allahyar!5e0!3m2!1sen!2s!4v1683614112234!5m2!1sen!2s",
    },
    {
      city: "MIRPURKHAS",
      address: (
        <strong>
          ReBoot HUB Baldiya Market, Mirpurkhas, Sindh
        </strong>
      ),
      email: "mirpurkhas@reboothub.pk",
      phone: "+92346-8097360",
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28280.151570817015!2d69.0047852!3d25.530377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393a9d4a45369b33%3A0xd7bd58a9cfe55a6b!2sMirpurkhas!5e0!3m2!1sen!2s!4v1683614144225!5m2!1sen!2s",
    },
  ];

  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Us</h1>
      <div className="contact-grid">
        {locations.map((location, index) => (
          <div className="contact-card" key={index}>
            <h2 className="contact-city">{location.city}</h2>
            <p className="contact-detail">
              <FaMapMarkerAlt className="icon" />
              <strong>Address:</strong> {location.address}
            </p>
            <p className="contact-detail">
              <FaEnvelope className="icon" />
              <strong>Email:</strong>{' '}
              <a href={`mailto:${location.email}`} className="link">
                {location.email}
              </a>
            </p>
            <p className="contact-detail">
              <FaPhone className="icon" />
              <strong>Phone:</strong>{' '}
              <a href={`tel:${location.phone}`} className="link">
                {location.phone}
              </a>
            </p>
            <iframe
              src={location.mapSrc}
              className="map"
              allowFullScreen=""
              loading="lazy"
              title={`Map of ${location.city}`}
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
