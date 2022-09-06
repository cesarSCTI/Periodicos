import React from 'react'
import { Success } from '../Buttons/Buttons';
import './FormUser.css';

const FormUser = ({ InfoUser, Envio, Cambio}) => {
    return (
        <div className='container'>
            <form onChange={Cambio} onSubmit={Envio} className="formUser">
                <div className='labelInput d-33'>
                    <label>Ficha</label>
                    <input className='UserFormInput' type="text"  name="K_Cliente" defaultValue={InfoUser.K_Cliente} readOnly/>
                </div>
                <div className='labelInput d-33'>
                    <label>Nombre</label>
                    <input className='UserFormInput' type="text" name="Nombre" defaultValue={InfoUser.Nombre}/>
                </div>
                <div className='labelInput d-33'>
                    <label>Apellido</label>
                    <input className='UserFormInput' type="text" name="Apellidos" defaultValue={InfoUser.Apellidos}/>
                </div>
                <div className='labelInput d-100'>
                    <label>Direccion</label>
                    <input className='UserFormInput' type="text" name="Direccion" defaultValue={InfoUser.Direccion}/>
                </div>
                <div className='labelInput d-50'>
                    <label>Adeudo</label>
                    <input className='UserFormInput onlyRead' name="Adeudo" type="text" defaultValue={InfoUser.Adeudo} readOnly/>
                </div>
                <div className='labelInput d-50'>
                    <label>Telefono</label>
                    <input className='UserFormInput' type="text" name="Telefono" defaultValue={InfoUser.Telefono}/>
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