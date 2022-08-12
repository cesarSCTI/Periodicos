import React, {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom';
import Header from '../../Components/Header/Header';
import {Error} from '../../Components/Buttons/Buttons';
import FormProductos from '../../Components/FormProductos/FormProductos';
import Loader from '../../Components/Loader/Loader';

const Periodicos = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [product, setProduct] = useState([])
  const parameter = useParams() 

  const requestProduct = async () =>{
    const response = await fetch(`https://api-rest-sist-periodico.deversite.com/producto/${parameter.id}`)
    const data = await response.json().finally()
    setProduct(data)
    setIsLoading(false)
    console.log(data)
  }

  useEffect(()=>{
    requestProduct()
  }, [])

  return (
    <>
        <Header Text={`producto | ${parameter.id}`}>
           <Link to="/productos"> <Error Text="Cancelar"/></Link>
        </Header>
        {
          isLoading
          ? <div className="container"> <Loader /> </div>
          : <FormProductos data={product[0]} />
        }
        
    </>
  )
}

export default Periodicos