import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { app } from "./Firebase/Firebase"; 
import Header from "./Components/Home/Header";
import HomePage from "./Components/Home/HomePage";
import SignIn from "./Components/Login/SignIn";
import SignUp from "./Components/Login/SignUp";
import Footer from "./Components/Home/Footer Pages/Footer";
import Contact from "./Components/ContactForm/Contact";
import Laptop from "./Components/Laptop/Laptop";
import LaptopComponent from "./Components/LaptopComponents/Component";
import Sell from "./Components/Home/Sell";
import About from "./Components/Home/Footer Pages/About";
import FAQs from "./Components/Home/Footer Pages/FAQs";
import Policy from "./Components/Home/Footer Pages/Policy";
import Warranty from "./Components/Home/Footer Pages/Warranty";
const auth = getAuth(app);

export const key = () => {
  return "iuVVQ0wlJ9zHS2hna-zaAJkflxAxYX-TaYqknluuftJNcXBzhY";
};


function App() {
  
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [modalType, setModalType] = useState(""); 
  const [user, setUser] = useState(null); 

     useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); 
    });

    return () => unsubscribe(); // Clean up listener on unmount
  }, []);

const openModal = (type) => {
    setModalType(type);
    setIsModalOpen(true); 
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalType(""); 
  };



  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log("User signed out");
        setUser(null); 
      })
      .catch((error) => {
        console.error("Error signing out:", error);
      });
  };




  return (
    <div> 
      <Header user={user} onLogout={handleLogout} openModal={openModal} />
      <Routes>
        <Route path="/" element={<HomePage openModal={openModal} />} />

        { <Route path="/laptop" element={<Laptop openModal={openModal} />} /> }
        { <Route path="/component" element={<LaptopComponent openModal={openModal} />}/>}
        { <Route path="/sell" element={<Sell/>}/>}
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="warranty" element={<Warranty/>}/>

        </Routes>

      {/* Render Modals Conditionally */}
      {isModalOpen && modalType === "signin" && (
        <SignIn onClose={closeModal} openModal={openModal} />
      )}
      {isModalOpen && modalType === "signup" && (
        <SignUp onClose={closeModal} openModal={openModal} />
      )}

  <Footer />
      
   </div>
  );
}

export default App;
