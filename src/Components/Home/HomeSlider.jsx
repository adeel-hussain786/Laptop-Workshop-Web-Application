import React from 'react'
import Slider from "react-slick";
import './HomeSlider.css';
const HomeSlider = ({ openModal}) => {

     var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };


   var Featuresetting={
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 10,
        slidesToScroll: 1,
        fade: false,
        arrows:true
      };


 return (
    <header>

<section className="homeSlider">
    <Slider {...settings} className="homeSlider_main">
      <div className="slider-item">
        <div className="slider-content">
          <img 
            alt="Slider1" 
            src="SliderImage/Slider1.jpg"
            className="slider-image"
          />
          <div className="slider-text">
            <h2>Delivery At Home</h2>
            <p>Your laptop delivered straight to your doorstep!</p>
          </div>
        </div>
      </div>

      <div className="slider-item">
        <div className="slider-content">
          <img 
            alt="Slider2" 
            src="SliderImage/harddrive.jpg"
            className="slider-image"
          />
          <div className="slider-text">
            <h2>Product Quality</h2>
            <p>Only the best quality laptops and components for you!</p>
          </div>
        </div>
      </div>

      <div className="slider-item">
        <div className="slider-content">
          <img 
            alt="Slider3" 
      src="SliderImage/slider33.jpg"
            className="slider-image"
          />
          <div className="slider-text">
            <h2>Fast Service</h2>
            <p>Get your laptop delivered on time with safety and convenience.</p>
          </div>
        </div>
      </div>
    </Slider>
  </section>


 <br></br> <br></br>


    <div className="Featured_Categories">
        <h2 className="hd"> Featured Categories </h2>
        
       <Slider {...Featuresetting}>

      <div className="item">
        <img alt="items" src="SliderImage/hp-pavilion 1.png"></img>
        HP Pavilion
  </div>

  <div className="item">
        <img alt="items" src="SliderImage/hp victus 2.png"></img>
      HP Victus
  </div>

  <div className="item"> 
        <img alt="items" src="SliderImage/lenovo ideapad 3.png"></img>
  Lenovo Ideapad
  </div>

  <div className="item">
        <img alt="items" src="SliderImage/dell latitude 4.png"></img>
  Dell Latitude
  </div>

  <div className="item"> 
        <img alt="items" src="SliderImage/apple-macbook.png"></img>
  Apple MacBook
  </div>

  <div className="item"> 
        <img alt="items" src="SliderImage/hp-pro 6.png"></img>
  HP ProBook
  </div>

  <div className="item"> 
        <img alt="items" src="SliderImage/Mouse.png"></img>
        Wireless Mouse
  </div>

  <div className="item">
        <img alt="items" src="SliderImage/Keyboard.jpg"></img>
        Laptop Keyboard
  </div>

  <div className="item">
        <img alt="items" src="SliderImage/Motherboard.jpg"></img>
        Motherboard
        </div>

  <div className="item">
        <img alt="items" src="SliderImage/Harddisk.jpg"></img>
        Hard Disk
  </div>
  </Slider>
      </div>


   <div className="promo-section">
    {/* First Item */}
    <div className="promo-item">
      <img 
        alt="Laptops" 
        src="SliderImage/promoSection1.jpg" 
        className="promo-image"
      />
      <div className="promo-text">
        <h2>LAPTOPS</h2>
        <p>Buy Quality Product</p>
        <button onClick={() => openModal("signup")} className="promo-button">Sign Up</button>
      </div>
    </div>

    {/* Second Item */}
    <div className="promo-item">
      <img 
        alt="Components" 
        src="SliderImage/harddrive.jpg"
        className="promo-image"
      />
      <div className="promo-text">
        <h2>COMPONENTS</h2>
        <p>Buy Quality Components</p>
        <button onClick={() => openModal("signin")} className="promo-button">Sign In</button>
      </div>
    </div>
  </div>
</header>
  )
}

export default HomeSlider