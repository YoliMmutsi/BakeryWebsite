import React from "react";
import { BrowserRouter as Link } from "react-router-dom";

export const Navbar =() =>{
    return( 
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/">Home</Link>
        </li>
        <li className="navbar-item">
          <Link to="/aboutpage">About Us</Link>
        </li>
        <li className="navbar-item">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="navbar-item">
          <Link to="/menu">Menu</Link>
        </li>
      </ul>
    </nav>           
    );

};
export default Navbar;