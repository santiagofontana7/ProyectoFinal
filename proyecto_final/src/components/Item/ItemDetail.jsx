import React, { useState, useContext } from "react";
import ItemCount from "./ItemCount";
import Carrusel from "../Carrusel/Carrusel";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { Link } from "react-router-dom";
import Badge from "react-bootstrap/esm/Badge";
import { CartContext } from '../../context/CartContext'
import Loading from "../Loading/Loading";

const ItemDetail = ({ product }) => {

    let images = [];
    if (product.images) {
        product.images.map((img) => {
            images.push({ "src": img });
        })
    }

    const { addCart } = useContext(CartContext);

    const onAdd = (count) => {
        addCart(product, count);
    }

    return (
        <div>
        
                {product.images ?
                    <Row>
                        <Col sm={1}></Col>
                        <Col sm={6}>
                            <div>
                                {product.images ?
                                    <Carrusel images={images}></Carrusel>
                                    :
                                    null
                                }
                            </div>
                        </Col>
                        <Col sm={5}>
                            <h2>{product.title}</h2>
                            <Badge bg="dark">Marca: {product.brand}</Badge>
                            <br></br>
                            <Link to={"/"}>Página principal</Link> {"→ "}
                            <Link key={product.category} to={`/category/${product.category}`}>
                                {product.category}
                            </Link>
                            <br></br>
                            <h3>${product.price}</h3>
                            <p>{product.description}</p>
                            <ItemCount initial={1} stock={product.stock} onAdd={onAdd} />
                        </Col>
                    </Row>
                    :
                    <Loading message={"Cargando ..."}></Loading>
                }
        </div>)
}

export default ItemDetail;