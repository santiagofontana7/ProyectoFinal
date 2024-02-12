import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyNavbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
       
        <BrowserRouter>
        <MyNavbar></MyNavbar>
        <br/>
        <section className="container mb-2">
        <Routes>
            <Route path='/' element={<ItemListContainer />} />

            <Route path='/category/:categoryId' element={<ItemListContainer />} />

            <Route path='/detail/:id' element={<ItemDetailContainer/>}/>


            {/* <Container className='d-flex justify-content-center'>
            <Row>
              <Col><ItemListContainer nombre={"Producto 1"} descripcion={"Descripción del producto 1"} precio={1000}></ItemListContainer></Col>
              <Col><ItemListContainer nombre={"Producto 2"} descripcion={"Descripción del producto 2"} precio={500}></ItemListContainer></Col>
              <Col><ItemListContainer nombre={"Producto 3"} descripcion={"Descripción del producto 3"} precio={600}></ItemListContainer></Col>
              <Col><ItemListContainer nombre={"Producto 4"} descripcion={"Descripción del producto 4"} precio={900}></ItemListContainer></Col>
              <Col><ItemListContainer nombre={"Producto 5"} descripcion={"Descripción del producto 5"} precio={700}></ItemListContainer></Col>
            </Row>
          </Container> */}
         
        </Routes>
        </section>
        </BrowserRouter>
        
      
    </>
  )
}

export default App
