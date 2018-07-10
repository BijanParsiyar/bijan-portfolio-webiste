import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <div className="w3-top">
      <div className="w3-bar w3-white w3-wide w3-padding w3-card">
        <Link to="/" className="w3-bar-item w3-button">
          <b>Bijan Parsiyar</b> Software Developer
        </Link>
        {/* <!-- Float links to the right. Hide them on small screens --> */}
        <div className="w3-right w3-hide-small">
          <Link to="/about" className="w3-bar-item w3-button">
            About
          </Link>
          <Link to="/blog" className="w3-bar-item w3-button">
            Blog
          </Link>
          <Link to="/projects" className="w3-bar-item w3-button">
            Projects
          </Link>
        </div>
      </div>
    </div>
  );
};
