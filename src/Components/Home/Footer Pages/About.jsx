import React from 'react';

const About = () => {
  return (
    <div>
      <style>
        {`
          .container {
            padding: 20px;
            font-family: 'Arial, sans-serif';
            background-color: #f9f9f9;
            width: 100%;
            margin: 0;
          }

          h3 {
            text-align: center;
            color: #333;
            margin-bottom: 20px;
          }

          p {
            color: #555;
            line-height: 1.6;
          }

          @media (max-width: 768px) {
            .container {
              padding: 15px;
            }

            h3 {
              font-size: 1.8rem;
              margin-bottom: 15px;
            }

            p {
              font-size: 1rem;
              margin-bottom: 15px;
            }
          }

          @media (max-width: 480px) {
            .container {
              padding: 10px;
            }

            h3 {
              font-size: 1.5rem;
              margin-bottom: 10px;
            }

            p {
              font-size: 0.95rem;
              line-height: 1.5;
            }
          }
        `}
      </style>
      
      <div className="container">
        <h3>About Us</h3>
        <p>
          At AG.Tech, we are dedicated to providing the latest technology solutions to meet the needs of our customers. We specialize in high-quality laptops, components, and tech accessories. Our goal is to provide reliable and innovative products to help individuals and businesses grow. We are committed to offering great customer service and support, ensuring you have a smooth experience. Whether you need the latest tech or expert advice, our team is always ready to help. We believe in building long-term relationships with our customers based on trust and satisfaction. At AG.Tech, your tech needs are our top priority. Join us and experience the future of technology today!
        </p>
      </div>
    </div>
  );
};

export default About;
