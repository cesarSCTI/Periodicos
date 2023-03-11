import React from 'react'
import { Success } from '../Buttons/Buttons'

const Form = ({cambio, enviar, children}) => {
  return (
    <form onSubmit={enviar} onChange={cambio}>
        {children}
        <div className='formulario-btn'>
          <Success Text="Guardar" />
        </div>
    </form>
  )
}

export default Form