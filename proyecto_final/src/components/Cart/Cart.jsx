import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';
import Container from "react-bootstrap/esm/Container";
import Table from 'react-bootstrap/Table';
import Alert from 'react-bootstrap/Alert';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/esm/Col';
import Button from 'react-bootstrap/esm/Button';
import './Cart.css'

const Cart = () => {
    const { cart, emptyCart, deleteItem, totalCart } = useContext(CartContext);

    return (
        <div>
            {cart.length == 0 ?
                <>
                    <Alert className="text-center" key="warning" variant="warning">
                        <Alert.Heading>El carrito no tiene productos</Alert.Heading>
                    </Alert>
                    <div className='text-center'><Link to={"/"}>Seguir comprando </Link></div>
                </>
                :
                <>
                    <Alert className="text-center" key="warning" variant="warning">
                        <Alert.Heading>Mi carrito</Alert.Heading>
                    </Alert>
                    <Container >
                        <Row>
                            <Col sm={10}>
                                <Table hover >
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th><p>Producto</p></th>
                                            <th className='right-align'><p>Cantidad</p></th>
                                            <th className='right-align'><p>Precio unitario</p></th>
                                            <th className='right-align'><p>Sub-total</p></th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cart.map((p) => (
                                            <tr key={p.product.id}>
                                                <CartItem key={p.product.id} product={p} deleteItem={deleteItem} />
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </Col>
                            <Col sm={2}>
                                <Row className="text-center">
                                    <h3>Total: ${totalCart()}</h3>
                                </Row>
                                <Row >
                                    <Button variant="warning">
                                        <Link className='linkNoUnderline' to={"/checkout"}>
                                            Completar compra
                                        </Link>
                                    </Button>
                                </Row>
                                <br />
                                <Row >
                                    <Button variant="outline-dark" onClick={emptyCart}>Vaciar carrito</Button>
                                </Row>
                                <br />
                                <Row className="text-center">
                                    <Link to={"/"}>
                                        Seguir comprando
                                    </Link>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </>
            }
        </div>
    )
}

export default Cart;