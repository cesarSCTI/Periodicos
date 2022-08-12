import React, {useState} from 'react'
import './Buscador.css';


const Buscador = ({Text="Buscar", Enviar, Cambio}) => {

  const [pop, setPop] = useState(false);


  return (
    <div className='container'>
        <div className="Buscador">
          <input type="text" 
          className='buscadorInput'
           placeholder='Buscar por ID' 
           name="Buscador" 
           onChange={Cambio}/>
        </div>
    </div>
  )
}

export default Buscador