import React from 'react';

import "./css/Nosotros.css"


export default function Nosotros() {
    return (
        <div className='contenedorg-nosotros-12345'>
            <div className="contenedor" id="Nosotros">

                <h2 className="nuestrosServicios-nosotros-12">
                    NUESTRA MISIÓN Y VISIÓN
                </h2>


                <main className="servicios rgbaOscuro">
                    <div className="servicio1-nosotros">
                        <h3>MISIÓN</h3>
                        <div className="svgEstilo">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-stairs-up" width="40" height="40" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M4 20h4v-4h4v-4h4v-4h4" />
                                <path d="M4 11l7 -7v4m-4 -4h4" />
                            </svg>
                        </div>
                        <p className="p-nosotros-12345">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint animi aspernatur ea consequatur. Aspernatur, consectetur, possimus fuga esse dolorem quibusdam illum et quas vitae necessitatibus suscipit eos veritatis. Perspiciatis, non.</p>
                    </div>
                    <div className="servicio2-nosotros">
                        <h3>VISIÓN</h3>
                        <div className="svgEstilo">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-eye" width="40" height="40" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <circle cx="12" cy="12" r="2" />
                                <path d="M22 12c-2.667 4.667 -6 7 -10 7s-7.333 -2.333 -10 -7c2.667 -4.667 6 -7 10 -7s7.333 2.333 10 7" />
                            </svg>
                        </div>
                        <p className="p-nosotros-12345">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint animi aspernatur ea consequatur. Aspernatur, consectetur, possimus fuga esse dolorem quibusdam illum et quas vitae necessitatibus suscipit eos veritatis. Perspiciatis, non.</p>
                    </div>
                    <div className="servicio3-nosotros">
                        <h3>OBJETIVOS</h3>
                        <div className="svgEstilo">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-world" width="40" height="40" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <circle cx="12" cy="12" r="9" />
                                <line x1="3.6" y1="9" x2="20.4" y2="9" />
                                <line x1="3.6" y1="15" x2="20.4" y2="15" />
                                <path d="M11.5 3a17 17 0 0 0 0 18" />
                                <path d="M12.5 3a17 17 0 0 1 0 18" />
                            </svg>
                        </div>
                        <p className="p-nosotros-12345">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint animi aspernatur ea consequatur. Aspernatur, consectetur, possimus fuga esse dolorem quibusdam illum et quas vitae necessitatibus suscipit eos veritatis. Perspiciatis, non.</p>
                    </div>

                </main>
            </div>
            <div className="contenedorT-nosotros-123" id="Promociones">
                <h2 className="nuestrosServiciosT-nosotros-147">
                    NUESTRA TRAYECTORIA
                </h2>
                <main className="serviciostrayectoria rgbaOscuro1">
                    <div className="servicio">
                       

                       <p className="p-nosotros-12345"> Innova Lan es una compañia de tecnologia de comunicación innovadora en Perú</p>

                       <p className="p-nosotros-12345">
                        Con más de 30 Ubicaciones, Fibertel busca ser lider en ofrecer soluciones innovadoras de 
                        comunicaciones y tecnologia que permiten conectar los clientes mas remotos que viven, trabajan, 
                        aprenden y juegan.
                        Con Fundada en el 2005, la empresa opera la red fibra e inalámbrica de las más confiable del Perú y la principal red para conectar proyectos y eventos a internet, y ofrece soluciones integradas a empresas de todo el mundo. Con marcas como Mistilabs, Auditel, Educlook entre otros, el grupo de compañías ayuda a los consumidores a mantenerse comunicados y realizar operaciones.
                        </p>
                    </div>
                    <div className="servicio">
                        <div className="svgEstiloT">
                            <img height="150" width="150" src={require("../../images/conexion.png")} alt="Imagen"></img>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

