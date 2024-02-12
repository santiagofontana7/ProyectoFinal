import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import Alert from 'react-bootstrap/Alert';
import "./Carrusel.css"

const Carrusel = ({ greeting, images }) => {
    let size = greeting ? "auto" : "375px";
    return (
        <>
            <Carousel data-bs-theme="dark">
                {
                    images.map((img) => {
                        return (

                            <Carousel.Item key={img.src} >
                                <img
                                    style={{ height: size }}
                                    className="d-block imgCarrusel"
                                    src={img.src}
                                />
                                <Carousel.Caption>
                                    <h3>{img.title}</h3>
                                    <p>{img.description}</p>
                                </Carousel.Caption>
                            </Carousel.Item>

                        )
                    })
                }
            </Carousel>
            <br />
            <div>
                {greeting ?

                    <Alert className="text-center" key="warning" variant="warning">
                        <Alert.Heading>{greeting}</Alert.Heading>
                    </Alert>
                    :
                    null
                }
            </div>

        </>
    )

}

export default Carrusel