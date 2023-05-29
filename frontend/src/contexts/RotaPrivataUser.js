import { useEffect, useState, useContext } from "react"
import { LoginContext } from "./LoginContext"

import { Navigate } from "react-router-dom"

import Loding from "../components/Loading"
import api from "../service"
export default function RotaPrivataUser({children}) {

    const [loading, setLoading] = useState(true)
    const { authUser, setUser } = useContext(LoginContext)

    useEffect(()=> {
        const dados = JSON.parse(localStorage.getItem('@inforUser'))
        if(dados){
            setUser(dados)
            api.defaults.headers.Authorization = `Bearer ${dados.token}`
            setLoading(false)

        }
        setLoading(false)
    }, [setUser])

    if(loading){
        return(
            <div style={{
                width: '100%',
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Loding/>
            </div>
        )
      }
    
    if(!authUser){
        return <Navigate to='/login/usuario'/>
    }

  return children
}
