import React, {useState} from 'react'
import './Buscador.css';


const BuscadorNombre = ({Text="Buscar", Enviar, Cambio}) => {

  const [pop, setPop] = useState(false);


  return (
    /*
    <div className='container'>
        <div className="Buscador">*/
          <input type="text" 
          className='buscadorNombreInput'
           placeholder='Buscar por Nombre' 
           name="Buscador" 
           onChange={Cambio}/>
    /*    </div>
    </div>*/
  )
}

export default BuscadorNombre