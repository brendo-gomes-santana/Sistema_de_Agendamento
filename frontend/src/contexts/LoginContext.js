import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../service";
import { toast } from "react-toastify";

export const LoginContext = createContext({})

export default function LoginProvider ({children}){
    
    const navigate = useNavigate()

    const [rh, setRh] = useState(null)
    const [loadingLogin, setLoadingLogin] = useState(false)

    const [secretaria, setSecretaria] = useState(null)
    const [lodingLoginSec, setLodingLoginSec] = useState(false)

    const [dentista, setDentista] = useState(null)
    const [loadingLoginDent, setLoadingLoginDent] = useState(false)

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
                email: r.data.email,
                token: r.data.token
            }

            setRh(rh)
            localStorage.setItem('@rhInfor', JSON.stringify(rh))
            api.defaults.headers.Authorization = `Bearer ${r.data.token}`;
            setLoadingLogin(false)
            toast.success(`Bem vindo de volta ${r.data.nome}`)
            navigate('/rh')

        }).catch((err) => {
            toast.error(err.response.data.error)
            setLoadingLogin(false)
        })
        
    }

    async function LoginSec(nome, password){
        setLodingLoginSec(true)

        await api.post('/session/secretaria',{
            nome,
            password
        })
        .then((r)=> {
            localStorage.setItem('@inforSec', JSON.stringify(r.data))
            api.defaults.headers.Authorization = `Bearer ${r.data.token}`;
            setSecretaria(r.data)
            setLodingLoginSec(false)
            toast.success(`Bem vindo de volta ${r.data.nome}`)
            navigate('/secretaria')
        })
        .catch((err)=> {
            toast.error(err.response.data.error)
            setLodingLoginSec(false)
        })
    }

    async function LoginDentista(email, password){
        setLoadingLoginDent(true)
        await api.post('/session/dentista', {
            email, 
            password
        })
        .then((r)=> {
            localStorage.setItem('@inforDentista', JSON.stringify(r.data))
            api.defaults.headers.Authorization = `Bearer ${r.data.token}`;
            toast.success(`Bem vindo de volta ${r.data.nome}`)
            setDentista(r.data)
            setLoadingLoginDent(false)
            navigate('/dentista')
        })
        .catch((err)=> {
            toast.error(err.response.data.error)
            setLoadingLoginDent(false)
        })
    }

    async function logout(local){
        toast.success(`Volte Sempre`)
        localStorage.removeItem(local)
        navigate('/')
    }
    
    return(
        <LoginContext.Provider value={{
            LoginRh, 
            setRh,
            authRH: !!rh,
            rh,
            
            LoginSec,
            setSecretaria,
            authSec: !!secretaria,
            secretaria,

            LoginDentista,
            setDentista,
            authDent: !!dentista,
            dentista,

            loadingLogin,
            lodingLoginSec,
            loadingLoginDent,
            logout,            
        }}>
            {children}
        </LoginContext.Provider>
    )
}
