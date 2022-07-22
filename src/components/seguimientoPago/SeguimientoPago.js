import React from 'react';
import { NavLink } from 'react-router-dom';
import SectionProfile from "../cardProfile/SectiionProfile";
import './css/seguimientoPago.css'
const SeguimientoPago = () => {
    return (

        <div className="containerSeguimientoPago">
            <SectionProfile
                textoInicial="Nombre de usuario"
                tituloBoton="Editar mi perfil"
                linkDireccion="/editarPerfil"
            />
            <div className="containerSeguimiento">
                <h2 id="tituloSeguimiento">Seguimiento Pago</h2>
                <img src={require("../../images/Group 123.png")} alt="SeguimientoPago"></img>
            </div >

            <div className="containerDirecion" >
                <div className="containerResumenPagoSeguimiento">
                    <section className="container-Iconos">
                        <NavLink to="/visualizacion">

                            <a id="iconoFlecha" href="#" ><img id="img-icono-Flecha" src={require('../../images/FlechaInversa.svg')} alt='FlechaInversa'></img></a>
                        </NavLink>

                    </section>
                    <section className="containerNombreLabel">
                        <label>Visualizar mi panel</label>
                    </section>
                </div>
            </div>

            <div className="containerTablaGeneral">
                <table className="tableGeneral">
                    <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>Celular</th>
                        <th>Email</th>
                        <th>Dirección</th>
                        <th>Preferencia</th>
                        <th>Distrito</th>
                        <th>Provincia</th>
                        <th>Departamento</th>
                        <th>Servicio</th>
                        <th>Valor $</th>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Perico</td>
                        <td>912345678</td>
                        <td>perico@gmail.com</td>
                        <td>Jr.Conde de superunda,CercadoHuamanga,05001,Peru</td>
                        <td>Cercano</td>
                        <td>San miguiel</td>
                        <td>La Mar</td>
                        <td>Ayacucho</td>
                        <td>Internet</td>
                        <td>40</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Perico</td>
                        <td>912345678</td>
                        <td>perico@gmail.com</td>
                        <td>Jr.Conde de superunda,CercadoHuamanga,05001,Peru</td>
                        <td>Cercano</td>
                        <td>San miguiel</td>
                        <td>La Mar</td>
                        <td>Ayacucho</td>
                        <td>Internet</td>
                        <td>40</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Perico</td>
                        <td>912345678</td>
                        <td>perico@gmail.com</td>
                        <td>Jr.Conde de superunda,CercadoHuamanga,05001,Peru</td>
                        <td>Cercano</td>
                        <td>San miguiel</td>
                        <td>La Mar</td>
                        <td>Ayacucho</td>
                        <td>Internet</td>
                        <td>40</td>
                    </tr>

                </table>
            </div>
            {/* 
            <div className="botonSiguiente-final">
                        <button type="button" id="bt-Siguiente">Siguiente</button>
            </div> */}

        </div>
    );
}

export default SeguimientoPago;