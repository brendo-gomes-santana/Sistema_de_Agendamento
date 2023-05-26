import React, { useState, useContext } from 'react'
import { BiUser, BiLoaderCircle } from 'react-icons/bi'
import './style.scss'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { toast } from 'react-toastify'
import { LoginContext } from '../../contexts/LoginContext'
export default function LoginSecretaria() {
    const { LoginSec, lodingLoginSec } = useContext(LoginContext)
    const [nome, setNome] = useState('')
    const [password, setPassword] = useState('')

    async function handleLoginUser(e){
        e.preventDefault()

        if(!nome || !password){
            toast.error('Preenchar Todas as informações')
            return;
        }

        LoginSec(nome, password)
    }
    return (
        <main className='containerLoginUser'>
            <h1><BiUser/> Login da Secretária</h1>
            <form className='formUserLogin' onSubmit={handleLoginUser}>
                <label>
                    Nome:  <Input type='text' placeholder='Digite seu nome completo' 
                                value={nome} onChange={ v => setNome(v.target.value)}/>
                </label>
                <label>
                    Senha: <Input type='password' placeholder='Digite sua senha' 
                                value={password} onChange={ v => setPassword(v.target.value)}/>
                </label>
                <Button type='submit'>{lodingLoginSec? <BiLoaderCircle className='loader'/> : <span>Entrar</span>}</Button>
            </form>
        </main>
    )
    }

