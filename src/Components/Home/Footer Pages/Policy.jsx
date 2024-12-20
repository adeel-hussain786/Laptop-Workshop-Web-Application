import React, { useState, useEffect } from 'react';

const Policy = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const containerStyle = {
    padding: windowWidth <= 480 ? '10px' : windowWidth <= 768 ? '15px' : '20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f9f9f9',
    width: '100%',
    margin: '0',
  };

  const titleStyle = {
    textAlign: 'center',
    color: '#333',
    marginBottom: windowWidth <= 480 ? '10px' : windowWidth <= 768 ? '15px' : '20px',
    fontSize: windowWidth <= 480 ? '20px' : windowWidth <= 768 ? '24px' : '28px',
  };

  const paragraphStyle = {
    color: '#555',
    lineHeight: '1.6',
    marginBottom: windowWidth <= 480 ? '10px' : '15px',
    fontSize: windowWidth <= 480 ? '14px' : windowWidth <= 768 ? '16px' : '18px',
  };

  const listStyle = {
    color: '#555',
    lineHeight: '1.6',
    marginLeft: windowWidth <= 480 ? '10px' : windowWidth <= 768 ? '15px' : '20px',
    fontSize: windowWidth <= 480 ? '12px' : windowWidth <= 768 ? '14px' : '16px',
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Privacy Policy</h1>
      <p style={paragraphStyle}>
        At AG.Tech, we respect your privacy and work hard to protect your personal information. We only collect data to process your orders, improve your experience, and provide support. Your information is never shared with unauthorized parties.
      </p>
      <p style={paragraphStyle}>
        We use secure methods to keep your data safe and give you control over your information. If you have any questions or concerns, feel free to contact us at privacy@agtech.com.
      </p>
      <ul style={listStyle}>
        <li>We collect only necessary information for order processing and support.</li>
        <li>Your data is stored securely using advanced encryption methods.</li>
        <li>You have the right to access, modify, or delete your personal information.</li>
        <li>We do not share your data with unauthorized third parties.</li>
        <li>Our website uses cookies to enhance user experience and analyze traffic.</li>
        <li>Contact us anytime at privacy@agtech.com for privacy-related inquiries.</li>
      </ul>
    </div>
  );
};

export default Policy;
