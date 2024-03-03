import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus, faCircleMinus} from '@fortawesome/free-solid-svg-icons'
import Alert from 'react-bootstrap/Alert';
import { Link } from 'react-router-dom';

const ItemCount = ({ initial, stock, onAdd }) => {

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
        onAdd(count);
    }

    return (
        <>
            <div>

                <Stack direction="horizontal" gap={4}>
                    <div>
                        <Button variant="warning" onClick={decrease}><FontAwesomeIcon icon={faCircleMinus} /></Button>
                    </div>
                    <div>
                        <p style={{ margin: "0px" }}>{count}</p>
                    </div>
                    <div>
                        <Button variant="warning" onClick={increase}><FontAwesomeIcon icon={faCirclePlus} /></Button>
                    </div>
                </Stack>
                <p style={{ margin: "0px" }}>Stock disponible: {stock}</p>
                <Button variant="warning" onClick={addToCart}>Agregar al carrito</Button>
            </div>
            <br></br>
            <Alert hidden={!show} className="text-center" key="success" variant="success" dismissible>
                Producto agregado correctamente. <Link to={'/cart'}>Ir al carrito</Link>
            </Alert>
        </>
    )
}

export default ItemCount;