import React from 'react'
import './Header.css'

const Header = ({Text, children}) => {
  return (
    <div className='header'>
        <p>{Text}</p>
        {children}
    </div>
  )
}

export default Header