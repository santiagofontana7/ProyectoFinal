import React from "react";
import "./Navbar.css"
import { Link } from "react-router-dom";

const NavbarCategory = ({ category }) => {
    return (
        <Link className="linkNoUnderline" key={category} to={`/category/${category}`}>
            <p className="dropdown-item p" key={category}>
                {category}
            </p>
        </Link>
    )
}

export default NavbarCategory