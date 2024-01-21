import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import Alert from 'react-bootstrap/Alert';

const Carrusel = ({ greeting }) => {
    return (
        <>
            <Alert className="text-center" key="warning" variant="warning">
                <Alert.Heading>{greeting}</Alert.Heading>
            </Alert>

            <Carousel>
                <Carousel.Item >
                    <img style={{ marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center" }}
                        className="d-block "
                        src="/src/assets/img/ofertas.png"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>¡Ofertas del mes!</h3>
                        <p>Descubrí cientos de productos con descuentos</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item >
                    <img style={{ marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center" }}
                        className="d-block "
                        src="/src/assets/img/tarjeta.png"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3 className="textoNegro" >¡Paga con tarjetas!</h3>
                        <p className="textoNegro" >Y obtené descuentos y premios increibles</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{ marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center" }}
                        className="d-block"
                        src="/src/assets/img/envio.png"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3 className="textoNegro" >¡Envío gratis a todo el país!</h3>
                        <p className="textoNegro" >
                            Estes donde estes, te llevamos tu compra
                        </p >
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    )

}

export default Carrusel