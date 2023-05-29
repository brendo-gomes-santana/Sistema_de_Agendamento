import { useContext, useEffect, useState } from "react"
import { LoginContext } from "./LoginContext"
import { Navigate } from "react-router-dom"
import Loding from "../components/Loading"
import api from "../service"
export default function RotaPRivataSec({children}) {
  const { authSec, setSecretaria } = useContext(LoginContext)
  const [loading, setLoading] = useState(true)

  useEffect(()=> {
    const dados = JSON.parse(localStorage.getItem('@inforSec'))
    if(dados){
      api.defaults.headers.Authorization = `Bearer ${dados.token}`;
      setSecretaria(dados)
      setLoading(false)
    }
    setLoading(false)
  }, [setSecretaria])

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
  if(!authSec){
    return <Navigate to='/login/secretaria'/>
  }

  return children
}
