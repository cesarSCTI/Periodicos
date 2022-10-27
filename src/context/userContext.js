import React, { createContext, useState } from "react";

export const UserContext = createContext([]);


const UserContextProvider = ({children}) => {
    const [data, setData] = useState([])
    const [User, setUser] = useState([])
    const [Allow, setAllow] = useState(true)
    
    const userAuth = (User) => {
        if( User.status === 200 ){
            setAllow(true)
            console.log(Allow)
        }
        else{    
            setAllow(false)
            console.log(Allow)
        }
    }

    const getLogin = async (e) =>{
        e.preventDefault()
       const response = await fetch(`https://api-rest-sist-periodico.deversite.com/login/${data.Usuario}/${data.Password}`)
       const dato = await response.json().finally(()=>{
           setAllow(false)
       })      
       setUser(dato)
       //userAuth(dato)
    }

    const dataForm = (e) =>{
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
        console.log(data)
    }

    return (
        <UserContext.Provider value={{
            Allow,
            User,
            dataForm, 
            getLogin, 
            userAuth, 
            setAllow 
        }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;

