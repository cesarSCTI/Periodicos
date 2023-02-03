//import React, {useState} from 'react'
import './Buscador.css';
import "./SearchBar.css";
import { useState,useEffect } from "react";
//import { Console } from 'console';
//import SearchIcon from "@material-ui/icons/Search";
//import CloseIcon from "@material-ui/icons/Close";

const BuscadorCliente = ({placeholder,data}) => {
  //const [filteredData,setFilteredData] = useState([])
  //const [wordEntered, setWordEntered] = useState("");
  const[Cobranza,setPedidos] = useState([])
  const[tablaPedidos,setTablaPedidos] = useState([])
  const[busqueda,setBusqueda] = useState([])

  /*
  const handleFilter = (event) => {
    const searchWord = event.target.value;
    console.log(searchWord);
    console.log(filteredData);
    setWordEntered(searchWord);
    const newFilter = placeholder.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });
    console.log("data "+data);
    console.log("result "+newFilter);

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };
  */
 //  HANDLE & FILTER
 
 const handleFilter = (e) =>{
  const searchWord = e.target.value;
  //setBusqueda(e.target.value)
  //filtrar(e.target.value)
  console.log("data "+searchWord);
  if(searchWord === ""){
    setBusqueda([])
  }else{
    setBusqueda(searchWord)
    filtrar(searchWord)
  }
}

//  SEARCH

const filtrar=(terminoBusqueda)=>{
  if(terminoBusqueda!==""){
    var resultadosBusqueda = tablaPedidos.filter((elemento)=>{
        if(elemento.D_Cliente.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())){
            return elemento;
        }
    });
    console.log(resultadosBusqueda)
    setPedidos(resultadosBusqueda);
  }else{
    setPedidos([])
    
  }

}


  /*
  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };
*/
  //REQUEST
  
  const requestPedidosCobranza = async () => {
    const response = await fetch('https://api-rest-sist-periodico.deversite.com/pedidos')
    const data = await response.json().finally()
    console.log(response);
    //setPedidos(data)
    setTablaPedidos(data) 
  }

  useEffect(()=>{
    requestPedidosCobranza()
  },[])

  

  //console.log(Cobranza);

  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder={placeholder}
          value={busqueda}
          onChange={handleFilter}
        />
      </div>
      {
        Cobranza.length !== 0 && (
          <div className="dataResult">
            {Cobranza.slice(0, 15).map((value, key) => {
              return (
                <a className="dataItem" href={value.D_Cliente} >
                  <p>{value.D_Cliente} </p>
                </a>
              );
            })}
          </div>
        )
      }
    </div>
  );
}

export default BuscadorCliente