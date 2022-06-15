import React from 'react'
import { Success } from '../Buttons/Buttons'
import './FormProductos.css';

const FormProductos = () => {
    return (
        <div className='container'>
            <form className='formProducto'>
                <div className='formProductoContent d-50'>
                    <label>Nombre</label>
                    <input type="text" />
                </div>
                <div className='formProductoContent d-50'>
                    <label>Precio</label>
                    <input type="text" />
                </div>
                <div className='formProductoContent d-50'>
                </div>
                <div className='formProductoContent d-50 end'>
                <Success Text="Guardar" />
                </div>
               
            </form>
        </div>
    )
}

export default FormProductos