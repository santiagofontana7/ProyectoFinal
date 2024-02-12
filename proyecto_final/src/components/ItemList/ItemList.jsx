import React from "react";
import Item from "../Item/Item";
import Col from "react-bootstrap/esm/Col";

const ItemList = ({ products }) => {
    return (
        <>
            {
                products.map((prod) => {
                    return (
                        <>
                            <Col key={prod.id}>
                                <Item key={prod.id} product={prod} />
                            </Col>
                        </>
                    )
                })
            }
        </>
    )
}

export default ItemList