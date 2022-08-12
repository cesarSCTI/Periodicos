import React from 'react'
import {Success} from '../Buttons/Buttons'
import './FormFechas.css'

const FormFechas = () => {
  return (
        <div className="formList">
            <input type="date" className="input"/>
            <input type="date" className="input"/>
            <Success Text="Guardar" />
        </div>
       
  )
}

export default FormFechas