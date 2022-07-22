import React from 'react';

import './css/agregarProducto.css'

const AgregarProducto = () => {
    return ( 
        <div className="containerAgregarProducto">
            
            <div className="containerTitulo-AgregarProducto">
                <section className="iconoVaron">
                    <img id="img-varon" src={require('../../images/PersonaMasculino.svg')} alt='PersonaMarculina'></img>
                </section>
                <section className="titulo-AgregarProducto">
                    <h1 className="h1-titulo">Administración</h1>
                </section>
            </div>

            <div className="containerAgregar">
                <section className="titulo-AgregarProducto">
                    <h1 className="h1-titulo">Agregar Producto</h1>
                    <h2 className="h2-titulo">Producto</h2>
                </section>

                <div className="containerForm-2">
                    <section className="formularioproducto">
                        <form id="form-gr-1">
                        <div className="form-groupo-1">
                            <label>Nombre</label> <br/>
                            <input type="Text" className="form-controles-1producto" id="exampleInputNombre" aria-describedby="TextHelp" placeholder="Nombre"/>
                        </div>
                        <div className="form-groupo-1">
                            <label>Descripción</label> <br/>
                            <input type="Text" className="form-controles-1producto" id="exampleInputDescripcion" aria-describedby="TextHelp" placeholder="Descripción"/>
                        </div>
                        <div className="form-groupo-1">
                            <label>Precio</label> <br/>
                            <input type="Text" className="form-controles-1producto" id="exampleInputPrecio" aria-describedby="TextHelp" placeholder="Precio"/>
                        </div>
                        <div className="form-groupo-1">
                            <label>Cantidad</label> <br/>
                            <input type="Text" className="form-controles-1producto" id="exampleInputCantidad" aria-describedby="TextHelp" placeholder="Cantidad"/>
                        </div>
                        <div className="form-groupo-1">
                            <label>Categoria</label> <br/>
                            <input type="Text" className="form-controles-1producto" id="exampleInputCategoria" aria-describedby="TextHelp" placeholder="Categoria"/>
                        </div>
                        <div className="iconoSubir">
                            <div>

                            <img id="img-Subir" src={require('../../images/subir.png')} alt="subir"></img>
                            </div>
                            <div className="inputImagen">
	                        <input  type="file" id="imageFile" accept="image, .png, .jpj" multiple/>
                            </div>
                            <p className="pImage">O arrastra un archivo .png o .jpg</p>
                        </div>
                    
                        </form>
                    </section>
                    <div className="ContenedorProduct">
                    <section className="contenedorProducto">
                        <h2 className="h2-titulo">Nombre</h2>
                        <img id="img-Producto-1"src={require("../../images/ubiquitiantena.jpg")} alt="Facebook"></img>
                        <p className="descripcion">Al combinar el punto de acceso UB AF- 5X.</p>
                        <p className="precio">$ 2000</p>
                        <button type="submit" className="btnComprar" >Comprar</button>
                    </section>
                    </div>

                </div>

                <div className="containerBoton">
                    
                    <button className="btn-1-Final">Agregar</button>
                    <button className="btn-1-Final">Limpiar</button>


                </div>

            </div>
        </div>
     );
}
 
export default AgregarProducto;