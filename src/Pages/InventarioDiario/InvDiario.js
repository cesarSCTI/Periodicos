import React from 'react'
import { Link } from 'react-router-dom'
import { Error } from '../../Components/Buttons/Buttons'
import FormInvDiario from '../../Components/FormInvDiario/FormInvDiario'
import Header from '../../Components/Header/Header'

const InvDiario = () => {
    const date = new Date()
    return (
        <>
            <Header Text={`Productos del dia | ${date}`}>
                <Link to="/"><Error Text="Regresar" /></Link>
            </Header>
            <FormInvDiario/>
        </>
    )
}

export default InvDiario