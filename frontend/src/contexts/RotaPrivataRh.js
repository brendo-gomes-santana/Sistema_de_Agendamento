
import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { LoginContext } from "./LoginContext"

export default function PrivataRh ({children}){
    const { authRH, loading } = useContext(LoginContext)
    if(loading){
        return(
            <div>
                <h1>carregando Informaçoes</h1>
            </div>
        )
    }
    if(!authRH){
        return <Navigate to='/'/>
    }

    return children
}
