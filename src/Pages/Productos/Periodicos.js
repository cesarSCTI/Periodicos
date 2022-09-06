import React, {useState, useEffect} from 'react'
import {useParams, useNavigate} from 'react-router-dom';
import Header from '../../Components/Header/Header';
import {Error, Success} from '../../Components/Buttons/Buttons';
import FormProductos from '../../Components/FormProductos/FormProductos';
import Loader from '../../Components/Loader/Loader';
import Popup from '../../Components/Popup/Popup';


const Periodicos = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [product, setProduct] = useState([])
  const [popPup, setPopPup] = useState(false)
  const navigate = useNavigate()
  const parameter = useParams() 


  const requestProduct = async () =>{
    const response = await fetch(`https://api-rest-sist-periodico.deversite.com/producto/${parameter.id}`)
    const data = await response.json().finally()
    setProduct(data)
    setIsLoading(false)
    console.log(data)
  }

  const deletePoduct = (product) =>{
    fetch(`https://api-rest-sist-periodico.deversite.com/api/eliminar_producto/${product}`, {
      method: 'POST'
    }).finally(()=>{
      //setPopPup(true)
      
        navigate("../productos", { replace: true });
    })
  }

  useEffect(()=>{
    requestProduct()
  }, [])

  return (
    <>
    {
      popPup
      ?<Popup>
          <Header Text="¿Estas seguro de eliminar este producto?"/>
          <Loader/>
          <div className="d-100 comboBTNS"> 
            <Error Text="Cancelar" F_Click={()=>setPopPup(false)}/>
            <Success Text="Eliminar" F_Click={() => deletePoduct(parameter.id)}/>
          </div>
        </Popup>
      :
      <>
        <Header Text={`producto | ${parameter.id}`}>
           <Error Text="Eliminar" F_Click={()=>setPopPup(true)}/>
        </Header>
        {
          isLoading
          ? <div className="container"> <Loader /> </div>
          : <FormProductos data={product[0]} />
        }
      </>
      }
    </>
  )
}

export default Periodicos