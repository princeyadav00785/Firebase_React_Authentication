import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../Firebase";
import { useNavigate } from "react-router-dom";
import "../Css/Home.css";

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        localStorage.removeItem("authToken");
        navigate("/login");
        console.log("Signed out successfully");
      })
      .catch((error) => {
        // An error happened.
        console.error("Logout error:", error);
      });
  };

  // Check if user is authenticated, otherwise redirect to login
  const storedToken = localStorage.getItem("authToken");
  if (!storedToken) {
    navigate("/login");
  }

  return (
    <>
      <nav>
        <p>Welcome Home</p>
        <div>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </nav>
    </>
  );
};

export default Home;
