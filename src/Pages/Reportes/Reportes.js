import React from 'react'
import FormFechas from '../../Components/FormFechas.js/FormFechas'
import PedidoProducts from '../../Components/FormPedidos/PedidoProducts'
import Header from '../../Components/Header/Header'
import TableReports from '../../Components/TableReports/TableReports'
import './Reportes.css'

const Reportes = () => {
  return (
    <>
    <Header Text="Reportes" ></Header>
    <div className="container top">
      <FormFechas />
      <TableReports/>
    </div>
    </>
  )
}

export default Reportes