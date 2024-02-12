import React from "react";
import NavbarCategory from "./NavbarCategory";

const NavbarCategories = ({ categories }) => {

    return (
        categories.map((cat) => {
            return (
                <NavbarCategory key={cat} category={cat}></NavbarCategory>
            )
        })
    )
}

export default NavbarCategories