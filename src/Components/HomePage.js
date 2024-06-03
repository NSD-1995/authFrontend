import React from "react";
import { Link } from "react-router-dom";
import "./homepage.css"
function HomePage() {
  return (
    <div className="Heading">
      <Link to="/signin">Sign In</Link>
      <Link to="/signup">Sign Up</Link>
    </div>
  );
}

export default HomePage;
