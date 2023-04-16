import React, { useState, useEffect } from 'react'
import { Success } from '../Buttons/Buttons'
import PedidoProductos from './PedidoProductos'
import PedidoTitles from './PedidoTitles'
import { usePedidoDefault } from "./usePedidoDefault"
import { Link,useNavigate } from 'react-router-dom'
import Header from '../../Components/Header/Header'
import Loader from '../../Components/Loader/Loader'
import Popup from '../../Components/Popup/Popup'
import { Error } from '../../Components/Buttons/Buttons'

const PedidoDefault = ({ ClienteID }) => {
  const { reqProducts, Datos, Envio, handleChangeProductsDaily } = usePedidoDefault(ClienteID);
  
  const [popPupGuardarDetP, setPopPupGuardarDetP] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    reqProducts(ClienteID);
    console.log("useeffect")
    console.log(Datos)
  },[])

  const closeMensaje = () =>{
    //setPopPupMensajeInventario(false)
    navigate("../",{replace:true});
  }

  return (
    popPupGuardarDetP
    ?
    <Popup>
        <Header Text="El Detalle del Pedido fue registrado correctamente...!"/>
        <Loader/>
        <div className='d-100 comboBTNS'>
            <Error Text="Aceptar" F_Click={()=>closeMensaje()}/>
        </div>
    </Popup>
    :
    <div className='container'>
      <PedidoTitles />

      <form className='formularioProductDefault' onSubmit={Envio} onChange={handleChangeProductsDaily}>
        {
          Datos.length === 0
            ? <></>
            : <>
              {Datos.map((ele, i) => (<PedidoProductos Producto={ele} key={i} />))}
            </>
        }
        <div className='formulario-btn'>
          <Success Text="Guardar" />
        </div>
      </form>
    </div>
  )
}

export default PedidoDefault