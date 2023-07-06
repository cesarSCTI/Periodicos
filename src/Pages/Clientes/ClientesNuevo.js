import React, { useState, useEffect } from 'react'
import { Link, useParams,useNavigate} from 'react-router-dom'
import { Error } from '../../Components/Buttons/Buttons'
import FormUser from '../../Components/FormUser/FormUser'
import Header from '../../Components/Header/Header'
import Loader from '../../Components/Loader/Loader'
import PedidoDefault from '../../Components/PedidoDefault/PedidoDefault'
import { useCRUDCliente } from './useCRUDCliente'
import Popup from '../../Components/Popup/Popup'

const ClientesNuevo = () => {
    const {Cliente, ClienteUpdate, isLoading, handleChange,popPupGuardar,popPupNotificacionCliente,dataClientesRep} = useCRUDCliente()
    const navigate = useNavigate();
    const closeMensaje = () =>{
        //popPupGuardar = true
        navigate("../",{replace:true});
      }
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
                popPupGuardar
                ?
                <Popup>
                    <Header Text="El Cliente fue creado correctamente...!"/>
                    <Loader/>
                    <div className='d-100 comboBTNS'>
                        <Error Text="Aceptar" F_Click={()=>closeMensaje()}/>
                    </div>
                </Popup>
                :
                popPupNotificacionCliente
                ?
                <Popup>
                    <Header Text="Ya se encuentra clientes con esta Ficha...!"/>
                    <Loader/>
                    {
                        dataClientesRep.map((ele) =>
                            <span class="cardValue">{'Ficha: '+ele.Ficha +' - '+ele.Nombre+' '+ele.Apellidos}</span>
                        )
                    }
                    <div className='d-100 comboBTNS'>
                        <Error Text="Aceptar" F_Click={()=>closeMensaje()}/>
                    </div>
                </Popup>
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