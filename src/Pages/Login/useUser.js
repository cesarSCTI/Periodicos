/*import {useState} from "react"


export const useUser = () =>{
    const [data, setData] = useState([])
    const [User, setUser] = useState([])
    const [allow, setAllow] = useState(true)
    
    const userAuth = (User) => (User.status == 200) ? setAllow(true) : setAllow(false)

    const getLogin = async (e) =>{
        e.preventDefault()
       const response = await fetch(`https://api-rest-sist-periodico.deversite.com/login/${data.Usuario}/${data.Password}`)
       const dato = await response.json().finally()      
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
    
    

return {dataForm, getLogin, User, userAuth, allow, setAllow}
}*/