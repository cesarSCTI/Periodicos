import React, { createContext, useState } from "react";

export const usuarioContext = createContext([]);


const UserContextProvider = ({children}) => {
    const [data, setData] = useState([])
    const [User, setUser] = useState([])
    const [Allow, setAllow] = useState(false)
    
    const userAuth = (User) => {
        if( User.status === 200 ){
            //console.log("vengo de context "+ Allow)
           return setAllow(true)
        }
        else{    
            //console.log("vengo de context "+ Allow)
           return setAllow(false)  
        }
    }

    const getLogin = async (e) =>{
        e.preventDefault()
       const response = await fetch(`https://api-rest-sist-periodico.deversite.com/login/${data.Usuario}/${data.Password}`)
       const dato = await response.json().finally(()=>{
           setAllow(false)
       })      
       setUser(dato)
       userAuth(dato)
    }

    const dataForm = (e) =>{
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
        //console.log(data)
    }

    return (
        <usuarioContext.Provider value={{
            Allow,
            User,
            dataForm, 
            getLogin, 
            userAuth, 
            setAllow 
        }}>
            {children}
        </usuarioContext.Provider>
    )
}

export default UserContextProvider;

