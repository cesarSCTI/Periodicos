import React, {useState} from 'react'
import './Buscador.css';


const BuscadorFicha = ({Text="Buscar", Enviar, Cambio}) => {

  const [pop, setPop] = useState(false);


  return (
    /*<div className='container'>
        <div className="BuscadorFicha">*/
          <input type="text" 
          className='buscadorFichaInput'
           placeholder='Buscar por Ficha' 
           name="BuscadorFicha" 
           onChange={Cambio}/>
    /*    </div>
    </div>*/
  )
}

export default BuscadorFicha