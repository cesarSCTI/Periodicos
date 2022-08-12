import React from 'react'
import { Success } from '../Buttons/Buttons';
import './FormUser.css';

const FormUser = ({ InfoUser = {} }) => {
    return (
        <div className='container'>
            <form onChange={console.log()} onSubmit={console.log()} className="formUser">
                <div className='labelInput d-33'>
                    <label>Ficha</label>
                    <input className='UserFormInput' type="text" defaultValue={InfoUser.K_Cliente}/>
                </div>
                <div className='labelInput d-33'>
                    <label>Nombre</label>
                    <input className='UserFormInput' type="text" defaultValue={InfoUser.Nombre}/>
                </div>
                <div className='labelInput d-33'>
                    <label>Apellido</label>
                    <input className='UserFormInput' type="text" defaultValue={InfoUser.Apellidos}/>
                </div>
                <div className='labelInput d-100'>
                    <label>Direccion</label>
                    <input className='UserFormInput' type="text" defaultValue={InfoUser.Direccion}/>
                </div>
                <div className='labelInput d-50'>
                    <label>Adeudo</label>
                    <input className='UserFormInput onlyRead' type="text" defaultValue={InfoUser.Adeudo}/>
                </div>
                <div className='labelInput d-50'>
                    <label>Telefono</label>
                    <input className='UserFormInput' type="text" defaultValue={InfoUser.Telefono}/>
                </div>
                <div className='labelInput d-50'>
                </div>
                <div className='labelInput d-50 end'>
                    <Success Text="Guardar" />
                </div>
            </form>
        </div>

    )
}

export default FormUser