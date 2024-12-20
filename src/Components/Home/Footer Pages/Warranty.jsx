import React, { useState, useEffect } from 'react';

const Warranty = () => {
  // State to store the window width
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Update the window width on resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Container Style
  const containerStyle = {
    padding: windowWidth <= 480 ? '10px' : windowWidth <= 768 ? '15px' : '20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f9f9f9',
    width: '100%',
    margin: '0',
  };

  // Title Style
  const titleStyle = {
    textAlign: 'center',
    color: '#333',
    marginBottom: windowWidth <= 480 ? '10px' : windowWidth <= 768 ? '15px' : '20px',
    fontSize: windowWidth <= 480 ? '20px' : windowWidth <= 768 ? '24px' : '28px',
  };

  // Paragraph Style
  const paragraphStyle = {
    color: '#555',
    lineHeight: '1.6',
    marginBottom: windowWidth <= 480 ? '10px' : '15px',
    fontSize: windowWidth <= 480 ? '14px' : windowWidth <= 768 ? '16px' : '18px',
  };

  // List Style
  const listStyle = {
    color: '#555',
    lineHeight: '1.6',
    marginLeft: windowWidth <= 480 ? '10px' : windowWidth <= 768 ? '15px' : '20px',
    fontSize: windowWidth <= 480 ? '12px' : windowWidth <= 768 ? '14px' : '16px',
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Warranty</h1>
      <p style={paragraphStyle}>
        <strong>Replacement and Warranty Policy</strong>
      </p>
      <p style={paragraphStyle}>
        At AG Tech, we want you to be happy with your purchase. If you face any problems with our products, we are here to help. Our <strong>Replacement and Warranty Policy</strong> covers defects or issues in the product. If the product qualifies, we will repair or replace it according to our terms.
      </p>
      <p style={paragraphStyle}>
        We are committed to making sure you have a smooth and reliable experience with us.
      </p>
      <ul style={listStyle}>
        <li>Warranty is valid for the specified period mentioned on the product page.</li>
        <li>The warranty covers manufacturing defects and hardware issues under normal usage.</li>
        <li>Products damaged due to misuse, accidents, or unauthorized modifications are not covered.</li>
        <li>To claim warranty, please provide proof of purchase and details of the defect.</li>
        <li>Replacement or repair decisions are at the discretion of AG Tech's support team.</li>
        <li>Shipping costs for warranty claims may apply, depending on the case.</li>
      </ul>
      <p style={paragraphStyle}>
        If you have any questions about our warranty policy or need assistance with a claim, please contact us at warranty@agtech.com. Our team is here to provide prompt support and ensure your satisfaction.
      </p>
    </div>
  );
};

export default Warranty;
