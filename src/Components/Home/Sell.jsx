import React, { useState } from "react";

function Sell() {
  const [laptopModel, setLaptopModel] = useState("");
  const [laptopCondition, setLaptopCondition] = useState("");
  const [laptopPrice, setLaptopPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!laptopModel || !laptopCondition || !laptopPrice) {
      alert("Please fill in all fields.");
      return;
    }

    const whatsappMessage = encodeURIComponent(
      `Hello! I want to sell my laptop. \n\nModel: ${laptopModel} \nCondition: ${laptopCondition} \nPrice: ${laptopPrice}`
    );

    const whatsappLink = `https://wa.me/923157990734?text=${whatsappMessage}`;

    window.open(whatsappLink, "_blank");

    setLaptopModel("");
    setLaptopCondition("");
    setLaptopPrice("");
  };

  const sellStyle = {
    backgroundColor: "white",
    borderRadius: "10px",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
    width: "90%",
    maxWidth: "450px",
    padding: "20px",
    margin: "50px auto",
  };

  const headerStyle = {
    marginBottom: "20px",
    textAlign: "center",
  };

  const formGroupStyle = {
    marginBottom: "15px",
  };

  const labelStyle = {
    fontSize: "14px",
    color: "#666",
    marginBottom: "5px",
    display: "block",
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    border: "2px solid #ddd",
    borderRadius: "8px",
    fontSize: "14px",
    color: "#333",
    marginTop: "5px",
    transition: "border-color 0.3s ease",
  };

  const buttonStyle = {
    backgroundColor: "#009688",
    color: "white",
    padding: "10px",
    border: "none",
    borderRadius: "8px",
    fontSize: "14px",
    cursor: "pointer",
    transition: "background-color 0.3s ease, transform 0.3s ease",
    marginTop: "15px",
  };

  const buttonHoverStyle = {
    backgroundColor: "#009688",
  };

  const mobileStyle = {
    "@media screen and (max-width: 768px)": {
      width: "80%",
      padding: "15px",
    },
    "@media screen and (max-width: 480px)": {
      width: "100%",
      padding: "10px",
    },
  };

  return (
    <div style={{ ...sellStyle, ...mobileStyle }}>
      <header style={headerStyle}>
        <h1>Sell Your Laptop</h1>
        <form onSubmit={handleSubmit}>
          <div style={formGroupStyle}>
            <label htmlFor="model" style={labelStyle}>
              Laptop Model:
            </label>
            <input
              type="text"
              id="model"
              value={laptopModel}
              onChange={(e) => setLaptopModel(e.target.value)}
              placeholder="Enter laptop model"
              style={inputStyle}
            />
          </div>

          <div style={formGroupStyle}>
            <label htmlFor="condition" style={labelStyle}>
              Laptop Condition:
            </label>
            <input
              type="text"
              id="condition"
              value={laptopCondition}
              onChange={(e) => setLaptopCondition(e.target.value)}
              placeholder="Enter condition (e.g., new, used)"
              style={inputStyle}
            />
          </div>

          <div style={formGroupStyle}>
            <label htmlFor="price" style={labelStyle}>
              Price (in USD):
            </label>
            <input
              type="number"
              id="price"
              value={laptopPrice}
              onChange={(e) => setLaptopPrice(e.target.value)}
              placeholder="Enter price"
              style={inputStyle}
            />
          </div>

          <button
            type="submit"
            style={buttonStyle}
            onMouseOver={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
            onMouseOut={(e) => (e.target.style.backgroundColor = buttonStyle.backgroundColor)}
          >
            Submit & Contact on WhatsApp
          </button>
        </form>
      </header>
    </div>
  );
}

export default Sell;
