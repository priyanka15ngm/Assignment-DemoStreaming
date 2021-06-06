
import React from "react";
import ser from "./ser.jpeg";
import mov from "./mov.jpeg";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <ul className="nav navbar-nav">
          
          <li className="nav-item">
            <a href="/Series" className="nav-link" exact>
            <img src = {ser} alt="series image" height ={200}/>
            </a>
          </li>
          <li className="nav-item">
            <a href="/Movies" className="nav-link" exact>
            <img src = {mov} alt="movies image" height ={200}/>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}