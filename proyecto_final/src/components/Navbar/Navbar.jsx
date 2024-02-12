import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Badge from 'react-bootstrap/Badge';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import CartWidget from '../CartWidget/CartWidget';
import { useState, useEffect } from 'react'
import { Link, useParams } from "react-router-dom";
import NavbarCategories from './NavbarCategories';


const MyNavbar = () => {
  const [category, setCategory] = useState([]);

  const { categoryId } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://dummyjson.com/products/categories");
      const data = await response.json();
      setCategory(data);
    }
    fetchData();
  }, null)

  return (
    <>
      <Navbar expand="lg" bg="warning" >
        <Container fluid>
          <Link to={"/"} className='navbar-brand'>
            <img
              width={100}
              src="/src/assets/img/logo.png"
              className="d-inline-block align-top"
              alt="Mercado Esclavo logo"
            />
            </Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <NavDropdown className="me-4" title="Categorías" id="navbarScrollingDropdown">

                <NavbarCategories categories={category}></NavbarCategories>

              </NavDropdown>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Buscar productos..."
                  className="me-2 lg"
                  aria-label="Buscar"
                />
                <Button variant="outline-dark">Buscar</Button>
              </Form>
            </Nav>
            <CartWidget></CartWidget>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default MyNavbar;