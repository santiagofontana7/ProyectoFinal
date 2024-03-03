import React from "react";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import "./Item.css"

const Item = ({ product }) => {
    return (
            <Link className="linkNoUnderline" to={`/detail/${product.id}`}>
            <Card key={product.id} border="warning" className="card">
                <Card.Img className="cardImg" src={product.images[0]} alt={product.title} />
                <Card.Body>
                    <Card.Title className="cardTitle">{product.title.substring(0,40)}</Card.Title>
                    <Card.Text>
                        {product.description.substring(0, 25)}
                    </Card.Text>
                    <Card.Text>
                        ${product.price}
                    </Card.Text>
                </Card.Body>
            </Card>
            <br/>
            </Link>
    )
}

export default Item;