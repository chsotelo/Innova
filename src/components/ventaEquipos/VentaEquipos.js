
import React from 'react';
import "./css/ventaEquipo.css";

const VentaEquipos = () => {
    return ( 
        <div className="containerVentaDe_Equipo">

                <div id="containercabeza-Equipo">
                <h1 id="tituloVentaDeEquipo-title">VENTA DE EQUIPOS</h1>
                <div className="contenedorForm-Buscador">
                    <form id="form-Buscador">
                        <div className="contenedorBuscador">
                            <input type="text" className="buscadorGeneral" placeholder="Escriba su busqueda aquí..." autocomplete="off"></input>
                        </div>
                        <div className="contenedorBoton">
                        <button type="submit" className="btnBuscador" > <img id="img-Vidrio" src={require("../../images/vidrio-de-aumento 1.svg")} alt="lupa"></img></button>
                        </div>
                    </form>
                </div>
       
                </div>


            <div className="contenedorProductoGeneral">

           <div className="contenedorProductInstalacion">
                <h1 id="descripcion-Titulo">Productos para instalación de internet</h1>
                <div className="containerProductos-venta">

                <section className="contenedor-Producto">
                    <h2 id="nombre-producto">Nombre</h2>
                    <img id="imagenProducto" src={require("../../images/ubiquitiantena.jpg")} alt="Facebook"></img>
                    <p id="descripcion-Producto">Al combinar el punto de acceso UB AF- 5X .</p>
                    <p id="precio-Producto">$ 2000</p>
                    <button type="submit" className="btnComprar" >Comprar</button>
                </section>
                <section className="contenedor-Producto">
                    <h2 id="nombre-producto">Nombre</h2>
                    <img id="imagenProducto" src={require("../../images/ubiquitiantena.jpg")} alt="Facebook"></img>
                    <p id="descripcion-Producto">Al combinar el punto de acceso UB AF- 5X .</p>
                    <p id="precio-Producto">$ 2000</p>
                    <button type="submit" className="btnComprar" >Comprar</button>
                </section>
                <section className="contenedor-Producto">
                    <h2 id="nombre-producto">Nombre</h2>
                    <img id="imagenProducto" src={require("../../images/ubiquitiantena.jpg")} alt="Facebook"></img>
                    <p id="descripcion-Producto">Al combinar el punto de acceso UB AF- 5X .</p>
                    <p id="precio-Producto">$ 2000</p>
                    <button type="submit" className="btnComprar" >Comprar</button>
                </section>
                <section className="contenedor-Producto">
                    <h2 id="nombre-producto">Nombre</h2>
                    <img id="imagenProducto" src={require("../../images/ubiquitiantena.jpg")} alt="Facebook"></img>
                    <p id="descripcion-Producto">Al combinar el punto de acceso UB AF- 5X .</p>
                    <p id="precio-Producto">$ 2000</p>
                    <button type="submit" className="btnComprar" >Comprar</button>
                </section>

                </div>


           </div>
           <div className="todosLosProductos">
            
                <div className="containercabezaTodosProductos">
                <h1 id="descripcion-Titulo-2">Todos los Productos</h1>
                <div className="contenedorFormCategorias">
                    <form id="formBuscador-Categoria">
                        <div className="contenedorBuscadorCategoria">
                            <input type="text" className="buscadorGeneral" placeholder="Todas las categorias..." autocomplete="off"></input>
                        </div>
                        <div className="contenedorBoton2">
                        <button type="submit" className="btnBuscador-Categoria" > <img id="img-Abajo" src={require("../../images/abajo 1.svg")} alt="lupa"></img></button>
                        </div>
                    </form>
                </div>

                </div>

                <div className="containerProductos-Todos">
                <section className="contenedor-Producto">
                    <h2 id="nombre-producto">Nombre</h2>
                    <img id="imagenProducto" src={require("../../images/ubiquitiantena.jpg")} alt="Facebook"></img>
                    <p id="descripcion-Producto">Al combinar el punto de acceso UB AF- 5X .</p>
                    <p id="precio-Producto">$ 2000</p>
                    <button type="submit" className="btnComprar" >Comprar</button>
                </section>
                <section className="contenedor-Producto">
                    <h2 id="nombre-producto">Nombre</h2>
                    <img id="imagenProducto" src={require("../../images/ubiquitiantena.jpg")} alt="Facebook"></img>
                    <p id="descripcion-Producto">Al combinar el punto de acceso UB AF- 5X .</p>
                    <p id="precio-Producto">$ 2000</p>
                    <button type="submit" className="btnComprar" >Comprar</button>
                </section>
                <section className="contenedor-Producto">
                    <h2 id="nombre-producto">Nombre</h2>
                    <img id="imagenProducto" src={require("../../images/ubiquitiantena.jpg")} alt="Facebook"></img>
                    <p id="descripcion-Producto">Al combinar el punto de acceso UB AF- 5X .</p>
                    <p id="precio-Producto">$ 2000</p>
                    <button type="submit" className="btnComprar" >Comprar</button>
                </section>
                <section className="contenedor-Producto">
                    <h2 id="nombre-producto">Nombre</h2>
                    <img id="imagenProducto" src={require("../../images/ubiquitiantena.jpg")} alt="Facebook"></img>
                    <p id="descripcion-Producto">Al combinar el punto de acceso UB AF- 5X .</p>
                    <p id="precio-Producto">$ 2000</p>
                    <button type="submit" className="btnComprar" >Comprar</button>
                </section>
   
                </div>


           </div>
           
            </div>
        </div>
        );
}
 
export default VentaEquipos;