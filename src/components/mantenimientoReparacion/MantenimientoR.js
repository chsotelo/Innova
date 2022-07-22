import React from 'react';
import "./css/mantenimientoR.css"

const MantenimientoR = () => {
    return ( 
        <div className="bodyServicio">
        
        <h1 className="titulo-Mantenimiento">MANTENIMIENTO Y REPARACIÓN</h1>


            <div className="informacion-Reparacion">
            
                <div className="containerArticle">
                <h2 id="h2-titulo2">Brindamos soluciones tecnologicas</h2>
                    <article className="article-Instalacion">
                        <h3 id="h3-titulo3" >Soporte tecnico de:</h3>
                        <p id="p-Comentario"> Tablets<br/>
                            Laptops<br/>
                            Todo en uno<br/>
                            Computadoras de escritorio </p>
                    </article>

                    <article className="article-Instalacion">
                        <h3 id="h3-titulo3">Instalación de:</h3>
                        <p id="p-Comentario"> Redes<br/>
                            Antivirus<br/>
                            Cyber Cafes<br/>
                            Sistemas Operativos<br/>
                            Todo Tipo de programas<br/>
                            Mantenimiento preventivo y correctivo</p>
                    </article>
                </div>

                <aside className="imagenesPublicidad">
                    <img className="img-flyer" src={require("../../images/Flyer.jpg")} alt="Flyyer">
                    </img>
                </aside>

                <aside className="imagenesPublicidad">
                    <img className="img-flyer" src={require("../../images/Flyer.jpg")} alt="Flyyer">
                    </img>
                </aside>


            </div>

            <div className="containerMapa">
                <h2>Ubicación</h2>

                <div className="containerMap">

                <div className="svgIconoUbicacion">
                    <img id="img-locate" src={require("../../images/Locate.svg")} alt="locate"></img>
                </div>
                <button className="botonVerMapa">
                        <spam id="spam-Mapa">Ver en el mapa</spam>
                </button>
                </div>

            </div>



      
        </div>
     );
}
 
export default MantenimientoR;