import React from "react";
import Spinner from 'react-bootstrap/Spinner';

const Loading = ({ message }) => {
    return (
        <div style={{textAlign:"center"}}>
            <h3>{message}</h3>
            <Spinner animation="border" />
        </div>

    )
}

export default Loading