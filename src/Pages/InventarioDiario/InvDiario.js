import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Error } from '../../Components/Buttons/Buttons'
import FormInvDiario from '../../Components/FormInvDiario/FormInvDiario'
import Header from '../../Components/Header/Header'
import Loader from '../../Components/Loader/Loader'
import { useProductPetition } from '../Productos/HooksProductos'
import FormInvDiarioActual from '../../Components/FormInvDiario/FormInvDiarioActual'

import * as moment from 'moment'


const InvDiario = () => {
    const { Productos } = useProductPetition()
    const [formData, setformData] = useState([])
    const [inventario, setInventario] = useState([])
    const [todayReady, setTodayReady] = useState(false)
    const [existInv,setExist] = useState(false)
    const [intearioAct,setInventarioAct]=useState([])


    const date = new Date()

    //Handle
    const handleChange = (e) => {
        setformData({
            ...formData,
            [e.target.name]: e.target.value
        })
        //console.log(Object.entries(formData))
        createObj()
    }

    //Creating an Obj
    const createObj = () => {
        let arr = []
        var len = Object.entries(formData).length;
        const array = Object.entries(formData)
        for (var i = 0; i < len; i++) {
            arr.push({
                "K_Producto": array[i][0],
                "Cantidad": array[i][1],
            });
            setInventario(arr)
            console.log(inventario)
            //{ "K_Producto": "1", "Cantidad":"800" },
        }
    }

    const InventarioCreate = (e) => {
        e.preventDefault()
        console.log(JSON.stringify(inventario))
        axios.post("https://api-rest-sist-periodico.deversite.com/inventario_dia", JSON.stringify(inventario), {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const requestInventario = async()=>{
        const  dat = new Date();
        let dateAct = moment(dat).format('YYYY-MM-DD')
        const response = await fetch(`https://api-rest-sist-periodico.deversite.com/inventario_dia/${dateAct}`)
        const data = await response.json().finally()
        console.log(data)
        if(data.length>0){
            setExist(true)
            //setformData(data)
            //createObj()
            console.log("requestInventario")
            setInventarioAct(data)
        }
    }

    useEffect(()=>{
        requestInventario()
    },[])

    return (
        <>
            <Header Text={`Productos del dia | ${date}`}>
                <Link to="/"><Error Text="Regresar" /></Link>
            </Header>
            {
                Productos.length==0 && intearioAct.length==0
                ? 
                <div className="container"><Loader /></div>
                : 
                intearioAct.length>0
                ?
                <FormInvDiarioActual data={intearioAct}  cambio={handleChange} enviar={InventarioCreate} exist={existInv}/>
                :
                intearioAct.length==0 && Productos.length>0
                ?
                <FormInvDiario data={Productos} cambio={handleChange} enviar={InventarioCreate} exist={existInv}/>
                :<></>
            }

        </>
    )
}

export default InvDiario