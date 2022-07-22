import React from 'react';

import "./css/Reclamos.css"


export default function Reclamos() {
    return (
        <div>
            <div className="contenedor" id="Nosotros">
                <div id="Contactenos">
                    <form className="formulario">
                        <legend>Atendemos a sus reclamos </legend>
                        <div className="datos">
                            <div className="dato">
                                <label>Nombre: </label>
                                <input type="text" placeholder="Nombre..." name="nombre"></input>
                            </div>
                            <div className="dato">
                                <label>Teléfono:</label>
                                <input type="text" placeholder="Telefono..." name="telefono"></input>
                            </div>
                            <div className="dato">
                                <label>Dirección:</label>
                                <input type="text" placeholder="Dirección..." name="dirección"></input>
                            </div>
                        </div>
                        <div className="dato1">
                                <label>Mensaje:</label>
                                <textarea></textarea>
                        </div>
                        <div className="enviar">
                            <div>
                                <input className="btn" type="submit" value="Enviar"></input>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

