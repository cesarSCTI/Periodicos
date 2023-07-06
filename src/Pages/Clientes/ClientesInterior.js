import React, {useEffect} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import { Error, Success } from '../../Components/Buttons/Buttons'
import FormUser from '../../Components/FormUser/FormUser'
import Header from '../../Components/Header/Header'
import Loader from '../../Components/Loader/Loader'
import PedidoDefault from '../../Components/PedidoDefault/PedidoDefault'
import { useCRUDCliente } from './useCRUDCliente'
import Popup from '../../Components/Popup/Popup'

const ClientesInterior = () => {
  const {Cliente, isLoading, parameter, ClienteUpdate, handleChange, deleteCliente, openPOPUP, sureDelete, requestCliente,popPupGuardar} = useCRUDCliente()
  const navigate = useNavigate();
  const closeMensaje = () =>{
    //popPupGuardar = true
    navigate("../",{replace:true});
  }

useEffect(()=>{
  requestCliente()
},[])
  return (
    <>
      {
        isLoading
        ? 
        <div className="container"><Loader /></div>
        :
        popPupGuardar
        ?
        <Popup>
            <Header Text="El Cliente fue actualizado correctamente...!"/>
            <Loader/>
            <div className='d-100 comboBTNS'>
                <Error Text="Aceptar" F_Click={()=>closeMensaje()}/>
            </div>
        </Popup>
        :
        <>
          <Header Text={`Cliente | #${parameter.id}`}>
            <Error Text="Eliminar" F_Click={openPOPUP} />
          </Header>
          <FormUser InfoUser={Cliente} Envio={ClienteUpdate} Cambio={handleChange}/>
          <Header Text="Pedido por defecto"/>
          <PedidoDefault ClienteID={parameter.id} />
          {//GENERAMOS EL POPUP
            sureDelete 
            ? <Popup>
              <Header Text="¿Estas seguro de eliminar este cliente?"/>
                <Loader/>
                <div className="d-100 comboBTNS"> 
                  <Error Text="Cancelar" F_Click={openPOPUP}/>
                  <Success Text="Eliminar" F_Click={deleteCliente}/>
                </div>
            </Popup> 
            : 
            <></>
          }
        </>
      }
    </>
  )
}

export default ClientesInterior