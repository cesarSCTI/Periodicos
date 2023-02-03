import React from 'react'
import { useNavigate } from 'react-router'
import { Success } from '../../Components/Buttons/Buttons'

const TicketExample = () => {
const navigate = useNavigate()
const imprimirTiket = () =>{
    const aside = document.getElementsByClassName("aside")
    const principal = document.getElementsByClassName("principal")
    aside[0].setAttribute("style","display:none;")
    principal[0].setAttribute("style","width:100vw;")
    window.print()
    aside[0].setAttribute("style","display:block;")
    principal[0].setAttribute("style","calc(100vw - 250px);")
    navigate("/pedidos", { replace: true });
}


  return (
    <>
        <table>
                <thead>
                    <tr>
                        <th>CANT</th>
                        <th>PRODUCTO</th>
                        <th>$</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>6</td>
                        <td>occidente</td>
                        <td>$0.00</td>
                    </tr>
                    <tr>
                        <td>10</td>
                        <td>Informador</td>
                        <td>$0.00</td>
                    </tr>
                    <tr>
                        <td>18</td>
                        <td>Sol</td>
                        <td>$0.00</td>
                    </tr>
                    <tr>
                        <td><hr></hr></td>
                        <td><hr></hr></td>
                        <td><hr></hr></td>
                    </tr>
                    <tr>
                        <td>00</td>
                        <td>TOTAL</td>
                        <td>$0.00</td>
                    </tr>
                </tbody>
            </table>
        <Success Text={"Ticket"} F_Click={imprimirTiket}/>
    </>
  )
}

export default TicketExample