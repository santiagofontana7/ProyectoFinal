import React, { useEffect } from "react";
import ItemCount from "../ItemCount/ItemCount";
import Carrusel from "../Carrusel/Carrusel";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { Link } from "react-router-dom";
import Badge from "react-bootstrap/esm/Badge";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const ItemDetail = ({ product }) => {
    let images = [];
    if (product.images) {
        product.images.map((img) => {
            images.push({ "src": img });
        })
    }

    return (<div>


        <Container className='d-flex justify-content-center'>
            <Row>
                <Col style={{ width: "400px" }}>
                    <div>
                        {product.images ?

                            <Carrusel images={images}></Carrusel>
                            :
                            null
                        }
                    </div>
                </Col>
                <Col>
                    <h2>{product.title}</h2>
                    <Badge bg="dark">Marca: {product.brand}</Badge>
                    <br></br><br></br>
                    <Link key={product.category} to={`/category/${product.category}`}>
                        Categoría: {product.category}
                    </Link>
                    <br></br><br></br>
                    <h3>${product.price}</h3>
                    <p>{product.description}</p>
                    <ItemCount initial={1} stock={product.stock} />
                </Col>
            </Row>
        </Container>
    </div>)
}

export default ItemDetail;