import React, { useContext, useEffect} from 'react';
import { AppContext } from '../../App';
import { NavLink } from 'react-router-dom';
import './css/Pagos.css';
import SectiionProfile from '../cardProfile/SectiionProfile';
import ButtonNaranja from '../botones/BottonNaranja';
import whatsaapLogo from '../../images/whatsaap-envio-comprobante.png';

export default function Pagos() {
    const { dataOfUser } = useContext(AppContext);
    useEffect(() => {}, [dataOfUser]);
    return (
        <div className="Pagos-container">
            <SectiionProfile
                textoInicial={dataOfUser?.name?`${dataOfUser?.firstName} ${dataOfUser?.lastName}`:"Usuario"}
                tituloBoton={"Ver mi estado"}
                linkDireccion={"/visualizacion"}
            />


            <div className="contenedor-general">
                <picture>

                </picture>
                {/* formulario de pago con visa */}
                <div className="form-group">
                    <div>
                        <label>Nombre del titular</label>
                        <input type="text" className="form-input" placeholder="Nombre del titular" defaultValue={`${dataOfUser?.firstName} ${dataOfUser?.lastName}`}/>
                    </div>
                    <div>
                        <label>Numero de tarjeta</label>
                        <input type="text" className="form-input" placeholder="XXXX XXXX XXXX XXX" />
                    </div>
                    <div>
                        <label>Fecha de vencimiento</label>
                        <input type="text" className="form-input" placeholder="MM/YYYY" />
                    </div>
                    <div>
                        <label>CVV</label>
                        <input type="text" className="form-input" placeholder="CVV" />
                        <NavLink to="/visualizacion">

                            <ButtonNaranja className="btnP"
                                NombreBoton={"Pagar ahora"}
                            />
                        </NavLink>
                    </div>
                </div>

                <div className="form-group-otrosPagos">
                    <h3>OTROS METODOS DE PAGO</h3>


                    <label>1. DEPOSITOS POR CUENTAS TERCERAS DE BCP Y DE BANCO DE LA NACION</label>
                    <div className="form-imagen1">
                        <br />
                        <img className="img-pagos" src="https://upload.wikimedia.org/wikipedia/commons/c/ca/Logo_credito.gif" alt="bcp" />
                        <img className="img-pagos" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxheEdDr10WFUOEvmHCjreV_DXHNeshCg--MpT6YiEjQshoyxnSeemjGLONkuE4PDAD7I&usqp=CAU" alt="bn" />
                    </div>
                    <label>2. PAGO POR YAPE O PLIN</label>
                    <div className="form-imagen2">
                        <br />
                        <img className="img-pagos" src="https://play-lh.googleusercontent.com/y5S3ZIz-ohg3FirlISnk3ca2yQ6cd825OpA0YK9qklc5W8MLSe0NEIEqoV-pZDvO0A8" alt="yape" />
                        <img className="img-pagos" src="https://www.canadaperu.org/sites/default/files/styles/1024x576/public/store/noticias/img/2021-07/PLIN.png?itok=Q-aOJibG" alt="plin" />
                    </div>
                    <div className="informe-container">
                        <label><h3>Las Boletas de pago se encian a:</h3></label>
                        <picture>
                            <img
                                src={whatsaapLogo}
                                className="img-wasap"
                                alt="Whatsaap" />
                        </picture>
                        <br />
                        <NavLink to="/seguimientoPago">

                            <button className="boton-solicitar">Solicitar Verificación</button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
}