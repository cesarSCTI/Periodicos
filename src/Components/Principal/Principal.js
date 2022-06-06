import React from 'react'
import './Principal.css';

const Principal = ({children}) => {
  return (
    <div className='principal'>
        {children}
    </div>
  )
}

export default Principal