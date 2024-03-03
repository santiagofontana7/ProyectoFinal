import React from "react";
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Carrusel from "../Carrusel/Carrusel";
import Loading from "../Loading/Loading";
import { db } from '../../firebase/config';
import { collection, getDocs, query, where } from 'firebase/firestore';

const ItemListContainer = () => {

    const [products, setProducts] = useState([]);
    const { categoryId } = useParams();

    useEffect(() => {
        setProducts([]);
        const myProducts = categoryId ? query(collection(db, "products"), where("category", "==", categoryId)) : collection(db, "products")
        getDocs(myProducts)
            .then((res) => {
                const newProducts = res.docs.map((doc) => {
                    const data = doc.data()
                    return { id: doc.id, ...data }
                })
                setProducts(newProducts.slice(0, 30))
            })
            .catch((error) => console.log(error))
    }, [categoryId]);

    let images = [{
        src: "/src/assets/img/ofertas.png",
        title: "¡Ofertas del mes!",
        description: "Descubrí cientos de productos con descuentos",
        color: "white"
    },
    {
        src: "/src/assets/img/tarjeta.png",
        title: "¡Paga con tarjetas!",
        description: "Y obtené descuentos y premios increibles",
        color: "black"
    },
    {
        src: "/src/assets/img/envio.png",
        title: "¡Envío gratis a todo el país!",
        description: "Estes donde estes, te llevamos tu compra",
        color: "black"
    }]

    return (
        <>
            <Carrusel greeting={categoryId ? categoryId : "Bienvenidos a Mercado Esclavo"} images={images}></Carrusel>
            <br />
            <div>
                {products.length == 0 ?
                    <Loading message={"Cargando " + (categoryId ? categoryId : "productos") + "..."}></Loading>
                    :
                    <Container className='d-flex justify-content-center'>
                        <Row>
                            <ItemList products={products}></ItemList>
                        </Row>
                    </Container>
                }
            </div>
        </>
    )
}

export default ItemListContainer