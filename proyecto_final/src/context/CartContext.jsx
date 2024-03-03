import React, { useState, createContext } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addCart = (product, quantity) => {
        const existsProduct = cart.findIndex(prod => prod.product.id == product.id);
        if (existsProduct == -1) {
            setCart([...cart, { product, quantity }]);
        }
        else {
            const newCart = [...cart];
            newCart[existsProduct].quantity += quantity;
            setCart(newCart);
        }
    }

    const deleteItem = (idProduct) => {
        const newCart = cart.filter(item => item.product.id != idProduct);
        setCart(newCart);
    }

    const emptyCart = () => {
        setCart([]);
    }

    const cartQuantity = () => {
        const quantity = cart.reduce((total, item) => total + item.quantity, 0);
        return quantity;
    }

    const totalCart = () => {
        const total = cart.reduce((total, item) => total + (item.product.price * item.quantity), 0);
        return total;
    }

    return (
        <CartContext.Provider value={{
            cart,
            addCart,
            deleteItem,
            emptyCart,
            cartQuantity,
            totalCart
        }}>
            {children}
        </CartContext.Provider>
    )
}



export default CartProvider;