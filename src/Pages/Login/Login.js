import React, {useContext} from 'react'
import { Error } from '../../Components/Buttons/Buttons'
import LoginForm from '../../Components/LoginForm/LoginForm'
import Popup from '../../Components/Popup/Popup'
import { UserContext } from '../../context/userContext'

import './Login.css'

const Login = () => {
  const {dataForm, getLogin} = useContext(UserContext)
  
  return (
    <div className="pageLogin">
       <LoginForm send={getLogin} change={dataForm} />
       {
         true
         ?<></>
         :
          <Popup>
            <div className="sesionAuth">
              <p>{/*User.messages.error*/}jdnjendjendjne</p>
              <Error Text="OK" F_Click={/*setAllow(true)*/()=>{}}/>
            </div>
          </Popup>
       }
    </div>
  )
}

export default Login