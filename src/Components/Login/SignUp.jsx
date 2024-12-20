import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../../Firebase/Firebase";
import { useState } from "react";

const auth = getAuth(app);

const SignUp = ({ onClose, openModal }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const SignUpUser = () => {
    setErrorMessage("");

    if (!email || !password || !confirmPassword) {
      setErrorMessage("All fields are required!");
      return;
    }

    const emailCheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailCheck.test(email)) {
      setErrorMessage("Invalid email address!");
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match!");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        setErrorMessage("Account created successfully!");
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          setErrorMessage("You already have an account with this email!");
        } else {
          setErrorMessage("Error: " + error.message);
        }
      });
  };

  // Consolidated styles with responsive design
  const styles = {
    modalContainer: {
      position: "fixed",
      top: "0",
      left: "0",
      right: "0",
      bottom: "0",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: "9999",
    },
    modalContent: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "100%",
      maxWidth: "400px",
      background: "#ffffff",
      borderRadius: "15px",
      boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
      padding: "30px 20px",
      textAlign: "center",
    },
    closeButton: {
      position: "absolute",
      top: "10px",
      right: "10px",
      border: "none",
      background: "none",
      fontSize: "18px",
      cursor: "pointer",
      color: "black",
    },
    input: {
      padding: "10px",
      margin: "10px",
      width: "80%",
      fontSize: "16px",
      border: "1px solid #ddd",
      borderRadius: "8px",
    },
    button: {
      padding: "10px",
      backgroundColor: "#009688",
      color: "#fff",
      border: "none",
      width: "80%",
      borderRadius: "8px",
      cursor: "pointer",
    },
    link: {
      marginTop: "15px",
      color: "#00796b",
      cursor: "pointer",
      textDecoration: "underline",
    },
    message: {
      color: "red",
    },
    mediaQueries: {
      '@media screen and (max-width: 1024px)': {
        modalContent: {
          maxWidth: "350px",
        },
        input: {
          width: "90%",
        },
        button: {
          width: "90%",
        },
      },
      '@media screen and (max-width: 768px)': {
        modalContent: {
          maxWidth: "300px",
        },
        input: {
          width: "100%",
        },
        button: {
          width: "100%",
        },
      },
    },
  };

  return (
    <div style={styles.modalContainer}>
      <div style={{ ...styles.modalContent, ...styles.mediaQueries["@media screen and (max-width: 1024px)"].modalContent }}>
        <button
          onClick={onClose}
          style={styles.closeButton}
        >
          &times;
        </button>

        <input
          style={styles.input}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
        <input
          style={styles.input}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
        />
        <input
          style={styles.input}
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm password"
        />
        {errorMessage && <p style={styles.message}>{errorMessage}</p>}
        <button
          onClick={SignUpUser}
          style={styles.button}
        >
          Sign Up
        </button>
        <p
          onClick={() => openModal("signin")}
          style={styles.link}
        >
          Already have an account? Sign In
        </p>
      </div>
    </div>
  );
};

export default SignUp;
