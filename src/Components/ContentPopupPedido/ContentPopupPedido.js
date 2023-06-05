import React, { useEffect, useState } from 'react'
import { Error, Success } from '../Buttons/Buttons'
import Header from '../Header/Header'
import './ContentPopupPedido.css';
import * as yup from "yup";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Popup from '../Popup/Popup'

const ContentPopupPedido = ({F_Click_Cerrar,orderInfo}) => {
  console.log(orderInfo);
  const navigate = useNavigate();
  const [resta, setResta] = useState();
  const Abonos = resta;

  const[isOpen,setIsopen] = useState(true)
  
  /*
  const [formData,setformData] = useState({ 
    "K_Cliente":Number(orderInfo.K_Cliente),
    "Pago_Abono":`${orderInfo.Pago_Abono}`,
    "Abono":`${orderInfo.Pago_Abono}`,
    "Adeudo_Final":Abono,
    "K_Usuario_Pago":1
  })
  */
  const [formData,setformData] = useState({ 
    "K_Cliente":orderInfo.K_Cliente,
    "Pago_Abono":'',
    "Abono":`${Abonos}`,
    "Adeudo_Final":'',
    "K_Usuario_Pago":1
  })

  useEffect(()=>{    
    setResta(Number(orderInfo.Total)-Number(formData.Pago_Abono))
    formData.Abono = formData.Pago_Abono
    formData.Adeudo_Final = Number(orderInfo.Total)-Number(formData.Pago_Abono)
  },[formData])
 
 
  let Schema = yup.object().shape({
    Pago_Abono: yup.number().required('Campo obligatorio.').min(0),
    Adeudo: yup.number().required('Campo obligatorio.').min(0),
    Total_Pedido: yup.number().required('Campo obligatorio.').min(0),
    Adeudo_Final: yup.number().required('Campo obligatorio.').min(0)
  });

  const pagoPedido = (e) => {
    e.preventDefault()
    const validacion = Schema.isValid(formData)
    var exist = false;
    if(validacion){ 
      console.log("validacion "+JSON.stringify(formData))
      axios.post(`https://api-rest-sist-periodico.deversite.com/pagar_pedido/${orderInfo.K_Pedido}`,new URLSearchParams(formData),{
        headers:{
          'Content-Type':'application/x-www-form-urlencoded'
        }
      })
      .then(function(response){
        console.log(response);
        if(response.status == 200){
          exist = true;
          setIsopen(false)        
          
        }
      })
      .catch(function(error){
        console.log(error)
      })
        setTimeout(()=>{
            //navigate("/pedidos", { replace: true });
            navigate("/");
          },5000)
    }
  }

  const handleChange = (e) =>{
    setformData({
      ...formData,
      [e.target.name]:e.target.value
      
    })
    console.log("handleChange "+formData+" - "+formData.Pago_Abono)
    
  }

  const handleInputChange = (e)=>{
    console.log("e "+e.target.value);
    //formData.Adeudo_Final = e.target.value
    setformData({
      ...formData,
      [e.target.name]:e.target.value
      
    })
    console.log("handleInputChange "+formData+" - "+formData.Pago_Abono)
  }
  return (
    isOpen &&<>
        <Header Text="Pago Pedido" >
            <Error Text="Cerrar" F_Click={F_Click_Cerrar}/>
        </Header>
        <form className='formPago' onSubmit={pagoPedido}>
        <div className='contentPago'>
          
            <div className='d-50'>
              <p>Adeudo</p>
              {
                //<div className='inputFail'>---</div>
              }
              <input type="text" name='Adeudo' className='inputTotal' defaultValue={orderInfo.Adeudo} disabled/>
              <p>Subtotal a pagar</p>
              <input type="text" name='Total_Pedido' className='inputTotal' defaultValue={orderInfo.Total_Pedido} disabled/>
              <p>Total a Pagar</p>
              <input type="text" name='Total' className='inputTotal' defaultValue={orderInfo.Total} disabled/>
            </div>
            <div className='d-50'>              
                <p>Pago</p>
                <input type="text" name='Pago_Abono' className='inputPago' onChange={handleInputChange} defaultValue={0}/>
                <p>Adeudo final</p>
                <input type="text" name='Adeudo_Final' className='inputTotal' defaultValue={resta} disabled/>
                <Success Text="Pagar" />              
            </div>
          
        </div></form>
    </>
  )
}

export default ContentPopupPedido