import React, {useState, useEffect} from 'react'
import { useNavigate, useParams, useLocation, useHistory} from 'react-router'
import { Success } from '../../Components/Buttons/Buttons'
//import { PassThrough } from 'stream'
import * as moment from 'moment'

const TicketExample_2 = () => {
const  dat = new Date();
let dateAct = moment(dat).format('DD/MM/YYYY hh:mm:ss')
const navigate = useNavigate()
const location = useLocation();
//const { items } = location.state;
const {K_Pedido} = location.state;
const {adeudo} = location.state;
const {pago} = location.state;
const {ficha} = location.state;
const {cliente} = location.state;
const {noPedido} = location.state;

//const [data, setData] = useState(items)
const [total, setTotal] = useState(0)
const [pedidoDetDev, setPedidoDetDev] = useState([])
const [pedidoDet,setPedidoDet] = useState([])
const [totalDev,setTotalDev] = useState(0)

const imprimirTiket = () =>{
    //print
    const aside = document.getElementsByClassName("aside")
    const principal = document.getElementsByClassName("principal")
    aside[0].setAttribute("style","display:none;")
    principal[0].setAttribute("style","width:100vw;")
    window.print()
    aside[0].setAttribute("style","display:block;")
    principal[0].setAttribute("style","calc(100vw - 250px);")
    navigate(-1, { replace: true });
    //navigate("/pedidos", { replace: true });
}

const requestPedidoDevDetalle = async()=>{
    const response = await fetch(`https://api-rest-sist-periodico.deversite.com/ticket_devolucion_detalle/${K_Pedido}`)
    const data = await response.json().finally()
    console.log(data)
    setPedidoDetDev(data)
    const totales = []
    data.map((ele)=>{
        totales.push(ele.Devoluciones*parseFloat(ele.PrecioUnitario))
    })
    const total = totales.reduce((sum, current)=>sum + current, 0)
    setTotalDev(total)
}

const probando = async() =>{
     //Calculate Totales
     const response = await fetch(`https://api-rest-sist-periodico.deversite.com/ticket_entrega_detalle/${K_Pedido}`)
     const data = await response.json().finally()
     console.log(data);
     setPedidoDet(data)
     //
     const totales = []
     data.map((ele)=>{
         totales.push(ele.Cantidad*parseFloat(ele.PrecioUnitario))
     })
     const total = totales.reduce((sum, current)=>sum + current, 0)
     setTotal(total)
     console.log(total)
     
}
useEffect(()=>{
    probando()
    // Devoluciones
    requestPedidoDevDetalle()
},[])

  return (
    <>
        <br>
        </br>
        <table>
            <thead>
                <tr>
                    <th>{dateAct}</th>
                </tr>
            </thead>
        </table>
        <table>
            <thead>
                <tr>
                    <th>FICHA</th>
                    <th>CLIENTE</th>
                    <th>No PEDIDO</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{ficha}</td>
                    <td>{cliente}</td>
                    <td>{noPedido}</td>
                </tr>
                <tr>
                    <th><hr></hr></th>
                    <th><hr></hr></th>
                    <th><hr></hr></th>
                </tr>
            </tbody>
        </table>
        <br></br>
        <table>
            <thead>
                <tr>
                    <th>PRODUCTO</th>
                    <th>CANT</th>    
                    <th>PRECIO</th>                    
                    <th>SUBTOTAL</th>
                </tr>
            </thead>
            <tbody>
            {
                pedidoDet.map((ele)=>{
                    return (
                            <tr>
                                <td>{ele.Nombre}</td>
                                <td>{ele.Cantidad}</td> 
                                <td>{ele.PrecioUnitario}</td>                                   
                                <td>{ele.Cantidad*ele.PrecioUnitario}</td>
                            </tr>
                            )
                        })
            }
                <tr>
                    <th><hr/></th>
                    <th><hr/></th>
                    <th><hr/></th>
                </tr>
                <tr>
                    <th>Total Entrega</th>
                    <th>{total}</th>
                </tr>
            </tbody>
        </table>
        <br>
        </br>
        <table>
            <thead>
                <tr>
                    <th>PRODUCTO</th>
                    <th>CANT DEV</th>
                    <th>PRECIO</th> 
                    <th>SUBTOTAL</th>
                </tr>
            </thead>
            <tbody>
            {
                pedidoDetDev.map((ele)=>{
                    return(
                        <tr>
                            <td>{ele.Nombre}</td>
                            <td>{ele.Devoluciones}</td>
                            <td>{ele.PrecioUnitario}</td>
                            <td>{ele.Total_Dev}</td>
                        </tr>
                    )
                })
            }
                <tr>
                    <th><hr></hr></th>
                    <th><hr></hr></th>
                    <th><hr></hr></th>
                </tr>
                <tr>
                    <th>Total Devoluciones</th>
                    <th>{totalDev}</th>
                </tr>
            </tbody>
        </table>
        <br></br>
        <table>
            <thead>
                <tr>
                    <th>TOTAL</th>
                    <th>ADEUDO</th>
                    <th>TOTAL PAGAR</th>                    
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{(total-totalDev)}</td>
                    <td>{adeudo}</td>
                    <td>{(total-totalDev)+parseFloat(adeudo)}</td>
                    
                </tr>
            </tbody>
        </table>
        <table>
            <thead>
                <tr><th>PAGADO</th>
                    <th>NUEVO ADEUDO</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{pago}</td>
                    <td>{parseFloat((total-totalDev)+parseFloat(adeudo)-parseFloat(pago)).toFixed(2)}</td>
                </tr>
            </tbody>
        </table>
            
        <Success Text={"Ticket"} F_Click={imprimirTiket}/>
    </>
  )
}

export default TicketExample_2