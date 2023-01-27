import React, {useState} from 'react'
import { Success } from '../Buttons/Buttons'
import './LoginForm.css'

const LoginForm = ({send, change}) => {
  return (
    <div className="container coverForm">
        <div className="titleLoginContent">
            <h2 className="titleLogin">Iniciar sesión</h2>
        </div>
        <form className="LoginForm" onChange={change} onSubmit={send}> 
            <div className='contenInputs'>
                 <label>Ususario</label>
                <input className='UserFormInput' type="text"  name="Usuario" placeholder="Usuario" />
            </div>
            <div className='contenInputs'>
                 <label>Contraseña</label>
                <input className='UserFormInput' type="password"  name="Password" placeholder="Contraseña" />
            </div>
            <Success Text="Iniciar Sesion" />
        </form>
    </div>
  )
}

export default LoginForm