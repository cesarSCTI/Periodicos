import React from 'react'
import Loader from '../Loader/Loader'
import './Popup.css'

const Popup = ({ children }) => {
    return (
        <div className='container'>
            <div className='Popup'>
                <div className='Popup-content'>
                    <Loader />
                    {children}
                </div>
            </div>
        </div>

    )
}

export default Popup