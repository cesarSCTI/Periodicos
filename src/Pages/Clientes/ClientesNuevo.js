import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Error } from '../../Components/Buttons/Buttons'
import FormUser from '../../Components/FormUser/FormUser'
import Header from '../../Components/Header/Header'
import PedidoDefault from '../../Components/PedidoDefault/PedidoDefault'

const ClientesNuevo = () => {
    const parametro = useParams();
    const [url, setUrl] = useState(undefined);

    const validatePage = () => {
        setUrl(parametro);
    }

    useEffect(() => {
        console.log(parametro)
    })

    return (
        <>
            <Header Text="Informacion de cliente">
                <Link to="/clientes"><Error Text="Regresar" /></Link>
            </Header>
            <FormUser />
            <Header Text="Pedido por defecto" />
            <PedidoDefault />
        </>
    )
}


export default ClientesNuevo