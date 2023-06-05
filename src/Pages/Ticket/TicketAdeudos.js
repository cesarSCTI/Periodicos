import React, {useState, useEffect} from 'react'
import { useNavigate, useParams, useLocation, useHistory} from 'react-router'
import { Success } from '../../Components/Buttons/Buttons'
import * as moment from 'moment'

const TicketExample = () => {

const navigate = useNavigate()
const location = useLocation();
const { items } = location.state;

const [data, setData] = useState(items)
const [total, setTotal] = useState(0)
const dat = new Date()
let dateAct = moment(dat).format('DD/MM/YYYY hh:mm:ss')

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

const probando = () =>{
     //Calculate
     
     const totales = []
     data.map((ele)=>{
         totales.push(parseFloat(ele.Adeudo))
     })
     const total = totales.reduce((sum, current)=>sum + current, 0)
     setTotal(total)
     console.log(total)
     
    console.log(items)
}
useEffect(()=>{
    probando()
},[])

  return (
    <>
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
                        <th>ADEUDO</th>
                    </tr>
                </thead>
                <tbody>
                {
                    data.map((ele)=>{
                        return (
                                <tr>
                                    <td>{ele.K_Cliente}</td>
                                    <td>{ele.Nombre+' '+ele.Apellidos}</td>
                                    <td>{ele.Adeudo}</td>
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
                        <th>Total</th>
                        <th>${parseFloat(total)}</th>
                    </tr>
                </tbody>
            </table>
        <Success Text={"Ticket"} F_Click={imprimirTiket}/>
    </>
  )
}

export default TicketExample