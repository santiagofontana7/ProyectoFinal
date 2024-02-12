import React from "react";
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Carrusel from "../Carrusel/Carrusel";
import Loading from "../Loading/Loading";

const ItemListContainer = () => {

    const [products, setProducts] = useState([]);

    const { categoryId } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const url = "https://dummyjson.com/products" + (categoryId ? "/category/" + categoryId : "");
                const response = await fetch(url);
                const data = await response.json();

                let filterProducts = data.products;

                if (categoryId) {
                    filterProducts = data.products.filter((prod) => prod.category == categoryId);
                }
                setProducts(filterProducts);
            }
            catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [categoryId]);

    let images = [{
        src: "/src/assets/img/ofertas.png",
        title: "¡Ofertas del mes!",
        description: "Descubrí cientos de productos con descuentos"
    },
    {
        src: "/src/assets/img/tarjeta.png",
        title: "¡Paga con tarjetas!",
        description: "Y obtené descuentos y premios increibles"
    },
    {
        src: "/src/assets/img/envio.png",
        title: "¡Envío gratis a todo el país!",
        description: "Estes donde estes, te llevamos tu compra"
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