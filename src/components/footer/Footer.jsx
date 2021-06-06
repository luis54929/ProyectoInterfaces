import React from "react";
import { Link } from "react-router-dom";

export default function Footers() {
  return (
    <footer className="footer container">
      <hr size="0" class="rulerColor"></hr>
      <div className="row">
        <Link to="/Help" className="col" style={{ textDecoration: "none" }}>
          <h4 className="footer-txt-color">Help</h4>
        </Link>
        <Link to="/About" className="col" style={{ textDecoration: "none" }}>
          <h4 className="footer-txt-color">About</h4>
        </Link>
      </div>
    </footer>
  );
}
