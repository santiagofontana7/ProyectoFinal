import React, { useContext, useState } from "react";
import { db } from '../../firebase/config';
import { collection, addDoc, updateDoc, doc, getDoc } from 'firebase/firestore';
import { CartContext } from '../../context/CartContext';
import Alert from 'react-bootstrap/Alert';
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";
import Spinner from "react-bootstrap/esm/Spinner";

const Checkout = () => {
    const { cart, totalCart, quantity, emptyCart } = useContext(CartContext);

    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [emailConfirmation, setEmailConfirmation] = useState("")
    const [error, setError] = useState("")
    const [orderId, setOrderId] = useState("")
    const [generatingPurchase, setGeneratingPurchase] = useState(false);

    //#region Validations
    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    }

    const validateForm = () => {
        let validation = false;

        if (!name || name.trim() == "") {
            setError("Ingresa tu nombre");
        }
        else if (!surname || surname.trim() == "") {
            setError("Ingresa tu apellido");
        }
        else if (!phone) {
            setError("Ingresa tu teléfono");
        }
        else if(phone < 0 || phone > 999999999){
            setError("El formato del teléfono es incorrecto. Máximo 9 dígitos");
        }
        else if (!email || email.trim() == "") {
            setError("Ingresa tu email");
        }
        else if (!validateEmail(email.trim())) {
            setError("El email no tiene el formato correcto");
        }
        else if (!emailConfirmation || emailConfirmation.trim() == "") {
            setError("Ingresa nuevamente tu email");
        }
        else if (!validateEmail(emailConfirmation.trim())) {
            setError("El email de confirmación no tiene el formato correcto");
        }
        else if (email.trim() != emailConfirmation.trim()) {
            setError("Los email no coinciden");
        }
        else {
            validation = true;
        }
        return validation;
    }
    //#endregion


    const formHandler = (event) => {
        event.preventDefault()
        if (validateForm()) {
            setGeneratingPurchase(true);
            const order = {
                items: cart.map((product) => ({
                    id: product.product.id,
                    name: product.product.title,
                    quantity: product.quantity
                })),
                total: totalCart(),
                date: new Date(),
                name,
                surname,
                phone,
                email
            }

            Promise.all(
                order.items.map(async (productOrder) => {
                    const productRef = doc(db, "products", productOrder.id);
                    const productDoc = await getDoc(productRef)
                    const actualStock = productDoc.data().stock

                    await updateDoc(productRef, {
                        stock: actualStock - productOrder.quantity
                    })
                })
            )
                .then(() => {
                    addDoc(collection(db, "orders"), order)
                        .then((docRef) => {
                            setError("")
                            setOrderId(docRef.id)
                            emptyCart()
                        })
                        .catch((error) => {
                            console.log(error)
                            setError("Se produjo un error al crear la orden")
                        })
                })
                .catch((error) => {
                    console.log(error)
                    setError("No se puede actualizar el stock")
                })
                .finally(() => {
                    setGeneratingPurchase(false);
                })
        }
    }
    return (
        <div>
            {orderId ?
                <>
                    <Alert className="text-center" key="success" variant="success">
                        ¡Gracias por tu compra! Tu número de orden es: {orderId}
                    </Alert>
                    <div className='text-center'><Link to={"/"}>Seguir comprando </Link></div>
                </>
                :
                cart.length == 0 ?
                    <>
                        <Alert className="text-center" key="warning" variant="warning">
                            <Alert.Heading>El carrito no tiene productos</Alert.Heading>
                        </Alert>
                        <div className='text-center'><Link to={"/"}>Seguir comprando </Link></div>

                    </>
                    :
                    <>
                        <Alert className="text-center" key="warning" variant="warning">
                            <Alert.Heading>Ingresa tus datos</Alert.Heading>
                        </Alert>
                        <form onSubmit={formHandler}>
                            <Container>
                                <Row>
                                    <Col sm={5}>
                                        <div>
                                            <label>Nombres</label>
                                            <input maxLength={10} className="form-control" name="name" type='text' onChange={(e) => setName(e.target.value)} />
                                        </div>
                                        <div>
                                            <label>Apellidos</label>
                                            <input maxLength={10} className="form-control" name="surname" type='text' onChange={(e) => setSurname(e.target.value)} />
                                        </div>
                                        <div>
                                            <label>Teléfono</label>
                                            <input className="form-control" name="Teléfono" type='number' onChange={(e) => setPhone(e.target.value)} />
                                        </div>
                                        <div>
                                            <label>Email</label>
                                            <input className="form-control" name="Email" type='text' onChange={(e) => setEmail(e.target.value)} />
                                        </div>
                                        <div>
                                            <label>Email Confirmación</label>
                                            <input className="form-control" name="emailConfirmation" type='text' onChange={(e) => setEmailConfirmation(e.target.value)} />
                                        </div>
                                        <br />
                                        <div>
                                            <Button variant="warning" type='submit' disabled={generatingPurchase}>
                                                <Spinner hidden={!generatingPurchase}
                                                    as="span"
                                                    animation="border"
                                                    size="sm"
                                                    role="status"
                                                    aria-hidden="true"
                                                />
                                                <span className="visually-hidden">Loading...</span>{generatingPurchase ? "" : "Completar compra"}</Button>
                                        </div>
                                        <br />
                                        {error &&
                                            <Alert className="text-center" key="danger" variant="danger">
                                                {error}
                                            </Alert>}
                                    </Col>
                                    <Col sm={4}></Col>
                                    <Col sm={3} className='bottomContainer'>
                                        <Row className="text-center">
                                            <h3>Total: ${totalCart()}</h3>
                                        </Row>
                                        {cart.map((product, index) => (
                                            <Row key={index} className="text-center">
                                                <p>
                                                    {product.product.title} x {product.quantity}
                                                </p>
                                            </Row>
                                        ))}
                                        <Row className="text-center">
                                            <Link to={"/cart"}>Volver al carrito</Link>
                                        </Row>
                                    </Col>
                                </Row>
                            </Container>
                        </form>
                    </>
            }
        </div>
    );
}

export default Checkout;