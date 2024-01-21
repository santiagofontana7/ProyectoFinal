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


function MyNavbar() {
  return (
    <>
      <Navbar expand="lg" bg="warning" >
      <Container fluid>
      <Navbar.Brand href="#home">
            <img
              width={100}
              src="/src/assets/img/logo.png"
              className="d-inline-block align-top"
              alt="Mercado Esclavo logo"
            />
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Inicio</Nav.Link>
            <Nav.Link href="#action2">Más vendidos</Nav.Link>
            <NavDropdown className="me-4" title="Categorías" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Cat 1</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Cat 2
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Cat 3
              </NavDropdown.Item>
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