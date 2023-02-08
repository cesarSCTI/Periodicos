import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Error } from '../../Components/Buttons/Buttons'
import FormInvDiario from '../../Components/FormInvDiario/FormInvDiario'
import Header from '../../Components/Header/Header'
import Loader from '../../Components/Loader/Loader'
import { useProductPetition } from '../Productos/HooksProductos'


const InvDiario = () => {
    const { Productos } = useProductPetition()
    const [formData, setformData] = useState([])
    const [inventario, setInventario] = useState([])
    const [todayReady, setTodayReady] = useState(false)

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
        axios.post("https://api-rest-sist-periodico.deversite.com/api/inventario_dia", new URLSearchParams(JSON.stringify(inventario)), {
            headers: {
                'content-type': 'text/json'
            }
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <>
            <Header Text={`Productos del dia | ${date}`}>
                <Link to="/"><Error Text="Regresar" /></Link>
            </Header>
            {
                !Productos
                    ? <div className="container"><Loader /></div>
                    : <FormInvDiario data={Productos} cambio={handleChange} enviar={InventarioCreate}/>
            }

        </>
    )
}

export default InvDiario