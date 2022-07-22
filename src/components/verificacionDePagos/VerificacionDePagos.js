import React from 'react';

import './css/verificacionDePago.css'

const VerificacionDePagos = () => {
    return ( 
        <div className="containerAdministrador" >
        <div className="containerTitulo">
            <section className="iconoVaron-1">
                <img id="img-Persona"src={require('../../images/PersonaMasculino.svg')} alt='PersonaMarculina'></img>
            </section>
            <section className="titulo-Administracion">
                <h1>Administración</h1>
            </section>
        </div>
        <div className="containerTituloTabla" >
            <h1 className="tituloSeg">Solicitudes de verificación de pago:</h1>
        </div>
        
        <div className="containerSolicitudes">
            <section className="containerDetallesPago">

                <div className="detalles">
                    <div className="containerCabeceroDetalles">
                        <h1 className="tituloPago">Detalle del pago</h1>
                        <button id="bt-verificar">Verificar</button>
                    </div>
                    
                    <p>Producto: Producto número 1</p>
                    <p>N° pago: 00002</p>
                    <p>Usuario: Maria Molina</p>
                    <p>Telefono: +51 912345678</p>
                    <p>Dirección: Av.Perú 123, San Martin de Porres, Lima, Lima,Perú.</p>
                </div>

            </section>
            <section className="containerDetallesPago">

                <div className="detalles">
                    <div className="containerCabeceroDetalles">
                        <h1 className="tituloPago">Detalle del pago</h1>
                        <button id="bt-verificar">Verificar</button>
                    </div>
                    
                    <p>Producto: Producto número 1</p>
                    <p>N° pago: 00002</p>
                    <p>Usuario: Maria Molina</p>
                    <p>Telefono: +51 912345678</p>
                    <p>Dirección: Av.Perú 123, San Martin de Porres, Lima, Lima,Perú.</p>
                </div>

            </section>

        </div>
        <hr/>
        <div className="containerUsuario">
           <div className="containerCabeceroUsuario">
            <section className="perfil-Usuario">
                <img id="img-ImgvaronCirculo" src={require("../../images/ImagenVaronCirculo.png")} alt="Imagen Varon"></img>
                <h2 id="perfilNombre">Perico Palotes</h2>
            </section>

            <section className="contacto">
                <div className="lugar">
                    <img className="imgenes-2" src={require("../../images/Locate.svg")} alt="Locate"></img>
                    <h2>Ayacucho</h2>
                </div>
                <div className="telefono">
                    <img src={require("../../images/llamada-telefonica.png")} alt="Locate"></img>
                    <h2>(+51) 980000123</h2>
                </div>
            </section>
            <section className="botonEditarPerfil">
                <button id="bt-EditarPerfil">EDITAR PERFIL</button>
            </section>
           </div>
           <div className="datosUsuario">
            <h1>Datos de usuario a verificar</h1>
            <h2>Datos personales</h2>
            <div className="containerForm">
                <form className="formDatosPersonales">

                    <div className="form-group">
                        <label>Nombre</label> <br/>
                        <input type="Text" className="form-control-verificar" id="exampleInputNombre" aria-describedby="TextHelp" placeholder="Nombre"/>
                    </div>

                    <div className="form-group">
                        <label>DNI</label> <br/>
                        <input type="Text" className="form-control-verificar" id="exampleInputDni" aria-describedby="TextHelp" placeholder="DNI"/>
                    </div>

                    <div className="form-group">
                        <label>Cantidad de dias a aumentar</label> <br/>
                        <input type="Text" className="form-control-verificar" id="exampleInputCantidad" aria-describedby="TextHelp" placeholder="Cantidad dias"/>
                    </div>

                    <div className="form-group">
                        <label>Contraceña Super usuario</label> <br/>
                        <input type="password" className="form-control-verificar" id="exampleInputPaswword" aria-describedby="TextHelp" />
                    </div>

                    <div className="botonConfirmar">
                        <button type="button" id="bt-confirmarRecarga">Confirmar recarga</button>
                    </div>

                </form>

                <section className="diasDisponibles">
                    <h1 id="h1-diasDisponibles">Dias disponibles</h1>
                    <p className="p-dias">12 dias</p>

                </section>
            </div>
           </div>
        </div>
   </div>
     );
}
 
export default VerificacionDePagos;