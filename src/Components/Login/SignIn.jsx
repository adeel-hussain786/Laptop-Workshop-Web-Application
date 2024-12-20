import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { app } from '../../Firebase/Firebase';

const auth = getAuth(app);

const SignIn = ({ onClose, openModal }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const emailCheck = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleSignIn = () => {
    setErrorMessage("");
    setSuccessMessage("");

    if (!email || !password) {
      setErrorMessage("Both email and password are required.");
      return;
    }

    if (!emailCheck.test(email)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        setSuccessMessage("You have signed in successfully!");
        setTimeout(onClose, 2000);
      })
      .catch((error) => {
        const errorMessages = {
          'auth/user-not-found': "No user found with this email.",
          'auth/wrong-password': "Incorrect password. Please try again.",
          'auth/invalid-email': "Invalid email address.",
          'auth/user-disabled': "This account is disabled. Please contact support.",
        };
        setErrorMessage(errorMessages[error.code] || "An error occurred. Please try again.");
      });
  };

  const handleForgotPassword = () => {
    setErrorMessage("");
    setSuccessMessage("");

    if (!email) {
      setErrorMessage("Please enter your email to reset your password.");
      return;
    }

    if (!emailCheck.test(email)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    sendPasswordResetEmail(auth, email)
      .then(() => {
        setSuccessMessage("Password reset link sent! Check your email.");
        setIsForgotPassword(false);
      })
      .catch(() => {
        setErrorMessage("Failed to send password reset email. Try again.");
      });
  };

  // Consolidated styles
  const styles = {
    modalContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 999,
    },
    modalContent: {
      backgroundColor: '#fff',
      padding: '30px 20px',
      borderRadius: '15px',
      boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
      width: '100%',
      maxWidth: '400px', // Adjusted for better mobile support
      textAlign: 'center',
      position: 'relative',
    },
    input: {
      width: '80%',
      padding: '10px',
      border: '1px solid #ddd',
      borderRadius: '8px',
      marginBottom: '1px',
      fontSize: '16px',
    },
    button: {
      width: '100%',
      maxWidth: '150px',
      height: '45px',
      backgroundColor: '#009688',
      border: 'none',
      borderRadius: '25px',
      color: '#fff',
      fontSize: '16px',
      cursor: 'pointer',
      marginBottom: '15px',
      transition: 'background-color 0.3s ease',
    },
    link: {
      color: '#00796b',
      textDecoration: 'underline',
      fontSize: '14px',
      cursor: 'pointer',
      marginTop: '10px',
      display: 'block',
    },
    closeButton: {
      position: 'absolute',
      top: '10px',
      right: '10px',
      background: 'none',
      border: 'none',
      fontSize: '20px',
      cursor: 'pointer',
      color: '#555',
    },
    message: (type) => ({
      color: type === "error" ? 'red' : 'green',
      marginBottom: '10px',
    }),
  };

  // Media Queries for Responsiveness
  const mediaQueries = {
    '@media screen and (max-width: 1024px)': {
      modalContent: {
        maxWidth: '350px', // Smaller width on tablet-sized screens
      },
      input: {
        width: '90%',
      },
      button: {
        maxWidth: '100%',
      },
    },
    '@media screen and (max-width: 768px)': {
      modalContent: {
        maxWidth: '300px', // Further reducing width on mobile screens
      },
      input: {
        width: '100%',
      },
    },
  };

  return (
    <div style={styles.modalContainer}>
      <div style={{ ...styles.modalContent, ...mediaQueries["@media screen and (max-width: 1024px)"].modalContent }}>
        <button style={styles.closeButton} onClick={onClose}>&times;</button>

        {/* Error and Success Messages */}
        {errorMessage && <div style={styles.message("error")}>{errorMessage}</div>}
        {successMessage && <div style={styles.message("success")}>{successMessage}</div>}

        {/* SignIn or Forgot Password Form */}
        {!isForgotPassword ? (
          <>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ ...styles.input, ...mediaQueries["@media screen and (max-width: 1024px)"].input }}
            />
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ ...styles.input, ...mediaQueries["@media screen and (max-width: 1024px)"].input }}
            />
            <button
              style={{ ...styles.button, ...mediaQueries["@media screen and (max-width: 1024px)"].button }}
              onClick={handleSignIn}
            >
              Sign In
            </button>
            <a style={styles.link} onClick={() => setIsForgotPassword(true)}>Forgot Password?</a>
          </>
        ) : (
          <>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ ...styles.input, ...mediaQueries["@media screen and (max-width: 1024px)"].input }}
            />
            <button
              style={{ ...styles.button, ...mediaQueries["@media screen and (max-width: 1024px)"].button }}
              onClick={handleForgotPassword}
            >
              Send Reset Link
            </button>
            <a style={styles.link} onClick={() => setIsForgotPassword(false)}>Back to Sign In</a>
          </>
        )}

        {/* SignUp link */}
        <a style={styles.link} onClick={() => openModal("signup")}>Don't have an account? Sign Up</a>
      </div>
    </div>
  );
};

export default SignIn;
