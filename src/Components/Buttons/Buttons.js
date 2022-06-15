import React from 'react'
import './Buttons.css';

export const Success = ({Text, F_Click}) => {
  return (
    <div className='btn actions success' onClick={F_Click}>
        {Text}
    </div>
  )
}

export const Error = ({Text, F_Click}) =>{
  return (
    <div className='btn actions error' onClick={F_Click}>
        {Text}
    </div>
  )
}
export const Opc = ({Text, F_Click}) =>{
  return (
    <div className='btn actions opcBtn' onClick={F_Click}>
      {Text}
  </div>
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