import React, { useContext } from 'react'
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import MyTooltip from '../Tooltip/Tooltip';

const CartWidget = () => {

    const { cartQuantity } = useContext(CartContext);

    return (
        <>
            <MyTooltip
                myButton={<Link className={cartQuantity() == 0 ? "disabledLink" : null} to={cartQuantity() == 0 ? null : '/cart'}>
                    <Button disabled={cartQuantity() == 0} variant="dark">
                        <FontAwesomeIcon icon={faCartShopping} /> <Badge bg="secondary">{cartQuantity() == 0 ? null : cartQuantity()}</Badge>
                        <span className="visually-hidden">Mi carrito </span>
                    </Button>
                </Link>} message={"Mi carrito"} position={"bottom"}>
            </MyTooltip>
        </>
    )
}

export default CartWidget