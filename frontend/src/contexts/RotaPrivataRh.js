
import { useContext, useEffect, useState } from "react"
import { Navigate } from "react-router-dom"
import { LoginContext } from "./LoginContext"

import Loding from "../components/Loading"

import api from "../service"

export default function PrivataRh ({children}){

    const { authRH, setRh } = useContext(LoginContext)

    const [loading, setLoading] = useState(true)

    useEffect(()=> {
        ( async ()=> {
            const dados = JSON.parse(localStorage.getItem('@rhInfor'))
            if(dados){
                api.defaults.headers.Authorization = `Bearer ${dados.token}`;
                setRh(dados)
                setLoading(false)
            }
            setLoading(false)
        })()
    },[setRh])

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
    if(!authRH){
        return <Navigate to='/login/rh'/>
    }
    
    return children
}
