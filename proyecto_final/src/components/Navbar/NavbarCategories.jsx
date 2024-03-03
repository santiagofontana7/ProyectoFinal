import React from "react";
import NavbarCategory from "./NavbarCategory";

const NavbarCategories = ({ categories }) => {
    return (
        categories.map((cat,index) => {
            return (
                <NavbarCategory key={index} category={cat.category}></NavbarCategory>
            )
        })
    )
}

export default NavbarCategories