import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus, faCircleMinus, faCartPlus } from '@fortawesome/free-solid-svg-icons'
import Toast from 'react-bootstrap/Toast';


const ItemCount = ({ initial, stock }) => {

    

    const [show, setShow] = useState(false);

    const [count, setCount] = useState(1);

    const decrease = () => {
        if (count > initial) {
            setCount(count - 1);
        }
    }
    const increase = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    }
    const addToCart = () => {
        setShow(true);
    }
    return (
        <div>

            <Stack direction="horizontal" gap={4}>
                <div><Button variant="warning" onClick={decrease}><FontAwesomeIcon icon={faCircleMinus} /></Button></div>
                <div><p style={{ margin: "0px" }}>{count}</p></div>
                <div><Button variant="warning" onClick={increase}><FontAwesomeIcon icon={faCirclePlus} /></Button></div>
            </Stack>
            <p style={{ margin: "0px" }}>Stock disponible: {stock}</p>
            <Button variant="warning" onClick={addToCart}>Agregar al carrito <FontAwesomeIcon icon={faCartPlus} /></Button>
            <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
                <Toast.Header>
                Producto agregado al carrito correctamente
                </Toast.Header>
            </Toast>
        </div>
    )
}

export default ItemCount;