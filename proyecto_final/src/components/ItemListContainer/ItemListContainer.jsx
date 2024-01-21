import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import Container from 'react-bootstrap/Container';

const ItemListContainer = ({ nombre, descripcion, precio }) => {
    return (
        <>
        
   
            <Card border="warning" style={{ width: '12rem', textAlign: "center" }}>
                <Card.Img  variant="top" src="/src/assets/img/sin-imagen.png" />
                <Card.Body>
                    <Card.Title>{nombre}</Card.Title>
                    <Card.Text>
                        {descripcion}
                    </Card.Text>
                    <Card.Text>
                        ${precio}
                    </Card.Text>
                    <Button variant="warning"><FontAwesomeIcon icon={faEye} /></Button><span>&nbsp;</span>
                    <Button variant="warning"><FontAwesomeIcon icon={faCartPlus} /></Button>
                </Card.Body>
            </Card>

        </>

    )
}

export default ItemListContainer