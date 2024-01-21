import React from 'react'
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const CartWidget = () => {
    return (
        <>
            <Button variant="dark">
                <FontAwesomeIcon icon={faCartShopping} /> <Badge bg="secondary">9</Badge>
                <span className="visually-hidden">Mi carrito</span>
            </Button>
        </>
    )
}

export default CartWidget