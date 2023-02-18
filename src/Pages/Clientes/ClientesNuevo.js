import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Error } from '../../Components/Buttons/Buttons'
import FormUser from '../../Components/FormUser/FormUser'
import Header from '../../Components/Header/Header'
import Loader from '../../Components/Loader/Loader'
import PedidoDefault from '../../Components/PedidoDefault/PedidoDefault'
import { useCRUDCliente } from './useCRUDCliente'

const ClientesNuevo = () => {
    const {Cliente, ClienteUpdate, isLoading, handleChange} = useCRUDCliente()
    /*const parametro = useParams();
    const [url, setUrl] = useState(undefined);

    const validatePage = () => {
        setUrl(parametro);
    }

    useEffect(() => {
        console.log(parametro)
    })*/

    return (
        <>
            {
                !isLoading
                ? <div className="container"><Loader /></div>
                :
                <>
                    <Header Text="Informacion de  nuevo cliente">
                    <Link to="/clientes"><Error Text="Regresar" /></Link>
                    </Header>
                    <FormUser InfoUser={Cliente} Envio={ClienteUpdate} Cambio={handleChange}/>
                    {/*<Header Text="Pedido por defecto"/>
                    <PedidoDefault />*/}
                </>
            }
            
            {/*<Header Text="Pedido por defecto" />
            <PedidoDefault />*/}
        </>
    )
}


export default ClientesNuevo