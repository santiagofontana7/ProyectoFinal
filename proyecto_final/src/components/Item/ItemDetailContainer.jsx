import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { db } from '../../firebase/config';
import { doc, getDoc } from 'firebase/firestore';

const ItemDetailContainer = () => {

    const [product, setProduct] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const nuevoDoc = doc(db, "products", id)
        getDoc(nuevoDoc)
            .then(res => {
                const data = res.data()
                const newProduct = { id: res.id, ...data }
                setProduct(newProduct)
            })
            .catch(error => console.log(error))
    }, [])

    return (
        <div>
            {
                <ItemDetail product={product}></ItemDetail>
            }
        </div>
    )
}

export default ItemDetailContainer;