import React from 'react';

const FAQs = () => {
  return (
    <div>
      <style>
        {`
          .container {
            padding: 20px;
            font-family: 'Arial, sans-serif';
            background-color: #f9f9f9;
            width: 97%;
            margin: 0;
          }

          h1 {
            text-align: center;
            color: #333;
            margin-bottom: 20px;
          }

          .faq-item {
            margin-bottom: 15px;
            padding: 10px;
            background-color: #fff;
            border: 1px solid #ccc;
            border-radius: 5px;
          }

          .question {
            font-weight: bold;
            color: #009688;
            margin-bottom: 5px;
          }

          .answer {
            color: #555;
          }

          @media (max-width: 768px) {
            .container {
              padding: 15px;
            }

            h1 {
              font-size: 1.8rem;
              margin-bottom: 15px;
            }

            .faq-item {
              margin-bottom: 10px;
              padding: 8px;
            }

            .question {
              font-size: 1.1rem;
            }

            .answer {
              font-size: 0.95rem;
            }
          }

          @media (max-width: 480px) {
            .container {
              padding: 10px;
            }

            h1 {
              font-size: 1.5rem;
              margin-bottom: 10px;
            }

            .faq-item {
              margin-bottom: 8px;
              padding: 6px;
            }

            .question {
              font-size: 1rem;
            }

            .answer {
              font-size: 0.9rem;
            }
          }
        `}
      </style>
      
      <div className="container">
        <h1>Frequently Asked Questions</h1>

        <div className="faq-item">
          <h3 className="question">Q1: What products do you sell?</h3>
          <p className="answer">A1: At AG.Tech, we specialize in high-quality laptops, computer components, and tech accessories. We offer a range of products to suit both personal and business needs.</p>
        </div>

        <div className="faq-item">
          <h3 className="question">Q2: Do you offer international shipping?</h3>
          <p className="answer">A2: Currently, we mainly deliver within Pakistan. However, we are working on expanding our shipping options internationally. Stay tuned for updates!</p>
        </div>

        <div className="faq-item">
          <h3 className="question">Q3: How do I place an order?</h3>
          <p className="answer">A3: You can place an order directly on our website. Simply browse through our products, select the items you wish to purchase, and proceed to checkout. If you need help, feel free to contact us.</p>
        </div>

        <div className="faq-item">
          <h3 className="question">Q4: How can I contact customer support?</h3>
          <p className="answer">A4: You can reach our customer support team by calling us at +92 341-3198882, sending us a message via our website, or chatting with us online. We’re always here to assist you!</p>
        </div>

        <div className="faq-item">
          <h3 className="question">Q5: Do you offer warranties on your products?</h3>
          <p className="answer">A5: Yes, all our products come with a warranty. You can find detailed warranty information on the product pages. For any issues, feel free to contact us, and we will assist you with the warranty process.</p>
        </div>

        <div className="faq-item">
          <h3 className="question">Q7: Can I return an item?</h3>
          <p className="answer">A7: Yes, we accept returns within a specific time frame, as long as the product is in unused condition with its original packaging. For more details, please refer to our return policy.</p>
        </div>

        <div className="faq-item">
          <h3 className="question">Q8: Is there a warranty for the replacement of products?</h3>
          <p className="answer">A8: Yes, we offer a warranty on replacement products as well. Please refer to our Replacement & Warranty policy for more details.</p>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
