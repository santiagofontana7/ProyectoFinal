import React from "react";
import Item from "./Item";
import Col from "react-bootstrap/esm/Col";

const ItemList = ({ products }) => {
    return (
        <>
            {
                products.map((prod, index) => {
                    return (
                            <Col key={index}>
                                <Item key={index} product={prod} />
                            </Col>
                    )
                })
            }
        </>
    )
}

export default ItemList