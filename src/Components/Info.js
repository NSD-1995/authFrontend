import React from "react";
import { Link } from "react-router-dom";
import "./Info.css";

function Info() {
  return (
    <div className="info-container">
      <div className="Logout">
        <Link to="/" className="logout-link">
          Logout
        </Link>
      </div>
      <div className="Headertext">Hi, Welcome to the Application</div>
    </div>
  );
}

export default Info;
