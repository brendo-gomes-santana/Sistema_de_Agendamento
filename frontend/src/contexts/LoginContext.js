import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../service";
import { toast } from "react-toastify";

export const LoginContext = createContext({})

export default function LoginProvider ({children}){
    const navigate = useNavigate()

    const [rh, setRh] = useState(null)
    const [loadingLogin, setLoadingLogin] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(()=> {
        (()=> {
            const dados = JSON.parse(localStorage.getItem('@rhInfor'))
            if(dados){
                setRh(dados)
                setLoading(false)
            }
            setLoading(false)
        })()
    },[])

    async function LoginRh(email, password){
        setLoadingLogin(true)
        await api.post('session/rh',{
            email,
            password
        })
        .then((r) => {
            let rh = {
                id: r.data.id,
                nome: r.data.nome,
                token: r.data.token
            }

            setRh(rh)
            localStorage.setItem('@rhInfor', JSON.stringify(rh))
            setLoadingLogin(false)
            navigate('/rh')

        }).catch((err) => {
            console.log(err)
            toast.error(err.response.data.error)
            setLoadingLogin(false)
        })
        
    }

    async function logoutRH(){
        localStorage.removeItem('@rhInfor')
        navigate('/')

    }
    return(
        <LoginContext.Provider value={{
            LoginRh, 
            loadingLogin,
            authRH: !!rh,
            rh,
            loading,
            logoutRH
        }}>
            {children}
        </LoginContext.Provider>
    )
}
