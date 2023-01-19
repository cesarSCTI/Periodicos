import React from "react";
import Header from "../../Components/Header/Header";
//import FormPedidos from "../../Components/FormPedidos/FormPedidos";
import FormPedidosNuevos from "../../Components/FormPedidos/FormPedidosNuevos";
import { Link } from "react-router-dom";
import { Error } from "../../Components/Buttons/Buttons";
import BuscadorCliente from "../../Components/Buscador/BuscardorCliente";

const PedidosNuevo = () => {
    const item = {
        "K_Pedido":0,
        "K_Cliente":0,
        "Nombre":``,
        "Adeudo":0,
        "Total_Pedido":0,
        "Total":0,
        "K_Usuario_Captura":1,
        "Observaciones":"Pruebas"
    };

    return (
        <>
            <Header Text="pedido | nuevo">
                <Link to="/pedidos"><Error Text="Cancelar"/></Link>
            </Header>
            <BuscadorCliente/>
            <FormPedidosNuevos orderInfo={item}/>
            
        </>
    )

}

export default PedidosNuevo