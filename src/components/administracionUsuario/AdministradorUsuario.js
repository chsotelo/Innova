import React from 'react';

const AdministradorUsuario = () => {
    return ( 
       <div className="containerAdministrador" >
            <div className="containerTituloAdministrador">
                <section className="iconoVaron">
                    <img id="imgVaron" src={require('../../images/PersonaMasculino.svg')} alt='PersonaMarculina'></img>
                </section>
                <section className="titulo-Administracion">
                    <h1>Administración</h1>
                </section>
            </div>
            <div className="containerTituloTabla" >
                <h1 className="tituloSeg">Administrador de Usuario</h1>
                <div className="containerResumenPago">
                    <section className="containerIcono">
                        <a href="#" id="a-ImageFlecha"><img id="img-Flecha"src={require('../../images/FlechaInversa.svg')} alt='FlechaInversa'></img></a>
                    
                    </section>
                    <section className="containerNombre">
                        <label>Resumen de pagos</label>
                    </section>
                </div>
            </div>
            <div className="containerTabla">
                <table className="tableDelModificarUsuario">
                    <tr>
                        <th>#</th>
                        <th>DNI</th>
                        <th>Nombre</th>
                        <th>Apellidos</th>
                        <th>Celular</th>
                        <th>Email</th>
                        <th>Dirección</th>
                        <th>Distrito</th>
                        <th>Provincia</th>
                        <th>Departamento</th>
                        <th>Servicio</th>
                        <th>Plan</th>
                        <th>Estado</th>
                        
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>81234567</td>
                        <td>Perico</td>
                        <td>Palotes</td>
                        <td>912345678</td>
                        <td>perico@gmail.com</td>
                        <td>Jr.Conde de superunda,CercadoHuamanga,05001,Peru</td>
                        <td>San miguiel</td>
                        <td>La Mar</td>
                        <td>Ayacucho</td>
                        <td>Internet</td>
                        <td>4MB</td>
                        <td>Activo</td>

                        <td> <button className='botonEditar-Usuario'>Editar</button></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>81234567</td>
                        <td>Perico</td>
                        <td>Palotes</td>
                        <td>912345678</td>
                        <td>perico@gmail.com</td>
                        <td>Jr.Conde de superunda,CercadoHuamanga,05001,Peru</td>
                        <td>San miguiel</td>
                        <td>La Mar</td>
                        <td>Ayacucho</td>
                        <td>Internet</td>
                        <td>4MB</td>
                        <td>Activo</td>
                        <td> <button className='botonEditar-Usuario'>Editar</button></td>

                    </tr>
                    <tr>
                        <td>3</td>
                        <td>81234567</td>
                        <td>Perico</td>
                        <td>Palotes</td>
                        <td>912345678</td>
                        <td>perico@gmail.com</td>
                        <td>Jr.Conde de superunda,CercadoHuamanga,05001,Peru</td>
                        <td>San miguiel</td>
                        <td>La Mar</td>
                        <td>Ayacucho</td>
                        <td>Internet</td>
                        <td>6MB</td>
                        <td>Desactivo</td>
                        <td> <button className='botonEditar-Usuario'>Editar</button></td>
                    </tr>
                </table>
            </div>
       </div>
     );
}
 
export default AdministradorUsuario;