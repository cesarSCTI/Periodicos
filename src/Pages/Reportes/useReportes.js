import {useState} from 'react'

 export const useReportes = () => {
    const [data, setData] = useState([])
    const [report, setReport] = useState([])

    const reportHandle = (e) =>{
        setData({
            ...data,
            [e.target.name]: e.target.value
          })
  
          console.log(data)
    }

    const reportsend = async (e) =>{
        e.preventDefault()
        const response = await fetch(`https://api-rest-sist-periodico.deversite.com/reporte_inventario/${data.date1}/${data.date2}`)
        const dato = await response.json().finally()
        setReport(dato)
        console.log(dato)
    }
    return{reportHandle, reportsend, report}
}

