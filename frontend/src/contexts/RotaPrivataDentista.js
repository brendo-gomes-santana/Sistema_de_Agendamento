import { useContext, useState, useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { LoginContext } from './LoginContext'

import Loding from '../components/Loading'
import api from '../service'

export default function RotaPrivataDentista({children}) {

    const { authDent, setDentista } = useContext(LoginContext)

    const [loading, setLoading] = useState(true)

    useEffect(()=> {
        (()=> {
            const dados = JSON.parse(localStorage.getItem('@inforDentista'))
            if(dados){
                setDentista(dados)
                api.defaults.headers.Authorization = `Bearer ${dados.token}`
                setLoading(false)
            }
            setLoading(false)
        })()
    },[setDentista])

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
    if(!authDent){
        return <Navigate to='/login/dentista'/>
    }

  return children
}
