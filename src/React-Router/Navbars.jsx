import React from "react";
import { NavLink } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import "./Routerss.css"; 

const Navbars = () => {
  return (
    <>

      <div className="navheader">
        <nav className="navbar navbar-expand-lg navbar-light bg-primary"> 
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button><hr style={{color:"black"}} />
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <NavLink style={{color:"white"}} className="nav-link" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink style={{color:"white"}} className="nav-link" to="/Bootstrap">Bootstrap.5</NavLink>
              </li>
            </ul>
          </div> 
          <Dropdown className="dropdown">
            <Dropdown.Toggle variant="warning" id="dropdown-basic">
              All Examples
            </Dropdown.Toggle> 
            <Dropdown.Menu >
            
              <Dropdown.Item ><NavLink style={{textDecoration: "none"}} to="/Netflix">Netflix</NavLink></Dropdown.Item> 
            </Dropdown.Menu>
          </Dropdown>  
        </nav>
      </div>
    </>
  )
}
export default Navbars;