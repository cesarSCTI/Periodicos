import React from 'react'
import './Popup.css'

const Popup = ({ children }) => {
    return (
        <div className='container'>
            <div className='Popup'>
              <div className='Popup-content'>
                    {children}
                </div>
            </div>
        </div>

    )
}

export default Popup