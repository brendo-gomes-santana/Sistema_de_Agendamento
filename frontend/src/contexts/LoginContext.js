import { createContext, useState } from "react";
import api from "../service";
import { toast } from "react-toastify";

export const LoginContext = createContext({})

export default function LoginProvider ({children}){
    const [loadingLogin, setLoadingLogin] = useState(false)


    async function LoginRh(email, password){
        setLoadingLogin(true)
        await api.post('session/rh',{
            email,
            password
        })
        .then((r) => {
            console.log(r.data)
            setLoadingLogin(false)
        }).catch((err) => {
            console.log(err)
            toast.error(err.response.data.error)
            setLoadingLogin(false)
        })
        
    }

    return(
        <LoginContext.Provider value={{LoginRh, loadingLogin}}>
            {children}
        </LoginContext.Provider>
    )
}
