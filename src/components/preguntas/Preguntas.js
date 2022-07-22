import React from 'react';

import "./css/Preguntas.css"

export default function Preguntas() {

    return (
        <div>

                <h1 class="titulo-preguntas">Respondemos a tus preguntas</h1>

                <div class="preguntas-contenedor">
                    <div class="contenedor-preguntas-1235 activo" data-categoria="metodos-pago">
                        <div class="contenedor-pregunta">
                            <p class="pregunta">¿Cuáles son los medios de pago?  <img height="150" width="150" src={require("../../images/suma.svg")}></img></p>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum laborum
                                porro voluptates, sequi aliquam mollitia! Nostrum eius iure sapiente, voluptates soluta.</p>
                        </div>
                        <div class="contenedor-pregunta">
                            <p class="pregunta">¿En qué sitio web puede ver la velocidad de mi internet?<img height="150" width="150" src={require("../../images/suma.svg")}></img></p>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum laborum
                                porro voluptates, sequi aliquam mollitia! Nostrum eius iure sapiente, voluptates soluta.</p>
                        </div>
                        <div class="contenedor-pregunta">
                            <p class="pregunta">¿Cómo puedo restablecer la velocidad de mi plan? <img height="150" width="150" src={require("../../images/suma.svg")}></img></p>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum laborum
                                porro voluptates, sequi aliquam mollitia! Nostrum eius iure sapiente, voluptates soluta.</p>
                        </div>
                        <div class="contenedor-pregunta">
                            <p class="pregunta">¿Cómo funciona la instalación? <img height="150" width="150" src={require("../../images/suma.svg")}></img></p>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum laborum
                                porro voluptates, sequi aliquam mollitia! Nostrum eius iure sapiente, voluptates soluta.</p>
                        </div>
                        <div class="contenedor-pregunta">
                            <p class="pregunta">¿Cuáles son los plazos de pago?<img height="150" width="150" src={require("../../images/suma.svg")}></img></p>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum laborum
                                porro voluptates, sequi aliquam mollitia! Nostrum eius iure sapiente, voluptates soluta.</p>
                        </div>
                    </div>
                </div>
        </div>
    )
}

