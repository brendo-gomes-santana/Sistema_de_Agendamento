import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../service";
import { toast } from "react-toastify";

export const LoginContext = createContext({})

export default function LoginProvider ({children}){
    
    const navigate = useNavigate()

    const [rh, setRh] = useState(null)
    const [loadingLogin, setLoadingLogin] = useState(false)

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
            api.defaults.headers.Authorization = `Bearer ${r.data.token}`;
            setLoadingLogin(false)
            toast.success('bem-vindo de volta')
            navigate('/rh')

        }).catch((err) => {
            console.log(err)
            toast.error(err.response.data.error)
            setLoadingLogin(false)
        })
        
    }

    async function logout(local){
        localStorage.removeItem(local)
        navigate('/')
    }
    
    return(
        <LoginContext.Provider value={{
            LoginRh, 
            setRh,
            authRH: !!rh,
            rh,
            
            
            loadingLogin,
            logout,            
        }}>
            {children}
        </LoginContext.Provider>
    )
}
