import React, {useState} from 'react'
import {Success, Error} from '../Buttons/Buttons'
import Popup from '../Popup/Popup';

import './Buscador.css';

const Buscador = ({Text}) => {

  const [pop, setPop] = useState(false);

  return (
    <div className='container'>
      <div className='Buscador'>
        <input type="text" className='buscadorInput' placeholder='Buscar'/>
        <Success Text="Buscar" F_Click={()=>setPop(true)} />
      </div>
      {
        pop && <Popup>
          <p>Buscando...</p>
          <Error Text="Cancelar Busqueda" F_Click={()=>setPop(false)} />
        </Popup>
      }
      
    </div>
  )
}

export default Buscador