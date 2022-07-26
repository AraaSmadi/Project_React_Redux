
import React, { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
export default function Nav() {
 const [log , setlog]= useState(false);
  return (
    <div>
        <nav className="navbar navbar-expand-lg " style={{ backgroundColor:" #ceb3cb" }}>
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">Flowers</NavLink>
                <button className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink className="nav-link" to="/add">Add Product</NavLink>
                    </li>


                    <li className="nav-item">
                        <NavLink className="nav-link" to="/login">Login</NavLink>
                    </li>



                </ul>
                </div>
            </div>
            
        </nav>
        <img src="m.jpg" alt=""  width="100%" />
         {/* <nav className="navbar navbar-expand-lg navbar-light " >
  <div className="container-fluid" style={{ textDecoration:" none" }}>
    <a className="navbar-brand" href="#" ></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
       
      
        <li className="nav-item nav-link">
        <NavLink    to="/Login">
        Login   </NavLink>
        </li>

            <li className="nav-item nav-link">
        <NavLink  to="/">Home</NavLink>
        </li>
        <li className="nav-item nav-link">
        <NavLink  to="/add">
              Add
            </NavLink>
        </li>
    
       

      </ul>
    </div>
  </div>
</nav> */}
    </div>
  );
}
