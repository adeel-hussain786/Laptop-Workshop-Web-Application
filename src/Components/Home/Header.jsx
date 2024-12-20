import React, { useState, useEffect, useRef } from "react";
import "./Header.css";
import { key } from "../../App";

const Header = ({ openModal, user, onLogout }) => {
  const [search, setSearch] = useState(""); 
  const [searchResults, setSearchResults] = useState([]); 
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState(null); 
  const [accountOpen, setAccountOpen] = useState(false);
  const accountRef = useRef(null);
  const apiKey = key();
  console.log("API Key:", apiKey);

  // Fetch data from API
  const fetchData = async (query) => {
    if (!query) return;

    setLoading(true);
    setError(null);

    const myHeaders = new Headers();
    myHeaders.append("x-apihub-key", apiKey);
    myHeaders.append("x-apihub-host", "Real-Time-Amazon-Data.allthingsdev.co");
    myHeaders.append("x-apihub-endpoint", "41654d76-eaf5-4690-9d46-d88b1665322e");

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    const url = `https://Real-Time-Amazon-Data.proxy-production.allthingsdev.co/v2/search?query=${search}&page=1&country=US&sort_by=RELEVANCE&product_condition=ALL&category_id=null&min_price=105&max_price=110`;

    try {
      const response = await fetch(url, requestOptions);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      if (data?.data?.products && data.data.products.length > 0) {
        setSearchResults(data.data.products);
      } else {
        setError("No products found.");
        setSearchResults([]);
      }
    } catch (err) {
      setError(`Failed to fetch data: ${err.message}`);
      setSearchResults([]);
    } finally {
      setLoading(false);
    }
  };

  // Handle input change
  const handleChange = (e) => {
    const value = e.target.value;
    setSearch(value);

    // Trigger search with debounce
    if (value) {
      const debounceTimeout = setTimeout(() => {
        fetchData(value);
      }, 500); 
      return () => clearTimeout(debounceTimeout); 
    }
  };

  // Close account dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (accountRef.current && !accountRef.current.contains(event.target)) {
        setAccountOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Toggle account dropdown
  const handleAccountClick = () => {
    setAccountOpen((prevState) => !prevState);
  };

  return (
    <header className="header">
      <div className="top-bar">
        <div className="logo-container">
          <img
            src="/HeaderImage/Company4.png"
            alt="Company Logo"
            className="logo"
          />
          <span className="company-name">AG Tech</span>
        </div>

        {/* Search */}
        <div className="search-container">
          <input
            placeholder="Search entire store here..."
            value={search}
            onChange={handleChange}
            className="search-input"
          />
        </div>

        {/* Navigation Links */}
        <div className="nav-links">
          {/* My Account */}
          <div
            className="nav-item"
            onClick={handleAccountClick}
            ref={accountRef}
          >
            <img
              src="/HeaderImage/user.png"
              alt="My Account"
              className="nav-icon"
            />
            My Account
            {accountOpen && !user && (
              <div className="account-dropdown">
                <ul>
                  <li onClick={() => openModal("signup")}>Sign Up</li>
                  <li onClick={() => openModal("signin")}>Sign In</li>
                </ul>
              </div>
            )}
            {user && (
              <div className="account-dropdown">
                <ul>
                  <li onClick={onLogout}>Logout</li>
                </ul>
              </div>
            )}
          </div>

          {/* Wish List */}
          <div className="nav-item coming-soon">
            <img
              src="/HeaderImage/wishList.svg"
              alt="My Wish List"
              className="nav-icon"
            />
            My Wish List
            <span className="coming-soon-text">Coming Soon</span>
          </div>

          {/* Cart */}
          <div className="nav-item coming-soon">
            <img
              src="/HeaderImage/cart.svg"
              alt="My Cart"
              className="nav-icon"
            />
            My Cart
            <span className="coming-soon-text">Coming Soon</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="main-nav">
        <a href="/">Home</a>
        <a href="/laptop">Laptop</a>
        <a href="/component">Component</a>
        <a href="/sell">Sell</a>
        <a href="/contact">Contact Us</a>
      </nav>

      {/* Product Search Results */}
      {search && searchResults.length > 0 && !loading && (
        <div className="search-results" style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
          <h3 style={{ textAlign: "center", marginBottom: "20px" }}>Search Results</h3>
          <div
            className="results-grid"
            style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}
          >
            {searchResults.map((item) => (
              <div
                key={item.asin}
                className="product-card"
                style={{
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  padding: "10px",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                  textAlign: "center",
                }}
              >
                <img
                  src={item.product_photo}
                  alt={item.product_title}
                  style={{ width: "100%", height: "200px", objectFit: "cover" }}
                />
                <h4 style={{ fontSize: "16px", margin: "10px 0" }}>{item.product_title}</h4>
                <p style={{ color: "#333", fontWeight: "bold" }}>{item.product_price}</p>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  {item.product_star_rating} stars ({item.product_num_ratings} reviews)
                </p>

                {/* Conditional Rendering: Check if user is authenticated */}
                {user ? ( 
                  <a
                    href={item.product_url || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-block",
                      marginTop: "10px",
                      padding: "8px 12px",
                      backgroundColor: "#007bff",
                      color: "#fff",
                      textDecoration: "none",
                      borderRadius: "4px",
                    }}
                  >
                    Now Buy Product
                  </a>
                ) : (
                  <button
                    onClick={() => openModal("signup")}
                    style={{
                      display: "inline-block",
                      marginTop: "10px",
                      padding: "8px 12px",
                      backgroundColor: "#009688",
                      color: "#fff",
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer",
                    }}
                  >
                    Create Account to Buy Product
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {loading && <p>Loading...</p>}
      {error && <p className="error-message">{error}</p>}
    </header>
  );
};

export default Header;
