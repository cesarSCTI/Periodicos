import React, { useEffect, useState } from 'react'
//import {Text,TextInput} from 'react-native'
import './FormPedidos.css';



const PedidoProductsNuevos = ({ listProducts,Orders , T1, T2, T3, T4, T5}) => {
  const [products, setProducts] = useState(listProducts) 
  const [SumaTotal, setSumaTotal] = useState();
  const [order, setOrder] = useState(Orders)
  var SumaTotalF = 0;
  var TotalF = 0;
  const handleOnChange = (e, a) =>{
    let arr = e.target.name.split('_');
    console.log("cant_"+arr[1]+" "+e.target.value);
    console.log("cant 2 "+e.target.name);
    SumaTotalF = e.target.value
    console.log("SumaTotalF "+SumaTotalF)
    //setSumaTotal(Number(SumaTotalF)+10)
    //console.log(this.refs.Precio_17)
    //console.log(this.state.Precio_17)
    console.log(products)
    console.log(order)
    const newProduct = products.map(product => {
      console.log("w")
      console.log(product.K_Producto)
      
      if(product.K_Producto==arr[1]){
        console.log("q")
        product.Total = `${(Number(SumaTotalF)*Number(product.PrecioUnitario))}`
        product.Cantidad = `${Number(SumaTotalF)}`
      }
      TotalF+= Number(product.Total)
      return product;
      console.log("PREcio "+ product.PrecioUnitario)
    })
    console.log(TotalF)
    console.log(newProduct)
    setProducts(newProduct)
    /*
    const PedidoData = order.forEach(function(currentValue, index, arr){
      console.log(currentValue)
      currentValue.Total = TotalF
      console.log(arr)
    })
*/
    order.Total = TotalF
    console.log(order)
    setOrder(order)
  
  }

  useEffect(()=>{
    //setSumaTotal(Number(SumaTotalF)+10)
    //console.log("useEffect PDN "+SumaTotalF)
  })
  return (
    <div className='container'>
      <div className='titulos'>
        <div className='d-20'>{T1}</div>
        <div className='d-20'>{T2}</div>
        <div className='d-20'>{T3}</div>
        <div className='d-20'>{T4}</div>
        <div className='d-20'>{T5}</div>
      </div>
      {products.map((ele) =>
      <div className='contentProducts' key={ele.K_Producto}>
        <div className='d-20'>{ele.Nombre_Producto}</div>
        <div className='d-20'>
          <input type="text" name={"Cant_"+ele.K_Producto} className='inputProduct' defaultValue={ele.Cantidad} onChange={(name, value) => handleOnChange(name, value)}/>
        </div>
        <div className='d-20'>
          <input type="text" className='inputProduct' defaultValue={ele.Devoluciones} />
        </div>
        <div className='d-20'>
          <input type="text" refs={"Precio_"+ele.K_Producto} name={"Precio_"+ele.K_Producto} className='inputProduct' defaultValue={ele.PrecioUnitario} />
        </div>
        <div className='d-20'>
          <input type="text" name={"Total_"+ele.K_Producto} className='inputProduct' value={ele.Total} />
        </div>
      </div>
      )
      }
    </div>
  )
}
/**
 * {
        "Nombre_Producto": "Informador",
        "K_Pedido_Detalle": "1",
        "K_Pedido": "1",
        "K_Producto": "1",
        "Cantidad": "10",
        "PrecioUnitario": "11.00",
        "Devoluciones": "0",
        "Total": "110.00"
    }
 */
export default PedidoProductsNuevos