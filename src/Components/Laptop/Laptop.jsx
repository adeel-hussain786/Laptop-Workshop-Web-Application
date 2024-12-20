import React, { useState, useEffect, useCallback } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { app } from '../../Firebase/Firebase';
import { key } from "../../App";

const auth = getAuth(app);

const Laptop = ({ openModal, limit }) => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1); 
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(false); 
  const [windowWidth, setWindowWidth] = useState(window.innerWidth); // Track window width
  const apikey = key();

  // Fetch data from API
  const fetchLaptopData = useCallback(async () => {
    setLoading(true);
    setError(null);

    const myHeaders = new Headers();
    myHeaders.append("x-apihub-key", apikey);
    myHeaders.append("x-apihub-host", "Real-Time-Amazon-Data.allthingsdev.co");
    myHeaders.append("x-apihub-endpoint", "41654d76-eaf5-4690-9d46-d88b1665322e");

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow"
    };

    const url = `https://Real-Time-Amazon-Data.proxy-production.allthingsdev.co/v2/search?query=laptop&page=${page}&country=US&sort_by=RELEVANCE&product_condition=ALL&category_id=null&min_price=105&max_price=110`;

    try {
      const response = await fetch(url, requestOptions);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      if (data?.data?.products && data.data.products.length > 0) {
        setProducts((prevProducts) => [...prevProducts, ...data.data.products]);
      } else {
        setError("No laptop products found.");
      }
    } catch (err) {
      setError(`Failed to fetch data: ${err.message}`);
    } finally {
      setLoading(false);
    }
  }, [page, apikey]); 

  useEffect(() => {
    fetchLaptopData();
  }, [fetchLaptopData]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsUserAuthenticated(!!user); 
    });

    return () => unsubscribe(); 
  }, []);

  // Handle window resizing for media query effect
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Determine styles based on window width
  const productGridStyle = {
    display: "grid",
    gridTemplateColumns: windowWidth <= 480 ? "1fr" : windowWidth <= 768 ? "repeat(2, 1fr)" : "repeat(3, 1fr)",
    gap: "20px",
  };

  const productCardStyle = {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: windowWidth <= 480 ? "5px" : "10px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  };

  const imgStyle = {
    width: "100%",
    height: windowWidth <= 480 ? "150px" : "200px",
    objectFit: "cover",
  };

  const buttonStyle = {
    display: "inline-block",
    marginTop: "10px",
    padding: "8px 12px",
    backgroundColor: "#009688",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  };

  const loadMoreButtonStyle = {
    marginTop: "20px",
    textAlign: "center",
  };

  // Limit the displayed products
  const displayedProducts = limit ? products.slice(0, limit) : products;

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>{limit ? "" : "All Laptop Products"}</h1>

      {loading && <p>Loading...</p>}

      {error && (
        <div style={{ marginTop: "20px", color: "red" }}>
          <h3>Error:</h3>
          <pre>{error}</pre>
        </div>
      )}

      <div style={{ marginTop: "20px" }}>
        {!loading && displayedProducts.length > 0 && (
          <div style={productGridStyle}>
            {displayedProducts.map((product) => (
              <div key={product.asin} style={productCardStyle}>
                <img
                  src={product.product_photo}
                  alt={product.product_title}
                  style={imgStyle}
                />
                <h3 style={{ fontSize: "16px", margin: "10px 0" }}>{product.product_title}</h3>
                <p style={{ color: "#333", fontWeight: "bold" }}>{product.product_price}</p>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  {product.product_star_rating} stars ({product.product_num_ratings} reviews)
                </p>

                {isUserAuthenticated ? (
                  <a
                    href={product.product_url || "#"}
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
                    View Product
                  </a>
                ) : (
                  <button
                    onClick={() => openModal("signup")}
                    style={buttonStyle}
                  >
                    Create Account to View Product
                  </button>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {!limit && (
        <div style={loadMoreButtonStyle}>
          <button onClick={() => setPage((prevPage) => prevPage + 1)} disabled={loading}>
            {loading ? "Loading More..." : "Load More"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Laptop;
