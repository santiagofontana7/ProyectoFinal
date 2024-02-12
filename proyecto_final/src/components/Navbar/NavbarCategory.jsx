import React from "react";
import "./Navbar.css"

import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from "react-router-dom";

const NavbarCategory = ({ category }) => {
    return (
                <p className="dropdown-item p" key={category}>
                    <NavLink className="linkNoUnderline" key={category} to={`/category/${category}`}>
                        {category}
                    </NavLink>
                </p>
                
    )
}

export default NavbarCategory