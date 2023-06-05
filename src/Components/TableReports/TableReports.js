import React,{useState} from 'react'
import './TableReports.css'

const TableReports = ({data}) => {
  return (
    <div className='container'>
      <div className='contentreporttitulos'>
        <div className='d-20'>Periodico</div>
        <div className='d-20'>Cant. Recibida</div>
        <div className='d-20'>Cant. Entrega</div>
        <div className='d-20'>Importe Entrega</div>
        <div className='d-20'>Cant. Dev.</div>
        <div className='d-20'>Importe Dev.</div>
        <div className='d-20'>Cant. Actual.</div>       
      </div>
      {
        data.map(ele => 
          <div className='contentreport' key={ele.K_Producto}>
            <div className='d-20'>{ele.Nombre_Producto}</div>
            <div className='d-20'>
              <input type="text" className='inputProductreport' name='importe' value={ele.Cantidad_Total_Recibida} readOnly/>
            </div>
            <div className='d-20'>
              <input type="text" className='inputProductreport' name='importe' value={ele.Cantidad_Entrega} readOnly/>
            </div>
            <div className='d-20'>
              <input type="text" className='inputProductreport' name='importe' value={ele.Importe_Entrega} readOnly/>
            </div>
            <div className='d-20'>
              <input type="text" className='inputProductreport' name='Entre' value={ele.Total_Devoluciones} readOnly/>
            </div>
            <div className='d-20'>
              <input type="text" className='inputProductreport' name='Importe' value={ele.Importe_Devoluciones} readOnly/>
            </div>
            <div className='d-20'>
              <input type="text" className='inputProductreport' name='Devoluciones' value={ele.Cantidad_Resta} readOnly/>
            </div>
            
          </div>
     )
      }
      
    </div>
  )
}

export default TableReports