
import React from 'react';
import "./css/servicios.css"

const Servicio = () => {
    return (  
        <div className="bodyServicio">
        
        <h1 className="titulo-instalacion">INSTALACIÓN</h1>
            <div className="pregunta-instalacion">
                <h1 id="question-1">¿Deseas contratar el servicio?</h1>
            </div>

            <div className="opcionesDeInstalacion">
                <div className="opcionesDiv">
                <section className="opciones"> 
                    <h2 className="h2-titulo-Instalacion">INSTALACIÓN ESTANDAR</h2>
                    <h3 className="h3-titulo-Instalacion"> ¡GRATIS! </h3>
                    <p className="p-parrafo">Hogar - Individual</p>
                </section>
                <input type="submit" className="boton" value="Solictar"></input>
                </div>

                <div className="opcionesDiv">
                <section className="opciones"> 
                    <h2 className="h2-titulo-Instalacion">INSTALACIÓN GENERAL</h2>
                    <p className="p-parrafo">Empresa - Mype - Otros</p>
                </section>
                <input type="submit" className="boton" value="Solictar"></input>
                </div>


            </div>
            <div className="contenedorComentariofinal">
                <p className="p-parrafo-final"> Realizamos la instalación en menos de 24 horas</p> <br/>
                <p className="p-parrafo-final"> Realizamos la instalación en menos de 24 horas</p> <br/>
                <p className="p-parrafo-final"> Realizamos la instalación en menos de 24 horas</p> <br/>
                <p className="p-parrafo-final">Contactos: 912345678</p>
            </div>

      
        </div>

    );
}
 
export default Servicio;