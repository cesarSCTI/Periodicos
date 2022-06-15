import React from 'react'
import { Link } from 'react-router-dom'
import { Error } from '../../Components/Buttons/Buttons'
import FormInvDiario from '../../Components/FormInvDiario/FormInvDiario'
import Header from '../../Components/Header/Header'

const InvDiario = () => {
    return (
        <>
            <Header Text="Productos del dia | 10-05-2022">
                <Link to="/"><Error Text="Regresar" /></Link>
            </Header>
            <FormInvDiario/>
        </>
    )
}

export default InvDiario