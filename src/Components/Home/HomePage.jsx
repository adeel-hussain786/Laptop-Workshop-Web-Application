import React from 'react';
import HomeSlider from "./HomeSlider";
import Laptop from '../Laptop/Laptop';
import Component from '../LaptopComponents/Component';

const HomePage = ({ openModal }) => {
  return (
    <div>
      {/* Home Slider */}
      <HomeSlider openModal={openModal} /> 

      <br />

      {/* Display Laptops */}
      <section className="homeProduct">
        <h2 style={{ textAlign: "left", marginBottom: "20px"  }}>Top Products</h2>
      
        <Laptop
          openModal={openModal}
          searchQuery="laptop"
          limit={3} 
          />
          <Component
          openModal={openModal}
          searchQuery="laptop-component"
          limit={3}
        />
      </section>

      <br />


      <br />

      {/* Footer Section */}
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <div className="footer-box">
          <img alt="delivery" src="SliderImage/best-offer.png" />
          <h4>Best Price & Offers</h4>
        </div>
        <div className="footer-box">
          <img alt="delivery" src="SliderImage/free-delivery .png" />
          <h4>Free Delivery</h4>
        </div>
        <div className="footer-box">
          <img alt="delivery" src="SliderImage/return .png" />
          <h4>Easy Return</h4>
        </div>
        <div className="footer-box">
          <img alt="delivery" src="SliderImage/best-offer.png" />
          <h4>Best Price & Offers</h4>
        </div>
      </div>
      <br />
    </div>
  );
};

export default HomePage;
