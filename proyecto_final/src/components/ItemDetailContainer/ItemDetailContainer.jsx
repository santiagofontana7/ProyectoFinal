import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import Loading from "../Loading/Loading";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://dummyjson.com/products/" + id);
                const data = await response.json();
                setProduct(data);
            }
            catch (error) {
                console.log(error);
            }
        }

        fetchData();
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

