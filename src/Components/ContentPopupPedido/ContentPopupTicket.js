import { useEffect, useState } from "react";
import Header from "../Header/Header";

const ContentPopupTicket = ({K_Pedido, orderInfo}) => {
    const [pedidoDet,setPedidoDet] = useState([])
    const [pedidoDetDev, setPedidoDetDev] = useState([])

    const requestPedidoDetalle = async()=>{
        const response = await fetch(`https://api-rest-sist-periodico.deversite.com/ticket_entrega_detalle/${K_Pedido}`)
        const data = await response.json().finally()
        console.log(data);
        setPedidoDet(data)
    }

    const requestPedidoDevDetalle = async()=>{
        const response = await fetch(`https://api-rest-sist-periodico.deversite.com/ticket_devolucion_detalle/${K_Pedido}`)
        const data = await response.json().finally()
        console.log(data)
        setPedidoDetDev(data)
    }

    useEffect(()=>{
        requestPedidoDetalle()
        requestPedidoDevDetalle()
    })

    return(
        <>
        <Header Text={`Ticket Pedido No. ${K_Pedido}`}>

        </Header>
        <div className="container">
            <div className="Table">
                <div className="container">
                    <div className="titulos">
                        <div className="d-60">Nombre</div>
                        <div className='d-40'>Pedido</div>
                        <div className='d-40'>Precio</div>
                        <div className='d-20'>Total</div>
                    </div>
                    {
                        pedidoDet.map((ele)=>
                            <div className="contentProducts">
                                <div className="d-60">{ele.Nombre}</div>
                                <div className="d-40">{ele.Cantidad}</div>
                                <div className="d-40">{ele.PrecioUnitario}</div>
                                <div className="d-20">{ele.Total}</div>
                            </div>
                        )
                    }                    
                </div>
            </div>
            <div className='d-80 justifyRight'>
                <label className='label'>Total a Pagar</label>
                <input type="text" className='inputTotal' value={orderInfo.Total} />
            </div>
        </div>
        <div className="container">
            <div className="Table">
                <div className="container">
                    <div className="titulos">
                        <div className="d-60">Nombre</div>
                        <div className='d-40'>Devolucion</div>
                        <div className='d-40'>Precio</div>
                        <div className='d-20'>Total</div>
                    </div>
                    {
                        pedidoDetDev.map((ele)=>
                            <div className="contentProducts">
                                <div className="d-60">{ele.Nombre}</div>
                                <div className="d-40">{ele.Devoluciones}</div>
                                <div className="d-40">{ele.PrecioUnitario}</div>
                                <div className="d-20">{ele.Total_Dev}</div>
                            </div>
                        )
                    }
                </div>
            </div>
            <div className='d-80 justifyRight'>
                <label className='label'>Total Devoluciones</label>
                <input type="text" className='inputTotal' value={orderInfo.Total_Devoluciones} />
            </div>
        </div>
    </>
    )
}

export default ContentPopupTicket