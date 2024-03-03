import { useState } from 'react'
import './App.css'
import MyNavbar from './components/Navbar/Navbar'
import ItemListContainer from './components/Item/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './components/Item/ItemDetailContainer'
import CartProvider from './context/CartContext'
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout'


function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <MyNavbar></MyNavbar>
          <br />
          <section className="container mb-2">
            <Routes>
              <Route path='/' element={<ItemListContainer />} />
              <Route path='/category/:categoryId' element={<ItemListContainer />} />
              <Route path='/detail/:id' element={<ItemDetailContainer />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/checkout' element={<Checkout />} />
            </Routes>
          </section>
        </CartProvider>
      </BrowserRouter>
    </>
  )
}

export default App
