import React from 'react';
import './css/producto.css';

export default function Producto() {

    return (
        <div className="Contenedor-producto-123">
            <section className="ccontenedor-producto-section">
                <h2 className="h2-titulo-producto-ofrecido">Nombre</h2>
                <img id="img-Producto-1" src={require("../../images/ubiquitiantena.jpg")} alt="Foto producto"></img>
                <p className="descripcion-producto-mostrado">Al combinar el punto de acceso UB AF- 5X.</p>
                <p className="precio-producto-mostrado">$ 2000</p>
                <button type="submit" className="btnComprar-producto-mosrtado" >Comprar</button>
            </section>
        </div>
    );
}