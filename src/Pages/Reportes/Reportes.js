import React from 'react'
import FormFechas from '../../Components/FormFechas.js/FormFechas'
import Header from '../../Components/Header/Header'
import TableReports from '../../Components/TableReports/TableReports'
import { useReportes } from './useReportes'
import './Reportes.css'

const Reportes = () => {
  const {reportHandle, reportsend, report} = useReportes();
  return (
    <>
    <Header Text="Reportes" ></Header>
    <div className="container top">
      <FormFechas cambiar={reportHandle} enviar={reportsend}/>
      <TableReports data={report} />
    </div>
    </>
  )
}

export default Reportes