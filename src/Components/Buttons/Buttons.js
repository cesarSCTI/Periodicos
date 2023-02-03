import React from 'react'
import './Buttons.css';

export const Success = ({Text, F_Click}) => {
  return (
    <button className='btn actions success' onClick={F_Click}>
        {Text}
    </button>
  )
}

export const Error = ({Text, F_Click}) =>{
  return (
    <button className='btn actions error' onClick={F_Click}>
        {Text}
    </button>
  )
}
export const Opc = ({Text, F_Click}) =>{
  return (
    <button className='btn actions opcBtn' onClick={F_Click}>
      {Text}
  </button>
  )
}
export const NavPrincipal = ({Text, children, F_Click}) =>{
  return(
    <div className='btn actions NavPrincipal' onClick={F_Click}>
        <div className='icon'>{children}</div>
        {Text}
    </div>
  )
}
export const SubNav = ({Text, F_Click}) =>{
  return(
    <div className='subBtn actions SubNav' onClick={F_Click}>
        {Text}
    </div>
  )
}
export const InventarioBTN = ({Text, children, F_Click})=>{
  return (
    <div className='btn actions InventarioBTN' onClick={F_Click}>
        <div className='icon'>{children}</div>
        {Text}
    </div>
  )
}
//  icon list 
export const ErrorCancel = ({F_Click}) =>{
  return (
    <button className='btn actions error-item' onClick={F_Click}>
      <i class="bx bx-x-circle icon-item"></i>
    </button>
  )
}
export const ErrorEliminar = ({F_Click}) =>{
  return (
    <button className='btn actions error-item' onClick={F_Click}>
      <i class="bx bx-trash icon-item"></i>
    </button>
  )
}
export const SuccessPago = ({F_Click}) => {
  return (
    <button className='btn actions success-item' onClick={F_Click}>
        <i class="bx bx-dollar-circle icon-item"></i>
    </button>
  )
}

export const SuccessVer = ({F_Click}) =>{
  return (
    <button className='btn actions opcBtn' onClick={F_Click}>
<<<<<<< HEAD
      <i class="bx bx-detail icon-item"></i>
=======
      <i class="bx bx-search-alt icon-item"></i>
>>>>>>> alan
  </button>
  )
}
export const SuccessPagoInfo = ({F_Click}) => {
  return (
    <button className='btn actions success' onClick={F_Click}>
        {Text}
    </button>
  )
}