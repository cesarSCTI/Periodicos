import React,{useState} from 'react'
import './TableReports.css'

const TableReports = ({data}) => {
  return (
    <div className='container'>
      <div className='contentreporttitulos'>
        <div className='d-20'>Periodico</div>
        <div className='d-20'>Cantidad Entrega</div>
        <div className='d-20'>Importe</div>
        <div className='d-20'>Devoluciones</div>
        <div className='d-20'>Importe</div>
      </div>
      {
        data.map(ele => 
          <div className='contentreport' key={ele.K_Producto}>
            <div className='d-20'>{ele.Nombre_Producto}</div>
            <div className='d-20'>
              <input type="text" className='inputProductreport' name='Entre' value={ele.Cantidad_Entrega} readOnly/>
            </div>
            <div className='d-20'>
              <input type="text" className='inputProductreport' name='Importe' readOnly/>
            </div>
            <div className='d-20'>
              <input type="text" className='inputProductreport' name='Devoluciones' value={ele.Total_Devoluciones} readOnly/>
            </div>
            <div className='d-20'>
              <input type="text" className='inputProductreport' name='importe' value={ele.Cantidad_Total_Recibida} readOnly/>
            </div>
          </div>
     )
      }
      
    </div>
  )
}

export default TableReports