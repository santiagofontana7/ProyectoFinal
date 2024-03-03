import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../Cart/CartWidget';
import { useState, useEffect } from 'react'
import { Link, useParams } from "react-router-dom";
import NavbarCategories from './NavbarCategories';
import { db } from '../../firebase/config';
import { collection, getDocs } from 'firebase/firestore';
import MyTooltip from '../Tooltip/Tooltip';

const MyNavbar = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const myCategories = collection(db, "categories")
    getDocs(myCategories)
      .then((res) => {
        const newCategories = res.docs.map((doc) => {
          const data = doc.data()
          return { category: doc.category, ...data }
        })
        setCategory(newCategories)
      })
      .catch((error) => console.log(error))
  }, [])

  return (
    <>
      <Navbar expand="lg" bg="warning" >
        <Container fluid>
          <MyTooltip
            myButton={<Link to={"/"} className='navbar-brand'>
              <img
                width={100}
                src="/src/assets/img/logo.png"
                className="d-inline-block align-top"
                alt="Mercado Esclavo logo"
              />
            </Link>} message={"Inicio"} position={"bottom"}>
          </MyTooltip>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll>
              <NavDropdown className="me-4" title="Categorías" id="navbarScrollingDropdown">
                <NavbarCategories categories={category}></NavbarCategories>
              </NavDropdown>
            </Nav>
            <CartWidget></CartWidget>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default MyNavbar;