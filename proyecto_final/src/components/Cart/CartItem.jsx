import React from "react";
import Button from 'react-bootstrap/Button';
import MyTooltip from "../Tooltip/Tooltip";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const CartItem = ({ product, deleteItem }) => {
    return (
        <>
            <td className="text-center">
                <img style={{ height: '100px' }} src={product.product.thumbnail} alt={product.product.title} />
            </td>
            <td>
                <Link to={`/detail/${product.product.id}`}>
                    <h5>{product.product.title}</h5>
                </Link>
            </td>
            <td className='right-align'>
                {product.quantity}
            </td>
            <td className='right-align'>
                {product.product.price}
            </td>
            <td className='right-align'>
                {product.product.price * product.quantity}
            </td>
            <td>
                <MyTooltip
                    myButton={<Button variant="outline-dark" onClick={() => deleteItem(product.product.id)}><FontAwesomeIcon icon={faTrash} /></Button>}
                    message={"Quitar producto"} position={"bottom"}>
                </MyTooltip>
            </td>
        </>
    )
}

export default CartItem;